const form = document.getElementById("form");

    form.addEventListener("submit", function confirmSubmit() {
        return confirm("Are you sure you want to submit?")
    });
    form.addEventListener("reset", function confirmReset() {
        return confirm("Are you sure you want to clear your results?")
    });

    function checkEmpty(element) {
        if (element.value.trim() === "") {
            element.classList.add("invalid");
        } else {
            element.classList.remove("invalid");
        }
    }
