

display = document.querySelector('#display');
buttons = document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick = ()=>{
        if(item.id == 'clear'){
            display.innerHTML = '';
        }else if(item.id == "backspace"){
            let string = display.innerHTML.toString();
            display.innerHTML = string.substring(0, string.length - 1);
            
        }else if(item.id != "equal" && item.id != "clear"){
            display.innerHTML += item.id;
            
        }else if(display.innerHTML != ""){
            let result = new Function('return ' + display.innerHTML)();
            display.innerHTML = result;
            
        }else if(display.innerHTML == "" && item.id=="equal"){
            display.innerHTML = "Null";
            setTimeout(()=>(display.innerHTML = ""), 2000);
            
        }
    }

});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('#toggle-icon');

let isDark = true;
themeToggleBtn.onclick = ()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}