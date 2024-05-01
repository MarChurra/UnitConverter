//Variables 
const userInput = document.getElementById("conversionInput");
const convertBtn = document.getElementById("conversionBtn");
const lengthContainer = document.getElementById("lengthConverter");
const volumeContainer = document.getElementById("volumeConverter");
const massContainer = document.getElementById("massConverter");

const originalLengthContent = lengthContainer.innerHTML;
const originalVolumeContent = volumeContainer.innerHTML;
const originalMassContent = massContainer.innerHTML;

//Render
convertBtn.addEventListener('click', function () {
    let userValue = parseFloat(userInput.value)
    renderLength(userValue)
    renderVolume(userValue)
    renderMass(userValue)
})


//Calculate Length
function metersToFeet(userValue) {
    const meters = userValue * 3.281
    const fixedMeters = meters.toFixed(3)
    return fixedMeters
}

function feetToMeters(userValue) {
    const feet = userValue / 3.281
    const fixedFeet = feet.toFixed(3)
    return fixedFeet
}

function renderLength(userValue) {
    lengthContainer.innerHTML = originalLengthContent
    const meters = userValue
    const feet = userValue
    const convertedMeters = feetToMeters(userValue)
    const convertedFeet = metersToFeet(userValue)
    lengthContainer.innerHTML += `${meters} meters = ${convertedFeet} feet | ${feet} feet = ${convertedMeters} meters`
}


//calculate Volume 
function litersToGallons(userValue) {
    const liters = userValue * 0.264
    const fixedLiters = liters.toFixed(3)
    return fixedLiters
}

function gallonsToLiters(userValue) {
    const gallons = userValue / 0.264
    const fixedGallons = gallons.toFixed(3)
    return fixedGallons
}

function renderVolume(userValue) {
    volumeContainer.innerHTML = originalVolumeContent
    const liters = userValue
    const gallons = userValue
    const convertedLiters = gallonsToLiters(userValue)
    const convertedGallons = litersToGallons(userValue)
    volumeContainer.innerHTML += `${liters} liters = ${convertedGallons} gallons | ${gallons} gallons = ${convertedLiters} liters`
}

//calculate Mass 
function kgToPounds(userValue) {
    const kilograms = userValue * 2.204
    const fixedKilograms = kilograms.toFixed(3)
    return fixedKilograms
}

function poundstoKg(userValue) {
    const pounds = userValue / 2.204
    const fixedPounds = pounds.toFixed(3)
    return fixedPounds
}

function renderMass(userValue) {
    massContainer.innerHTML = originalMassContent
    const pounds = userValue
    const kilograms = userValue
    const convertedPounds = kgToPounds(userValue)
    const convertedKilograms = poundstoKg(userValue)
    massContainer.innerHTML += `${kilograms} kilograms = ${convertedPounds} pounds | ${pounds} pounds = ${convertedKilograms} kilos`
}
