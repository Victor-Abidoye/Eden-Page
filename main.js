
const jsConfetti = new JSConfetti()
jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 600,
})

const eight = document.querySelector('#main_eight')
const nine = document.querySelector('#main_nine')
const homeBtn = document.querySelector('#progress')
const foodModal = document.querySelector('#food')
const cleanModal = document.querySelector('#clean')

const progress = () => {
    eight.classList.add('hide')
    nine.classList.remove('hide')
}


const toggleModal = (item) => {
    if (item === 'food') {
        foodModal.classList.toggle('hide')
    } else if (item === 'clean') {
        cleanModal.classList.toggle('hide')
    }
}


homeBtn.addEventListener('click', progress)