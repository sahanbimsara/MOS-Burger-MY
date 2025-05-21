const burgers = [
    {
        title: "Classic Burger (Large)",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s",
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
    }
];

const menu = document.getElementById("homeCards");

burgers.forEach(burger => {
    menu.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4" style="width: 100%;">
            <img src="${burger.img}" style="height:150px; object-fit: cover;" alt="${burger.title}">
            <div class="card-body">
                <h5 class="card-title">${burger.title}</h5>
                <p class="card-text">${burger.desc}</p>
                <a href="orderManage.html" class="btn btn-primary">
                <i class="bi bi-cart me-2"></i>
                </a>
            </div>
        </div>
    </div>
    
    `;
});