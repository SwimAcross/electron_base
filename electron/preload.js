// preload.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  ipcRenderer,
  MouthThrough: (args) => ipcRenderer.send('set-ignore-mouse-events', args)
});
