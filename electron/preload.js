const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('api', {
  checkLicense: (user) => ipcRenderer.invoke('license:check', user)
})
