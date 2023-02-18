const jsConfetti = new JSConfetti()
jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 600,
})

const eight = document.querySelector('#main_eight')
const nine = document.querySelector('#main_nine')
const homeBtn = document.querySelector('#progress')

homeBtn.addEventListener('click', () => progess())

const progess = () => {
    eight.classList.add('hide')
    nine.classList.remove('hide')
}