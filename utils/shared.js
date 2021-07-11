let colors = ['pink', 'yellow', 'purple', 'blue'];
let sizes = [10, 24, 36];
let positions = [
    {id: 1, top: 100, left: 20},
    {id: 2, top: 0, left: 4},
    {id: 3, top: 20, right:20},
    {id: 4, top: 100, right:4},
    {id: 5, top: 200, left: 40}
];

let generateRandomOptions = () => {
    let randomScale = Math.floor(Math.random() * (3 - 1)) + 1;
    let randomDuration = Math.floor(Math.random() * (5 - 2)) + 2;
    let randomDelay = Math.floor(Math.random() * (4 - 1)) + 1;
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    let randomSize = sizes[Math.floor(Math.random()*sizes.length)];
    let randomPosition = positions[Math.floor(Math.random()*positions.length)];

    return {
        scale: randomScale,
        opacity: 0.5,
        duration: randomDuration,
        delay: randomDelay,
        position: randomPosition,
        color: randomColor,
        size: randomSize
    }
}

module.exports = {
    generateRandomOptions
}