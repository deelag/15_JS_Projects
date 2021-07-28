// 1. using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', () => {
        // closing other questions
        questions.forEach(item => item !== question ? item.classList.remove("show-text") : null); 
        question.classList.toggle("show-text");
    })
})


// 2. traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', event => {
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })



// TODO: 3. try to use event delegation
