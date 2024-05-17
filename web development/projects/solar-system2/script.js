const sunX = window.innerWidth / 2 - 25;
const sunY = window.innerHeight / 2 - 25;

const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

const mercury = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 50,
    el: document.querySelector('.mercury')
}

const venus = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 100,
    el: document.querySelector('.venus')
}

const earth = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 150,
    el: document.querySelector('.earth')
}

const mars = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 180,
    el: document.querySelector('.mars')
}

const jupiter = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 250,
    el: document.querySelector('.jupiter')
}

const saturn = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 260,
    el: document.querySelector('.saturn')
}

const uranus = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 180,
    el: document.querySelector('.uranus')
}

const neptune = {
    speed: Math.random() * 0.01 + 0.002,
    theta: Math.random() * 2 * Math.PI,
    radius: 180,
    el: document.querySelector('.neptune')
}

const planets = [
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
];

function update(planet) {
    planet.theta += planet.speed;
    planet.el.style.left = `${Math.cos(planet.theta) *
        planet.radius + sunX + 25}px`;
    planet.el.style.top = `${Math.sin(planet.theta) *
        planet.radius + sunY + 25}px`;
}

setInterval(() => {
    planets.forEach(update);
}, 10);