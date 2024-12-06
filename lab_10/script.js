const bmw = {
    e3: {
        name: "BMW 3-series E3",
        image: "images/e3.jpg",
        details: {
            "Engines": "from 2.8L to 3.3L",
            "Weight": "from 1334 kg to 1515kg",
            "Horsepower": "from 150 hp to 200 hp",
            "Acceleration 0-100": "from 10.5s to 7.5s"
        }
    },
    e9: {
        name: "BMW 3-series E9",
        image: "images/bmw-e9-3-0-csi-1972.webp",
        details: {
            "Engines": "from 2.8L to 3.3L",
            "Weight": "from 1334 kg to 1515kg",
            "Horsepower": "from 150 hp to 200 hp",
            "Acceleration 0-100": "from 10.5s to 7.5s"
        }
    },
    e12: {
        name: "BMW 5-series E12",
        image: "images/e12.jpg",
        details: {
            "Engines": "from 1.8L to 3.5L",
            "Weight": "from 1250 kg to 1450kg",
            "Horsepower": "from 90 hp to 218 hp",
            "Acceleration 0-100": "from 12.5s to 8.1s"
        }
    },
    e21: {
        name: "BMW 3-series E21",
        image: "images/e21.jpg",
        details: {
            "Engines": "from 1.6L to 2.3L",
            "Weight": "from 1050 kg to 1180kg",
            "Horsepower": "from 75 hp to 143 hp",
            "Acceleration 0-100": "from 12.0s to 9.5s"
        }
    },
    e23: {
        name: "BMW 7-series E23",
        image: "images/e23.jpg",
        details: {
            "Engines": "from 2.5L to 3.5L",
            "Weight": "from 1550 kg to 1700kg",
            "Horsepower": "from 150 hp to 252 hp",
            "Acceleration 0-100": "from 10.0s to 7.4s"
        }
    },
    e24: {
        name: "BMW 6-series E24",
        image: "images/e24.jpg",
        details: {
            "Engines": "from 2.8L to 3.5L",
            "Weight": "from 1500 kg to 1650kg",
            "Horsepower": "from 184 hp to 286 hp",
            "Acceleration 0-100": "from 9.0s to 6.4s"
        }
    },
    e28: {
        name: "BMW 5-series E28",
        image: "images/e28.jpg",
        details: {
            "Engines": "from 1.8L to 3.5L",
            "Weight": "from 1300 kg to 1580kg",
            "Horsepower": "from 90 hp to 286 hp",
            "Acceleration 0-100": "from 12.8s to 6.8s"
        }
    },
    e30: {
        name: "BMW 3-series E30",
        image: "images/e30.jpg",
        details: {
            "Engines": "from 1.6L to 2.5L",
            "Weight": "from 1050 kg to 1400kg",
            "Horsepower": "from 100 hp to 192 hp",
            "Acceleration 0-100": "from 10.5s to 7.6s"
        }
    },
    e31: {
        name: "BMW 8-series E31",
        image: "images/e31.jpg",
        details: {
            "Engines": "from 4.0L to 5.6L",
            "Weight": "from 1790 kg to 2040kg",
            "Horsepower": "from 286 hp to 381 hp",
            "Acceleration 0-100": "from 6.8s to 5.5s"
        }
    },
    e32: {
        name: "BMW 7-series E32",
        image: "images/e32.jpg",
        details: {
            "Engines": "from 3.0L to 5.0L",
            "Weight": "from 1600 kg to 2000kg",
            "Horsepower": "from 185 hp to 300 hp",
            "Acceleration 0-100": "from 8.3s to 6.4s"
        }
    },
    e34: {
        name: "BMW 5-series E34",
        image: "images/e34.jpg",
        details: {
            "Engines": "from 1.8L to 4.0L",
            "Weight": "from 1400 kg to 1750kg",
            "Horsepower": "from 113 hp to 340 hp",
            "Acceleration 0-100": "from 12.0s to 5.9s"
        }
    },
    e36: {
        name: "BMW 3-series E36",
        image: "images/e36.jpg",
        details: {
            "Engines": "from 1.6L to 3.2L",
            "Weight": "from 1180 kg to 1450kg",
            "Horsepower": "from 102 hp to 321 hp",
            "Acceleration 0-100": "from 11.0s to 5.6s"
        }
    },
    e38: {
        name: "BMW 7-series E38",
        image: "images/e38.jpg",
        details: {
            "Engines": "from 2.8L to 5.4L",
            "Weight": "from 1760 kg to 2035kg",
            "Horsepower": "from 193 hp to 326 hp",
            "Acceleration 0-100": "from 9.0s to 6.3s"
        }
    },
    e39: {
        name: "BMW 5-series E39",
        image: "images/e39.webp",
        details: {
            "Engines": "from 1.9L to 4.9L",
            "Weight": "from 1450 kg to 1820kg",
            "Horsepower": "from 115 hp to 400 hp",
            "Acceleration 0-100": "from 10.2s to 5.1s"
        }
    },
    e46: {
        name: "BMW 3-series E46",
        image: "images/e46.avif",
        details: {
            "Engines": "from 1.6L to 3.2L",
            "Weight": "from 1250 kg to 1550kg",
            "Horsepower": "from 105 hp to 343 hp",
            "Acceleration 0-100": "from 11.2s to 5.2s"
        }
    },
    e60: {
        name: "BMW 5-series E60",
        image: "images/e60.jpg",
        details: {
            "Engines": "from 2.0L to 5.0L",
            "Weight": "from 1500 kg to 1955kg",
            "Horsepower": "from 150 hp to 507 hp",
            "Acceleration 0-100": "from 8.7s to 4.7s"
        }
    }
};

function showbmwInfo(bmwId) {
    const bmwInfo = document.getElementById("bmwinfo");
    const bmwContent = document.getElementById("bmw-content");
    const bmwData = bmw[bmwId];

    if (bmwData) {
        bmwContent.innerHTML = `
            <h2>${bmwData.name}</h2>
            <img src="${bmwData.image}" alt="${bmwData.name}">
            <p><strong>Engines:</strong> ${bmwData.details.Engines}</p>
            <p><strong>Weight:</strong> ${bmwData.details.Weight}</p>
            <p><strong>Horsepower:</strong> ${bmwData.details.Horsepower}</p>
            <p><strong>Acceleration 0-100:</strong> ${bmwData.details["Acceleration 0-100"]}</p>
        `;
        bmwInfo.style.display = "block";

       
        window.location.hash = `#${bmwId}`;
    } else {
        console.error(`Дані для BMW ID '${bmwId}' не знайдено`);
    }
}

function closebmwInfo() {
    const bmwInfo = document.getElementById("bmwinfo");
    bmwInfo.style.display = "none";
    window.location.hash = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash) {
        const carId = hash.replace('#', ''); 
        if (bmw[carId]) {
            showbmwInfo(carId); 
        }
    }

    const bmwInfo = document.getElementById("bmwinfo");
    if (bmwInfo) {
        bmwInfo.addEventListener("click", (event) => {
            if (event.target === bmwInfo) closebmwInfo();
        });
    }

    const bmwButtons = document.querySelectorAll(".bmw-button");
    bmwButtons.forEach((button, index) => {
        const carKey = Object.keys(bmw)[index];
        button.addEventListener("click", () => {
            showbmwInfo(carKey); 
        });
    });
});
function closebmwInfo() {
    const bmwInfo = document.getElementById("bmwinfo");
    bmwInfo.style.display = "none";
    window.location.hash = ""; 
}
window.location.hash = `#car${carIndex}`;

