const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const screen1 = document.getElementById('screen-top');
const theme1 = document.querySelector('[data-theme1]');
const theme2 = document.querySelector('[data-theme2]');
const theme3 = document.querySelector('[data-theme3]');


let calculation =[]
let ACcalucalte 



function calculate(button) {
    const values = button.textContent;
    if(values === 'RESET'){
        calculation = []
        screen1.textContent = 0;
    } else if (values === '='){
        screen1.textContent = eval(calculation.join(''));
    } else if(values === "DEL"){
        calculation.pop();
        screen1.textContent = calculation.join('');
    } else if(values === "x"){
        calculation.push('*');
        ACcalucalte = calculation.join('');
        screen1.textContent = ACcalucalte;
    } else{
        calculation.push(values);
        ACcalucalte = calculation.join('');
        screen1.textContent = ACcalucalte;
    }
    
}

buttons.forEach(button => {
    button.addEventListener('click', () => calculate(button));
})

theme1.addEventListener('click', () => {
    if(theme1)
    {
        body.classList.add('active1');
        body.classList.remove('active2');
        body.classList.remove('active3');

    }
})
theme2.addEventListener('click', () => {
    if(theme2){
        body.classList.add('active2');
        body.classList.remove('active1');
        body.classList.remove('active3');
    }
})

theme3.addEventListener('click', () => {
    body.classList.add('active3');
    body.classList.remove('active1');
    body.classList.remove('active2');
})


