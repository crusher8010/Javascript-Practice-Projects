let inputs = document.querySelectorAll('input');
let btn = document.querySelector('button')

inputs.forEach((el, i) => {
    el.addEventListener('keyup', (e) => {
        let currele = el, nextinput = el.nextElementSibling, previnput = el.previousElementSibling;

        if (currele.value.length > 1) {
            // nextinput.focus();
            currele.value = "";
            return
        }

        if (nextinput && nextinput.hasAttribute('disabled') && currele.value !== "") {
            nextinput.removeAttribute('disabled');
            nextinput.focus();
        }

        if (e.key === "Backspace") {
            inputs.forEach((ele, ind) => {
                if (i <= ind && previnput) {
                    ele.setAttribute('disabled', true)
                    ele.value = "";
                    previnput.focus();
                }
            })
        }

        if (!inputs[3].disabled && inputs[3].value !== "") {
            btn.classList.add('validate');
            return
        }

        btn.classList.remove('validate')
    })
})

window.addEventListener('load', () => {
    inputs[0].focus();
})