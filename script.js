const radioYes = document.getElementById('yes');
const hiddenDiv = document.getElementById('hiddenDiv');


const divOn = () => {
    hiddenDiv.style.display = "block";
}
const divOff = () => {
    hiddenDiv.style.display = "none";
}


document.getElementById('form').addEventListener('submit', () => {
    window.alert('הטופס נשלח בהצלחה, כושי');
})