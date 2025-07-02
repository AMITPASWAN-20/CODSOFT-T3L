let input = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let str = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                str = eval(str);
                input.value = str;
            } catch {
                input.value = "Error";
                str = "";
            }
        }
        else if (e.target.innerHTML === 'AC') {
            str = "";
            input.value = str;
        } else if (e.target.innerHTML === 'DEL') {
            str = str.substring(0, str.length - 1);
            input.value = str;
        } else {
            str += e.target.innerHTML;
            input.value = str;
        }


    });
});

