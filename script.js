
// Selects the submit button.
const submitButton = document.querySelector('.submit_button');

// Adds eventlistener to be triggered every time the submit button is clicked
submitButton.addEventListener("click", displayresult);

// Check which radio button is selected and returns the value of said radio button.
function getBasePrice() {
    let selectedType;
    const radioButtons = document.querySelectorAll('input[name="commission_type"]');

    // Checks which of the radioButton of radioButtons is selected
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedType = radioButton.value;
            break;
        }
    }
    
    return selectedType;
};

// Checks which radio button is selected and returns the ID of said radio button.
function getCharacterAmountPrice() {
    let selectedType;
    const radioButtons = document.querySelectorAll('input[name="commission_type"]');

    // Checks which of the radioButton of radioButtons is selected
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedType = radioButton.id;
            break;
        }
    }

    return selectedType;
}

// Calculates the price by assigning value to the IDs found in getCharacterAmountPrice() and calculates
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

    // characterAmount is the input - 1 because the first character is covered in base price. We're only calculating for extra characters
    let characterAmount = input - 1;

    let sum = characterAmount * extraCharacterPrice;

    console.log(sum);
    return sum;
}

// Calculates the final result by adding together the base price with the extra character price found through calculateCharacterAmountPrice()
function calculateResult() {
    let basePrice = getBasePrice();
    let extraCharacterPrice = calculateCharacterAmountPrice();
    console.log(typeof(basePrice));
    console.log(typeof(extraCharacterPrice));
    let sum = parseInt(basePrice) + extraCharacterPrice;
    return sum;
}

// change the HTML of the empty H1 with ID #result to show the result
function displayresult() {
document.querySelector('#result').innerHTML = '$' + calculateResult();
};