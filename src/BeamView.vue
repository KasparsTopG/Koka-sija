<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const props = defineProps({ L: Number, B: Number, H: Number })
const el = ref(null)
let renderer, scene, camera, controls, group, ro, raf, lastL = null

function clear() {
  if (!group) return
  group.traverse((o) => { o.geometry?.dispose(); o.material?.dispose?.() })
  scene.remove(group)
}

function build() {
  const L = Math.max(+props.L || 0.1, 0.01)
  const B = Math.max(+props.B || 0.01, 0.001)
  const H = Math.max(+props.H || 0.01, 0.001)
  clear()
  group = new THREE.Group()
  // x = garums, y = augstums, z = platums
  const geo = new THREE.BoxGeometry(L, H, B)
  group.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xc08a50, roughness: 0.8 })))
  group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0x4a2f12 })))
  const grid = new THREE.GridHelper(Math.max(L * 2, 4), Math.max(Math.round(L * 2), 4), 0x888888, 0xcccccc)
  grid.position.y = -H / 2 - 0.001
  group.add(grid)
  scene.add(group)
  if (lastL !== L) { // pielāgo kameru, ja mainās garums
    camera.position.set(L * 0.7, L * 0.5, L * 0.9)
    controls.target.set(0, 0, 0)
    controls.update()
    lastL = L
  }
}

function resize() {
  const w = el.value.clientWidth, h = el.value.clientHeight
  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
}

onMounted(() => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf4f6f8)
  camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1000)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  el.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const dl = new THREE.DirectionalLight(0xffffff, 1.2)
  dl.position.set(5, 10, 7)
  scene.add(dl)
  build()
  resize()
  ro = new ResizeObserver(resize)
  ro.observe(el.value)
  const loop = () => { raf = requestAnimationFrame(loop); controls.update(); renderer.render(scene, camera) }
  loop()
})

// Automātiska 3D atjaunošana, mainoties L, B vai H
watch(() => [props.L, props.B, props.H], () => scene && build())

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
  clear()
  controls?.dispose()
  renderer?.dispose()
})
</script>

<template><div ref="el" class="beam3d"></div></template>

<style scoped>
.beam3d { width: 100%; height: 100%; min-height: 320px; }
.beam3d :deep(canvas) { display: block; }
</style>
