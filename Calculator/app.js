let inp = document.querySelector("input");
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            inp.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = "";
            inp.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            inp.value = string;
        }else if(e.target.innerHTML == '( )'){
            let openCount = (string.match(/\(/g) || []).length;
            let closeCount = (string.match(/\)/g) || []).length;

            if(openCount > closeCount){
                string += ')';
            } else {
                string += '(';
            }
            inp.value = string;
        }else{
            string += e.target.innerHTML;
            inp.value = string;
        }
    })
});