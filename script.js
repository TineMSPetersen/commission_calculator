

/*
Portrait = 60
Flat colors = 70
Shaded = 90
Scene = 120
Painted = 170

const portraitPrice = 60;
const flatPrice = 70;
const shadedPrice = 90;
const scenePrice = 120;
const paintedPrice = 170;

const commissionType = ["Portrait", "Flat Colors","Shaded", "Scene", "Painted"];
*/

// Selects the submit button.
const submitButton = document.querySelector('.submit_button');
submitButton.addEventListener("click", displayresult);



// Check which radio button is selected and returns the value of said radio button.
function getBasePrice() {
    let selectedType;
    const radioButtons = document.querySelectorAll('input[name="commission_type"]');

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedType = radioButton.value;
            break;
        }
    }

    console.log(selectedType);

    return selectedType;

};

function getCharacterAmountPrice() {
    let selectedType;
    const radioButtons = document.querySelectorAll('input[name="commission_type"]');

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedType = radioButton.id;
            break;
        }
    }

    return selectedType;
}

function calculateCharacterAmountPrice() {
    const input = document.querySelector('input[name="character_amount"]').value;
    let extraCharacterPrice;

    if (getCharacterAmountPrice() === 'portrait') {
        extraCharacterPrice = 60;
    } else if (getCharacterAmountPrice() === 'flats') {
        extraCharacterPrice = 55;
    } else if (getCharacterAmountPrice() === 'shaded') {
        extraCharacterPrice = 70;
    } else if (getCharacterAmountPrice() === 'scene') {
        extraCharacterPrice = 70;
    } else if (getCharacterAmountPrice() === 'painted') {
        extraCharacterPrice = 100;
    } else {
        console.log("Something went wrong");
    }

    let characterAmount = input - 1;

    let sum = characterAmount * extraCharacterPrice;

    console.log(sum);
    return sum;
}

function calculateResult() {
    let basePrice = getBasePrice();
    let extraCharacterPrice = calculateCharacterAmountPrice();
    console.log(typeof(basePrice));
    console.log(typeof(extraCharacterPrice));
    let sum = parseInt(basePrice) + extraCharacterPrice;
    return sum;
}

// change HTML of H1 with ID #result to show the result
function displayresult() {
document.querySelector('#result').innerHTML = '$' + calculateResult();
};