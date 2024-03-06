import { app, BrowserWindow } from 'electron';

app.whenReady().then(() => {
  new BrowserWindow().webContents.loadURL('http://localhost:3000');
});
