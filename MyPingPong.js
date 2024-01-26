const buttonPlayer1 = document.querySelector("#pl1");
const buttonPlayer2 = document.querySelector("#pl2");
const resetButton = document.querySelector("#reset");
let maxScore = 3;
let isGameOver = false;
const drop = document.querySelector('#matchPoint');
drop.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    console.log(this.value);
})

buttonPlayer1.addEventListener('click', function () {
    const val1 = document.querySelector('#sp1');
    const val2 = document.querySelector('#sp2');
    const num = parseInt((val1.textContent));
    if (isGameOver === false) {
        val1.textContent = num + 1;
        if (num + 1 === maxScore) {
            isGameOver = true;
            val1.classList.add('has-text-success');
            val2.classList.add('has-text-danger');
            buttonPlayer1.disabled = true;
            buttonPlayer2.disabled = true;
        }
    }
})

buttonPlayer2.addEventListener('click', function () {
    const val1 = document.querySelector('#sp1');
    const val2 = document.querySelector('#sp2');
    const num = parseInt((val2.textContent));
    if (!isGameOver) {
        val2.textContent = num + 1;
        if (num + 1 === maxScore) {
            isGameOver = true;
            val2.classList.add('has-text-success');
            val1.classList.add('has-text-danger');
            buttonPlayer1.disabled = true;
            buttonPlayer2.disabled = true;
        }
    }
})

resetButton.addEventListener('click', function () {
    const val1 = document.querySelector('#sp1');
    const val2 = document.querySelector('#sp2');
    val1.classList.remove('has-text-success', 'has-text-danger');
    val2.classList.remove('has-text-success', 'has-text-danger');
    val1.textContent = "0";
    val2.textContent = "0";
    buttonPlayer1.disabled = false;
    buttonPlayer2.disabled = false;
    isGameOver = false;
})

