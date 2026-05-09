const nav = document.querySelector(".topbar");

let lastScrollPos = window.scrollY;

window.addEventListener("scroll",() => {
    if (lastScrollPos < window.scrollY)
    {
        nav.classList.add("hidden");
    }
    else
    {
        nav.classList.remove("hidden");    
    }

    lastScrollPos = window.scrollY;
});