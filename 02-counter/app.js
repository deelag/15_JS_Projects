// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // ---> returns NodeList

// console.log(btns)

btns.forEach(btn => {
    btn.addEventListener('click', evt => {
        // console.log(e.currentTarget.classList) // ---> DOMTokenList
        const styles = evt.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }

        value.textContent = count;

    })

    // prevent the highlighting buttons' text on clicks
    btn.addEventListener('selectstart', evt => evt.preventDefault());
})