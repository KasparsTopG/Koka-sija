const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')

const API = process.env.API_URL || 'http://localhost:3000'
const dev = process.argv.includes('--dev')

// Licences pārbaude: pieprasījums licenču serverim (7. punkts)
ipcMain.handle('license:check', async (_e, user) => {
  let ok = false
  let reason = ''
  try {
    const r = await fetch(`${API}/api/license/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    const d = await r.json()
    ok = !!d.valid
    reason = d.reason || ''
  } catch {
    reason = 'Licenču serveris nav pieejams.'
  }
  if (!ok) {
    dialog.showErrorBox('Licence nav derīga', reason || 'Šim lietotājam nav derīgas licences.')
    app.quit() // nav licences -> programma tiek aizvērta
  }
  return ok
})

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true }
  })
  if (dev) win.loadURL('http://localhost:5173')
  else win.loadFile(path.join(__dirname, '../dist/index.html'))
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
