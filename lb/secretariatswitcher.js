document.addEventListener("click", (e) => {
    const button = e.target.closest(".secSwitchBtn");
    if (!button) return;

    document.querySelectorAll(".secSwitchBtn").forEach((element) => {
        element.classList.remove("selected");
    });
    button.classList.add("selected");

    document.querySelectorAll(".secretariatDiv").forEach((element) => {
        element.classList.remove("selected");
    });
    
    const secretariatId = button.id.slice(-4);
    const secretariatEl = document.getElementById(`secretariat${secretariatId}`);
    if (secretariatEl) {
        secretariatEl.classList.add("selected");
    }
});