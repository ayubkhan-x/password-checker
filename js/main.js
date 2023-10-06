var inp = document.querySelector('.inp')
var errorText = document.querySelector('.error__text')

function fn() {
    if (inp.value.length < 8 || inp.value == inp.value.toLowerCase()) {
        errorText.style.color = 'red'
        errorText.textContent = 'yaroqsiz password';
    } else {
        errorText.style.color = 'green'
        errorText.textContent = 'yaroqli password'
    }
}