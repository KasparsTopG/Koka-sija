const express = require('express')
const cors = require('cors')
const Database = require('better-sqlite3')
const path = require('path')

const db = new Database(path.join(__dirname, 'beam.db'))
db.exec(`
CREATE TABLE IF NOT EXISTS calculations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_email TEXT,
  length REAL, width REAL, height REAL, strength REAL,
  w REAL, q REAL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS licenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  valid_until TEXT NOT NULL
);`)
if (db.prepare('SELECT COUNT(*) c FROM licenses').get().c === 0) {
  const ins = db.prepare('INSERT INTO licenses (name, email, valid_until) VALUES (?,?,?)')
  ins.run('Test User', 'test@example.com', '2099-12-31')
  ins.run('Expired User', 'expired@example.com', '2020-01-01')
}

// Aprēķins (6. punkts: veikts back-end pusē)
function calc({ L, B, H, f }) {
  const v = [L, B, H, f].map(Number)
  if (v.some((x) => !Number.isFinite(x) || x <= 0)) return null
  const [l, b, h, fs] = v
  const W = (b * h * h) / 6          // m³
  const q = 8 * W * (fs / (l * l))   // kPa*m³/m² = kN/m
  return { W, q }
}

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/calculate', (req, res) => {
  const r = calc(req.body)
  if (!r) return res.status(400).json({ error: 'Visām vērtībām jābūt pozitīviem skaitļiem.' })
  res.json(r)
})

app.post('/api/calculations', (req, res) => {
  const r = calc(req.body)
  if (!r) return res.status(400).json({ error: 'Nederīgi ievades dati.' })
  const { L, B, H, f, email } = req.body
  const info = db
    .prepare('INSERT INTO calculations (user_email,length,width,height,strength,w,q) VALUES (?,?,?,?,?,?,?)')
    .run(email || null, L, B, H, f, r.W, r.q)
  res.json({ id: info.lastInsertRowid, ...r })
})

app.get('/api/calculations', (_req, res) => {
  res.json(db.prepare('SELECT * FROM calculations ORDER BY id DESC LIMIT 50').all())
})

// Licenču serveris (7. punkts)
app.post('/api/license/check', (req, res) => {
  const name = String(req.body.name || '').trim().toLowerCase()
  const email = String(req.body.email || '').trim().toLowerCase()
  const row = db.prepare('SELECT * FROM licenses WHERE lower(email)=?').get(email)
  if (!row || row.name.toLowerCase() !== name)
    return res.json({ valid: false, reason: 'Lietotājs nav atrasts licenču datubāzē.' })
  if (row.valid_until < new Date().toISOString().slice(0, 10))
    return res.json({ valid: false, reason: 'Licences termiņš ir beidzies.' })
  res.json({ valid: true })
})

app.listen(3000, () => console.log('Serveris darbojas: http://localhost:3000'))
