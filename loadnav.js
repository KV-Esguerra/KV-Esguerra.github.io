fetch('nav.html')
.then(res => res.text())
.then(text => {
    let replaceElem = document.querySelector('script#load-nav');
    let navElem = new DOMParser().parseFromString(text, 'text/html').querySelector('nav');
    replaceElem.parentNode.replaceChild(navElem,replaceElem);
}).catch((err => console.log(err)));