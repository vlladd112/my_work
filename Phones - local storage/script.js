window.onload = function() {
    /*const emagThings = [{
        id: 1,
        name: "Telefon mobil HTC U 11, Dual SIM, 64GB, 4G, Brilliant Black",
        imageUrl: "https://s12emagst.akamaized.net/products/6053/6052836/images/res_151cbf9f491dc8b1555e14bfe5a60fbc_150x150_bpqg.jpg",
        quantity: 5,
        price: 1200
    },{
        id: 2,
        name: "Acumulator extern A+, 20000 mAh",
        imageUrl: "https://s12emagst.akamaized.net/products/8023/8022875/images/res_afbd4b05ee5bd92012da2404452eb9ed_450x450_lfqn.jpg",
        quantity: 15,
        price: 300
    },{
        id: 3,
        name: "Acumulator extern Smart Charge 1010 10000 mAh cablu micro USB Negru",
        imageUrl: "https://s12emagst.akamaized.net/products/8168/8167260/images/res_70379d488494cd7c8c5d4012bdb680c9_450x450_d5do.jpg",
        quantity: 7,
        price: 150
    },{
        id: 4,
        name: "Telefon mobil Meizu M6, Dual SIM, 32GB, 4G, Black",
        imageUrl: "https://s12emagst.akamaized.net/products/14586/14585039/images/res_154d644544cb77ce57d6b6b87aa108e0_450x450_19s3.jpg",
        quantity: 7,
        price: 1000
    },{
        id: 5,
        name: "Telefon mobil Nokia 3, Dual SIM, 16GB, Copper White",
        imageUrl:"https://s12emagst.akamaized.net/products/8665/8664917/images/res_fd6e9f225340a180c38950103c489c4e_450x450_u1ak.jpg",
        quantity: 7,
        price: 1685
    }]
    //console.log(emagThings);
    localStorage.setItem('emagItems', JSON.stringify(emagThings));*/
    const itemStringifyat = localStorage.getItem('emagItems');
    let itemParsat = JSON.parse(itemStringifyat);
    console.log("ITEMPARSAT",itemParsat);
    for(let i=0; i<itemParsat.length; i++) {
        const unItemParsat = itemParsat[i];
        const globalContainer = document.getElementById('globalContainer');
        const elementContainer = document.createElement('div');
        elementContainer.setAttribute('id', itemParsat[i].id);
        elementContainer.setAttribute('class', 'element-container')
        globalContainer.appendChild(elementContainer);
        const elName = document.createElement('h3');
        elName.innerHTML = itemParsat[i].name;
        elementContainer.appendChild(elName);
        const imgURL = document.createElement('img');
        imgURL.setAttribute('src', itemParsat[i].imageUrl);
        elementContainer.appendChild(imgURL);
        const elQuantity = document.createElement('p');
        elQuantity.setAttribute('id',"id" + itemParsat[i].id);
        elQuantity.innerHTML = 'Disponibil: ' + '<span class="span-buc">' + itemParsat[i].quantity + ' buc' + '</span>';
        if(itemParsat[i].quantity <= 3) {
            elQuantity.style.color = 'red';
        }
        elementContainer.appendChild(elQuantity);
        const elPrice = document.createElement('p');
        elPrice.innerHTML = 'Preț: ' + '<span>'  + itemParsat[i].price + ' LEI' + '</span>';
        elementContainer.appendChild(elPrice);
        const buyButton = document.createElement('button');
        buyButton.setAttribute('id', "btn" + itemParsat[i].id);
        buyButton.innerHTML = 'Cumpără';
        elementContainer.appendChild(buyButton);
        buyButton.addEventListener('click', (event) => {
            const parentEl = event.target.parentElement;
            console.log(parentEl);
            let idEl = parentEl.getAttribute("id");
            console.log(idEl);
            const v = document.getElementById("id" + idEl);
            console.log(v);
            const indexxx = itemParsat.findIndex(x => x.id == idEl);
            console.log(indexxx);
            const elementDinamic = itemParsat[indexxx];
            console.log(elementDinamic);
            const newQuantity = elementDinamic.quantity - 1;
            v.innerHTML = 'Disponibil: ' + '<span>' + newQuantity + ' buc' + '</span>';
            elementDinamic.quantity = newQuantity;
            localStorage.setItem('emagItems', JSON.stringify(itemParsat));
            const newItemStringifyat = localStorage.getItem('emagItems');
            const newItemParsat = JSON.parse(newItemStringifyat);
            console.log('newItemParsat:', newItemParsat);
            if(elementDinamic.quantity <= 3) {
                const xxx = event.target.parentElement;
                console.log(xxx);
                const ccc = xxx.getElementsByTagName('p')[0];
                console.log(ccc);
                ccc.style.color = 'red';
            }
            if(elementDinamic.quantity === 0) {
                newItemParsat.splice(indexxx, 1);
                itemParsat = newItemParsat;
                localStorage.setItem('emagItems', JSON.stringify(newItemParsat));
                globalContainer.removeChild(elementContainer);
            }
        })
    }
}