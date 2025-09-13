/*
    Function to handle the window close event by gracefully exiting the Neutralino application.
*/
function onWindowClose() {
    Neutralino.app.exit();
}

// Initialize Neutralino
Neutralino.init();

// Register event listeners
Neutralino.events.on("windowClose", onWindowClose);
Neutralino.events.on("ready", () => {
    document.getElementById("resmode").innerText = NL_RESMODE;
    document.body.classList.add(NL_RESMODE);
})