
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
    switch (getCharacterAmountPrice()) {
        case 'portrait':
            extraCharacterPrice = 60;
            break;
        case 'flats':
            extraCharacterPrice = 55;
            break;
        case 'shaded':
            extraCharacterPrice = 70;
            break;
        case 'scene':
            extraCharacterPrice = 70;
            break;
        case 'painted':
            extraCharacterPrice = 100;
            break;
        default:
            console.log(`Oh no, something went wrong`);
    }

    // characterAmount is the input - 1 because the first character is covered in base price. We're only calculating for extra characters
    let characterAmount = input - 1;

    let sum = characterAmount * extraCharacterPrice;
    
    return sum;
}

// Calculates the final result by adding together the base price with the extra character price found through calculateCharacterAmountPrice()
function calculateResult() {
    let basePrice = getBasePrice();
    let extraCharacterPrice = calculateCharacterAmountPrice();
    let sum = parseInt(basePrice) + extraCharacterPrice;
    return sum;
}

// change the HTML of the empty H1 with ID #result to show the result
function displayresult() {
document.querySelector('#result').innerHTML = '$' + calculateResult();
};