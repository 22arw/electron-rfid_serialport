const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 900,
        height: 600,
        // backgroundColor: '#e3e3e3'
    });

    win.loadURL(`file://${__dirname}/dist/electron-angular-serialport/index.html`);

    win.webContents.openDevTools()

    win.on('closed', function () {
        win = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})

