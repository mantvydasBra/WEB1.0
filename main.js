document.getElementById("menu").addEventListener("click", function(e) {
    console.log("asdasd")
    if (e.target && e.target.nodeName === "A") {
        let lis = document.getElementsByClassName("link");
        for (let item of lis) {
            if (item.classList.contains("active"))
                item.classList.remove("active");
        }
        e.target.classList.add("active");
    }
});
