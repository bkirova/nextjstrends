let colors = ['pink', 'pink', 'pink', 'yellow', 'purple', 'purple', 'blue','blue'];
let sizes = [10, 24, 36];
let positions = [
    {id: 3, top: '10', left:'10'},
    {id: 4, top: '10', right:'10'},
    
    {id: 3, top: '10', left:'1/4'},
    {id: 4, top: '10', right:'1/4'},

    {id: 5, top: '3/4', right: '1/4'},
    {id: 5, top: '3/4', left: '1/4'},

    {id: 3, top: '3/4', left:'20'},
    {id: 4, top: '3/4', right:'20'},
    
    {id: 3, top: '80', left:'10'},
    {id: 4, top: '80', right:'10'},

    {id: 5, top: '96', right: '1/4'},
    {id: 5, top: '96', left: '1/4'}
];

export function generateRandomDot() {
    let randomOpacity = Math.floor(Math.random() * (0.9 - 0.5)) + 0.5;
    let randomScale = Math.floor(Math.random() * (2 - 1)) + 1;
    let randomDuration = Math.floor(Math.random() * (5 - 2)) + 2;
    let randomDelay = Math.floor(Math.random() * (6 - 1)) + 1;
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    let randomSize = sizes[Math.floor(Math.random()*sizes.length)];
    let randomPosition = positions[Math.floor(Math.random()*positions.length)];

    return {
        scale: randomScale,
        opacity: randomOpacity,
        duration: randomDuration,
        delay: randomDelay,
        position: randomPosition,
        color: randomColor,
        size: randomSize
    }
}