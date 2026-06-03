const numbers = document.querySelectorAll('.sh2');
const inpt = document.querySelector('input')

for (const num of numbers) {
    num.addEventListener('click', (e) => {
        inpt.value += e.target.innerHTML
    })
}