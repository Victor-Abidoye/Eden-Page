
const jsConfetti = new JSConfetti()
jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 600,
})

const eight = document.querySelector('#main_eight')
const nine = document.querySelector('#main_nine')
const homeBtn = document.querySelector('#progress')
const foodModal = document.querySelector('#food')
const foodCard = document.querySelector('#food .card')
const cleanModal = document.querySelector('#clean')
const cleanCard = document.querySelector('#clean .card')

const progress = () => {
    eight.classList.add('hide')
    nine.classList.remove('hide')
}


const toggleModal = (item) => {
    if (item === 'food') {
        foodModal.classList.toggle('hide')
        foodCard.classList.toggle('active-modal')

    } else if (item === 'clean') {
        cleanModal.classList.toggle('hide')
        cleanCard.classList.toggle('active-modal')
    }
}


homeBtn.addEventListener('click', progress)