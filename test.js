let messages = ["You never know what you're going to get", "Every dog has his day", "Whenever you think you destroy, so destroy with intent", "Nobody can be everywhere at once", "Never underestimate your oponent, espcially when that oponent is you", "Leadership isnt telling people what to do, it showing people how to be"];

const randomMessage =() => {
    let ranNum = Math.random() *(messages.length + 1);
    let num = Math.floor(Math.random() * ranNum);
    console.log(messages[num])
}

randomMessage()