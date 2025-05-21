const burgers = [
    {
        title: "Classic Burger (Large)",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
        itemCode: "B1001",
        itemPrice: "LKR 750.00"

    },
    {
        title: "Classic Burger (Regular)",
        img: "../img/ClassicLarge.jpg",
        itemCode: "B1002",
        itemPrice: "LKR 1500.00"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger",
        itemCode: "B1003",
        itemPrice: "LKR 1600.00"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },
    {
        title: "Classic Burger (Large)",
        img: "../img/ClassicLarge.jpg",
        desc: "Large Burger"
    },

];

const bugCards = document.getElementById("burgerCards");

burgers.forEach(burger => {
    bugCards.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4" style="width: 100%;">
            <img src="${burger.img}" style="height:150px; object-fit: cover;" alt="${burger.title}">
            <div class="card-body">
                <h5 class="card-title">${burger.title}</h5>
                <p class="card-text">Item Code - ${burger.itemCode}</p>
                <p class="card-text">Price - ${burger.itemPrice}</p>
                <a href="orderManage.html" class="btn btn-primary">
                <i class="bi bi-cart me-2"></i>
                </a>
            </div>
        </div>
    </div>    
    `;
});


// submarine cards 

const submarines = [{
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}]

const subCards = document.getElementById("submarineCards");

submarines.forEach(submarine => {
    subCards.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4" style="width: 100%;">
            <img src="${submarine.img}" style="height:150px; object-fit: cover;" alt="${submarine.title}">
            <div class="card-body">
                <h5 class="card-title">${submarine.title}</h5>
                <p class="card-text">Item Code - ${submarine.itemCode}</p>
                <p class="card-text">Price - ${submarine.itemPrice}</p>
                <a href="orderManage.html" class="btn btn-primary">
                <i class="bi bi-cart me-2"></i>
                </a>
            </div>
        </div>
    </div>    
    `;
});


const fries = [{
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, 
]

const friCards = document.getElementById("FriesCards");


fries.forEach(fri => {
    friCards.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4" style="width: 100%;">
            <img src="${fri.img}" style="height:150px; object-fit: cover;" alt="${fri.title}">
            <div class="card-body">
                <h5 class="card-title">${fri.title}</h5>
                <p class="card-text">Item Code - ${fri.itemCode}</p>
                <p class="card-text">Price - ${fri.itemPrice}</p>
                <a href="orderManage.html" class="btn btn-primary">
                <i class="bi bi-cart me-2"></i>
                </a>
            </div>
        </div>
    </div>    
    `;
});


const pasta = [{
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
},{
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}]

const pastaCards = document.getElementById("pastaCards");

pasta.forEach(pasta => {
    pastaCards.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4" style="width: 100%;">
            <img src="${pasta.img}" style="height:150px; object-fit: cover;" alt="${pasta.title}">
            <div class="card-body">
                <h5 class="card-title">${pasta.title}</h5>
                <p class="card-text">Item Code - ${pasta.itemCode}</p>
                <p class="card-text">Price - ${pasta.itemPrice}</p>
                <a href="orderManage.html" class="btn btn-primary">
                <i class="bi bi-cart me-2"></i>
                </a>
            </div>
        </div>
    </div>    
    `;
});



const chicken = [{
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, 
]

const chickenCards = document.getElementById("chickenCards");


chicken.forEach(meat => {
    chickenCards.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4" style="width: 100%;">
            <img src="${meat.img}" style="height:150px; object-fit: cover;" alt="${meat.title}">
            <div class="card-body">
                <h5 class="card-title">${meat.title}</h5>
                <p class="card-text">Item Code - ${meat.itemCode}</p>
                <p class="card-text">Price - ${meat.itemPrice}</p>
                <a href="orderManage.html" class="btn btn-primary">
                <i class="bi bi-cart me-2"></i>
                </a>
            </div>
        </div>
    </div>    
    `;
});


const bevarage = [{
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}, {
    title: "Classic Burger (Large)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
    itemCode: "B1001",
    itemPrice: "LKR 750.00"
}]

const bevarageCards = document.getElementById("beveragesCards");


bevarage.forEach(bev => {
    bevarageCards.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4" style="width: 100%;">
            <img src="${bev.img}" style="height:150px; object-fit: cover;" alt="${bev.title}">
            <div class="card-body">
                <h5 class="card-title">${bev.title}</h5>
                <p class="card-text">Item Code - ${bev.itemCode}</p>
                <p class="card-text">Price - ${bev.itemPrice}</p>
                <a href="orderManage.html" class="btn btn-primary">
                <i class="bi bi-cart me-2"></i>
                </a>
            </div>
        </div>
    </div>    
    `;
});

