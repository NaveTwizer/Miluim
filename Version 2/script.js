const checkBoxes1 = document.querySelectorAll('.checkbox1');
const div2 = document.getElementById('div2');

const radioButtons = document.querySelectorAll('.radios1');
const div3 = document.getElementById('div3');

const buttons = document.querySelectorAll('.buttons');
const div4 = document.getElementById('div4');

// HANDLE DIV 2 INVISIBILITY TOGGLE
const handleCheckBoxChange = (e) => {
    div2.style.display = 'none';
    div3.style.display = 'none';
    checkBoxes1.forEach((checkbox) => {
        if (checkbox.checked) {
            div2.style.display = 'block';
        }
    })
}
checkBoxes1.forEach((cb) => {
    cb.addEventListener('change', handleCheckBoxChange)
})


// HANDLE DIV 3 INVISIBILITY TOGGLE
const handleRadioButtonChange = (e) => {
    handleCheckBoxChange(1); // כדי להפוך גם את דיב2 לבלתי נראה
    div3.style.display = 'none';
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            div3.style.display = 'block';
        }
    })
}
radioButtons.forEach((rb) => {
    rb.addEventListener('change', handleRadioButtonChange);
})


// HANDLE DIV 4
const btn1 = document.getElementById('selfOwner');
const btn2 = document.getElementById('partnerOwner');

btn1.addEventListener('focus', () => {
    div4.style.display = 'block';
})
btn2.addEventListener('focus', () => {
    div4.style.display = 'block';
})


