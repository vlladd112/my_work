
const isLS = localStorage.getItem('userName');
if(isLS === null) {
    const html = document.getElementById('html');
    html.style.display = 'none';
    alert("You can't access page content without getting acquainted! I must first know your name! You will be redirected to Home page.");
    window.location.href = "index.html";
    }
window.onload = ()=>{
    const year = document.getElementById('year');
    const currentYear = document.createTextNode(new Date().getFullYear());
    year.appendChild(currentYear);
    }