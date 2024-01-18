/// <reference path="watches.js" />

let counter = 1;
let mybutton = document.getElementById("myBtn");
console.log(watches);
window.onscroll = function() {scrollFunction()};
getWatches();

// INIT GSAP SCROLL PLUGIN
gsap.registerPlugin(ScrollTrigger);

// SHOW CONTENT
window.onload = () => {
    document.querySelector('body').style.opacity = 1;
}

// ITERATE ALL ELEMENTS
let sections = document.querySelectorAll('.gsap_scrollReveal');
for (let i = 0; i < sections.length; i++) {
    generateScrollAnimation(i);
}

// REGISTER ANIMATION
function generateScrollAnimation(i) {

    let element = sections[i];

    /* SET START KEY FRAME */
    if (i % 2 == 0) {
        gsap.set(element, {
            x: '-20%',
            scale: 0,
            opacity: 0
        });
    } else {
        gsap.set(element, {
            x: '20%',
            scale: 0,
            opacity: 0
        });
    }

    /* SET END KEY FRAME */
    gsap.to(element, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
            trigger: element,
            start: '50% 80%',  /* 'Ankerpunkt Offset' */
        }
    });
}

function getWatches() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        document.getElementById('content').innerHTML += `
        <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
            <div class="gsap_scrollReveal" id="section${counter}">
                <div id="main">
                    <div id="box1">
                        ${watches[i].img}
                    </div>
                    <div id="box2">
                        <h1>${watches[i].brand}</h1>
                        <h2>${watches[i].model}</h2>
                        <h2>${watches[i].name}</h2>

                        <div id="infos">
                            <p>Vintage: ${watches[i].year}</p>
                            <p>Size: ${watches[i].size}</p>
                        </div>

                        <div id="build">
                            <p>Dial: ${watches[i].material_dial}</p>
                            <p>Housing: ${watches[i].material_housing}</p>
                            <p>Watchstrap: ${watches[i].material_bracelet}</p>
                        </div>

                        <div id="prices">
                            <p>${watches[i].price}</p>
                        </div>  
                    </div>
                </div>
            </div>
        </section>`;
    }
    counter++;
}

function showLowPriced() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].price_range == "Low-Priced") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showMidPriced() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].price_range == "Mid-Priced") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showHighPriced() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].price_range == "High-Priced") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showExtremeHighPriced() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].price_range == "Extreme-High-Priced") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showAllRolex() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].brand == "Rolex") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showAllAudemarsPiguet() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].brand == "Audemars Piguet") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showAllCasio() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].brand == "Casio") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showAllOmega() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].brand == "Omega") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showAllChanel() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].brand == "Chanel") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function showAllPatekPhilippe() {
    document.getElementById('content').innerHTML = '';

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].brand == "Patek Philippe") {
            document.getElementById('content').innerHTML += `
            <section style="background-color: ${watches[i].background_color}; color: ${watches[i].font_color};">
                <div class="gsap_scrollReveal" id="section${counter}">
                    <div id="main">
                        <div id="box1">
                            ${watches[i].img}
                        </div>
                        <div id="box2">
                            <h1>${watches[i].brand}</h1>
                            <h2>${watches[i].model}</h2>
                            <h2>${watches[i].name}</h2>

                            <div id="infos">
                                <p>Vintage: ${watches[i].year}</p>
                                <p>Size: ${watches[i].size}</p>
                            </div>

                            <div id="build">
                                <p>Dial: ${watches[i].material_dial}</p>
                                <p>Housing: ${watches[i].material_housing}</p>
                                <p>Watchstrap: ${watches[i].material_bracelet}</p>
                            </div>

                            <div id="prices">
                                <p>${watches[i].price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>`;
        }
    }
    counter++;
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 