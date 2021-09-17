const heading = document.querySelector('.heading');
const buttonOne = document.querySelector('#btn1');
const value = document.querySelector('.value');
const buttonTwo = document.querySelector('#btn2');

buttonOne.addEventListener('click', increaseByTwo);
buttonTwo.addEventListener('click', increaseByFour);

counter = 0;

function increaseByTwo(){
    counter = counter + 2;
    value.innerHTML = counter;
}

function increaseByFour(){
    counter = counter + 4;
    value.innerHTML = counter;
}