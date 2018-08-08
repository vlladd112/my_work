window.onload = ()=>{
    const localStorageUserName = localStorage.getItem('userName');
    if(localStorageUserName) {
        const nameSpan = document.getElementById('spanName');
        nameSpan.innerHTML = localStorageUserName;
        const year = document.getElementById('year');
        const currentYear = document.createTextNode(new Date().getFullYear());
        year.appendChild(currentYear);
    };
};
