const imageInput = document.getElementById("imgInput");
const topTextInput = document.getElementById("topTextInput");
const bottomTextInput = document.getElementById("bottomTextInput");
const canvas = document.getElementById("meme");
const context = canvas.getContext("2d");

let image;

imageInput.addEventListener("change", () => {
    const imageInputURL = URL.createObjectURL(imageInput.files[0]);

    console.log(imageInputURL)
    image = new Image();
    image.src = imageInputURL;

    image.addEventListener("load", () => {
        updateMeme(canvas, image, topTextInput.value, bottomTextInput.value);
    });
});

topTextInput.addEventListener("change", () => {
    updateMeme(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener("change", () => {
    updateMeme(canvas, image, topTextInput.value, bottomTextInput.value);
});

function updateMeme(canvas, image, topText, bottomText) {

    const width = image.width;
    const height = image.height;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0);
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

    context.strokeStyle = "black";
    context.lineWidth = Math.floor(fontSize / 4);
    context.fillStyle = "white";
    context.textAlign = "center";
    context.lineJoin = "round";
    context.font = `${fontSize}px Poppins`;

    context.textBaseline = "top";
    context.strokeText(topText, width / 2, yOffset);
    context.fillText(topText, width / 2, yOffset);

    context.textBaseline = "bottom";
    context.strokeText(bottomText, width / 2, height - yOffset);
    context.fillText(bottomText, width / 2, height - yOffset);

};

