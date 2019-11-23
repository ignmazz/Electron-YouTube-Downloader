var cmd = require('node-cmd');
var path = require('path');

async function runCommand() {
    await cmd.run('node server.js');
}

runCommand();

const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'icons/png/64x64.png'),
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});