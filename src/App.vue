<script setup>
import { reactive, ref, watch, onMounted } from 'vue'
import BeamView from './BeamView.vue'

const API = 'http://localhost:3000/api'
const state = ref('checking') // checking | login | app
const user = reactive({ name: '', email: '' })
const form = reactive({ L: 6, B: 0.1, H: 0.3, f: 20000 })
const result = ref(null)
const error = ref('')
const history = ref([])
const msg = ref('')

async function login() {
  const ok = await window.api.checkLicense({ name: user.name, email: user.email })
  if (ok) {
    localStorage.setItem('user', JSON.stringify({ name: user.name, email: user.email }))
    state.value = 'app'
    compute()
    loadHistory()
  } // ja nav derīga, galvenais process aizver programmu
}

onMounted(() => {
  const saved = localStorage.getItem('user')
  if (saved) { Object.assign(user, JSON.parse(saved)); login() } else state.value = 'login'
})

function logout() {
  localStorage.removeItem('user')
  user.name = ''
  user.email = ''
  result.value = null
  state.value = 'login'
}

let timer
async function compute() {
  try {
    const r = await fetch(`${API}/calculate`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
    })
    const d = await r.json()
    if (!r.ok) { error.value = d.error; result.value = null } else { error.value = ''; result.value = d }
  } catch { error.value = 'Nav savienojuma ar serveri.' }
}
watch(form, () => { clearTimeout(timer); timer = setTimeout(compute, 200) })

async function save() {
  const r = await fetch(`${API}/calculations`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form, email: user.email })
  })
  msg.value = r.ok ? 'Saglabāts datubāzē.' : 'Saglabāt neizdevās.'
  if (r.ok) loadHistory()
}
async function loadHistory() {
  try { history.value = await (await fetch(`${API}/calculations`)).json() } catch {}
}
</script>

<template>
  <main v-if="state === 'checking'" class="center">Pārbauda licenci…</main>

  <main v-else-if="state === 'login'" class="center">
    <form class="panel login" @submit.prevent="login">
      <h1>Licences pārbaude</h1>
      <label>Vārds <input v-model="user.name" required /></label>
      <label>E-pasts <input v-model="user.email" type="email" required /></label>
      <button>Turpināt</button>
      <small>Testam: Test User / test@example.com</small>
    </form>
  </main>

  <main v-else class="layout">
    <section class="panel">
      <h1>Koka sijas nestspēja</h1>
      <small>{{ user.name }} ({{ user.email }})</small>
      <button @click="logout">Iziet</button>
      <label>Sijas garums, L (m) <input v-model.number="form.L" type="number" step="0.1" min="0.1" /></label>
      <label>Sijas platums, B (m) <input v-model.number="form.B" type="number" step="0.01" min="0.01" /></label>
      <label>Sijas augstums, H (m) <input v-model.number="form.H" type="number" step="0.01" min="0.01" /></label>
      <label>Stiprība, f (kPa) <input v-model.number="form.f" type="number" step="500" min="1" /></label>

      <div class="result">
        <div v-if="error" class="err">{{ error }}</div>
        <template v-else-if="result">
          <span>Pretestības moments W = {{ result.W.toFixed(6) }} m³</span>
          <strong>q = {{ result.q.toFixed(2) }} kN/m</strong>
          <span>pieļaujamā izkliedētā slodze uz sijas</span>
        </template>
      </div>
      <button :disabled="!result" @click="save">Saglabāt datubāzē</button>
      <small>{{ msg }}</small>
    </section>

    <section class="view"><BeamView :L="form.L" :B="form.B" :H="form.H" /></section>

    <section class="panel hist">
      <h2>Saglabātie aprēķini</h2>
      <p v-if="!history.length">Vēl nav saglabātu aprēķinu.</p>
      <table v-else>
        <thead><tr><th>Datums</th><th>L</th><th>B</th><th>H</th><th>f</th><th>q, kN/m</th></tr></thead>
        <tbody>
          <tr v-for="h in history" :key="h.id">
            <td>{{ h.created_at }}</td><td>{{ h.length }}</td><td>{{ h.width }}</td>
            <td>{{ h.height }}</td><td>{{ h.strength }}</td><td>{{ h.q.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style>
:root { --bg: #eef1f3; --ink: #1f2a30; --wood: #8a5a2b; --line: #d3d9dd; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, 'Times New Roman', serif; background: var(--bg); color: var(--ink); }
.center { display: grid; place-items: center; height: 100vh; }
.layout { display: grid; grid-template-columns: 340px 1fr; grid-template-rows: 1fr 220px; gap: 12px; height: 100vh; padding: 12px; }
.panel { background: #fff; border: 1px solid var(--line); padding: 16px; display: flex; flex-direction: column; gap: 10px; overflow: auto; }
.view { border: 1px solid var(--line); background: #fff; min-height: 0; }
.hist { grid-column: 1 / 3; }
h1 { font-size: 1.4rem; margin: 0 0 6px; } h2 { font-size: 1.05rem; margin: 0; }
label { display: flex; flex-direction: column; gap: 4px; font-size: .9rem; }
input { padding: 7px; border: 1px solid var(--line); font: inherit; }
input:focus-visible, button:focus-visible { outline: 2px solid var(--wood); outline-offset: 1px; }
button { padding: 9px; background: var(--wood); color: #fff; border: 0; font: inherit; cursor: pointer; }
button:disabled { opacity: .5; cursor: default; }
.result { display: flex; flex-direction: column; gap: 4px; padding: 12px; background: #f7efe6; border-left: 4px solid var(--wood); }
.result strong { font-size: 1.8rem; }
.err { color: #a12; }
.login { width: 340px; }
table { width: 100%; border-collapse: collapse; font-size: .85rem; }
th, td { text-align: left; padding: 4px 8px; border-bottom: 1px solid var(--line); }
@media (max-width: 800px) { .layout { grid-template-columns: 1fr; grid-template-rows: auto 320px auto; height: auto; } .hist { grid-column: 1; } }
</style>
