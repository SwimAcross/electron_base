const { app, BrowserWindow, ipcMain, screen } = require('electron');

const path = require('path');

// 屏蔽安全警告
// ectron Security Warning (Insecure Content-Security-Policy)
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

// 获取屏幕大小
function getScreenSize() {
  const { x, y } = screen.getCursorScreenPoint(); // 获取当前鼠标位置
  return screen.getDisplayNearestPoint({ x, y }).bounds; // 获取一个距离鼠标位置最近的屏幕 的 矩形大小
}

const createWindow = () => {
  const { width, height } = getScreenSize();
  const win = new BrowserWindow({
    // 窗口图标
    icon: path.join(__dirname, 'resource/shortcut.ico'),
    width: width - 1,
    height: height,
    webPreferences: {
      // contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, 'electron/preload.js')
    },
    frame: false,
    resizable: false,
    transparent: true,
    alwaysOnTop: true
  });
  // 加载vue url视本地环境而定，如http://localhost:5173
  // win.loadURL('http://localhost:3000')

  // development模式
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    // 开启调试台
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  }

  // 鼠标点击穿透事件监听
  ipcMain.on('set-ignore-mouse-events', (event, args) => {
    if (!win) return;
    if(args === 'mouseenter') {
      win.setIgnoreMouseEvents(true, { forward: true });
    } else {
      win.setIgnoreMouseEvents(false);
    }
    ;
  });
  
  // 退出应用
  ipcMain.on('logOut', () => {
    app.quit();
    app.exit();
  });
};
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
