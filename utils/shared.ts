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
    let randomOpacity = Math.floor(Math.random() * (0.7 - 0.4)) + 0.4;
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

export function generateRandomAIPost() {  
    let images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];
    let emojis = ["🐕","🐾","🐩","🐶","🐕‍🦺","🦮"].sort( () => .5 - Math.random() );;
    let comments =  ["cool!!!", "This is amazing", "wow this looks great"];
    let userNames = ["bri_123", "sam_got_2", "jennie_smt", "dizzy_candy", "skol34", "hymy_jon"];
    let stories = [
        "This post was generated by AI. How cool is that !!!",
        "Emoji Meaning The cooked sausage of a hot dog in a sliced bun and drizzled with yellow mustard.",
        "The domestic dog is a domesticated descendant of the wolf. ",
        "The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. "
    ];

    return {
      likes: Math.floor(Math.random() * (1000 - 100)) + 100,
      userName: 'devGhostStories',
      story: stories[Math.floor(Math.random()*stories.length)],
      tags: ['ai', 'devghoststories', 'aistories'],
      emojis: emojis.sort( () => 0.5 - Math.random()),
      commentUserName: userNames[Math.floor(Math.random()*userNames.length)],
      comment: comments[Math.floor(Math.random()*comments.length)],
      image: images[Math.floor(Math.random()*images.length)],
    };
}