let textColor = document.querySelector("#color");
let Background = document.querySelector("#Background");
let FontSize = document.querySelector("#number");

let clearBtn = document.querySelector("#clear");
let saveBtn = document.querySelector("#save");
let retriveBtn = document.querySelector("#retrive");

let Textarea = document.querySelector("#TextareaEl");
let textareaBack = document.querySelector("#textareaBack");

// Decorate the text color and Background

textColor.addEventListener("input", function () {
    let textColorPick = textColor.value;
    Textarea.style.color = textColorPick;
})

Background.addEventListener("input", function () {
    let BackgroundColorPick = Background.value;
    Textarea.style.backgroundColor = BackgroundColorPick;
})

FontSize.addEventListener("input", function () {
    let fontSizePick = FontSize.value;
    Textarea.style.fontSize = fontSizePick+"px";
})

clearBtn.addEventListener("click", clearFunction);
saveBtn.addEventListener("click", saveText);
retriveBtn.addEventListener("click", retrieveText);

// Clear console

function clearFunction() {
    document.location.reload();
}

// save file in your file.

function saveTextToFile(text, fileName) {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function saveText() {
    let textarea = document.querySelector("#TextareaEl");
    let textToSave = textarea.value;
    let fileName = 'example.txt';
    saveTextToFile(textToSave, fileName);
}


// Retrive the file from your pc.

function retrieveTextFromFile() {
    let input = document.createElement('input');
    input.type = 'file';

    input.onchange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                let retrievedText = e.target.result;
                document.querySelector("#TextareaEl").value = retrievedText;
            };
            reader.readAsText(file);
        }
    };

    input.click();
}

function retrieveText() {
    retrieveTextFromFile();
}