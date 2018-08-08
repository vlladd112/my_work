window.onload = ()=>{
    const inputData = document.getElementById('nameInput');
    const isLS = localStorage.getItem('userName');
    if(isLS) {
        const body = document.getElementById('body');
        body.style.justifyContent = "space-between";
        const userNameLS = localStorage.getItem('userName')
        const hiParag = document.getElementById('hiParag');
        hiParag.style.display = "block";
        const spanName = document.getElementById('spanName');
        spanName.innerHTML = userNameLS;
        const notYou = document.getElementById('notYouSpanName');
        notYou.innerHTML = userNameLS;
        const noLS = document.querySelectorAll('.noLS');
        for(let i=0; i<noLS.length; i++) {
            noLS[i].style.display = "none";
        };
        const LS = document.querySelectorAll('.LS');
        for (let i=0; i<LS.length; i++) {
            LS[i].style.display = "flex";
        };
        const removeLS = document.getElementById('removeLS');
        removeLS.addEventListener("click", (e)=> {
            localStorage.removeItem('userName');
            
            for (let i=0; i<LS.length; i++) {
                LS[i].style.display = "none";
            };
            for(let i=0; i<noLS.length; i++) {
                noLS[i].style.display = "flex";
                const body = document.getElementById('body');
                body.style.justifyContent = "center";
            };
            const nameInput = document.getElementById('nameInput');
            nameInput.value = "";
        });
    }
       
    const submit = document.getElementById("submit");
    submit.addEventListener("click", (event)=>{
        const userName = inputData.value;
        if(userName != "") {
            console.log(userName);
            window.localStorage.setItem('userName', userName);
            const userNameLS = localStorage.getItem('userName')
            const hiParag = document.getElementById("hiParag");
            hiParag.style.display = "flex";
            const spanName = document.getElementById("spanName");
            spanName.innerHTML = userNameLS;
            const notYou = document.getElementById('notYouSpanName');
            notYou.innerHTML = userNameLS;
            const noLS = document.querySelectorAll(".noLS");
            console.log(noLS);
            for(let i=0; i<noLS.length; i++) {
                noLS[i].style.display = "none";
            };
            const LS = document.querySelectorAll(".LS");
            for (let i=0; i<LS.length; i++) {
                LS[i].style.display = "flex";
                const body = document.getElementById('body');
                body.style.justifyContent = "space-between";
            };
        };
        const removeLS = document.getElementById('removeLS');
        removeLS.addEventListener("click", (e)=> {
            const noLS = document.querySelectorAll('.noLS');
            const LS = document.querySelectorAll('.LS');
            localStorage.removeItem('userName');
            for (let i=0; i<LS.length; i++) {
                LS[i].style.display = "none";
            };
            for(let i=0; i<noLS.length; i++) {
                noLS[i].style.display = "block";
            };
            const nameInput = document.getElementById('nameInput');
            nameInput.value = "";
        });
    });
    const year = document.getElementById('year');
    const currentYear = document.createTextNode(new Date().getFullYear());
    year.appendChild(currentYear);
}