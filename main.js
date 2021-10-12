document.getElementById("menu").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "A") {
        let lis = document.getElementsByClassName("link");
        for (let item of lis) {
            if (item.classList.contains("active"))
                item.classList.remove("active");
        }
        e.target.classList.add("active");
    }
});

function zoomIn(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

 
document.getElementsByClassName("menu-btn")[0].addEventListener("click", () => document.getElementsByTagName("body")[0].classList.toggle("fixed-position"));
document.getElementsByClassName("menu-btn")[0].addEventListener("click", () => document.getElementsByTagName("main")[0].classList.toggle("no-clicks"));
