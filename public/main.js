//TODO: We can use this import syntax after updating to TypeScript:
// import { app, BrowserWindow } from "electron";

const { app, BrowserWindow } = require("electron");

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {

        }
    });

    window.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});