const { app, BrowserWindow, Menu, shell, dialog } = require("electron");
const path = require("path");

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  });

  win.on("ready-to-show", () => {
    win.show();
  });

  win.on("closed", () => {
    win = null;
  });

  win.loadFile(path.join(__dirname, "dist", "index.html"));
  win.webContents.openDevTools();
};

app.whenReady().then(createWindow);
