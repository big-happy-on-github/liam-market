document.addEventListener("keydown", function(event) {
    if (event.code === "Space" || event.key === " ") {
        event.preventDefault();
        window.location.href = "https://membean.com/";
    }
});
