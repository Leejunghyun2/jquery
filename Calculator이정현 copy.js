let val1 = document.getElementById('setValue'); // = 나오는 값
let result = document.getElementById('getResult'); // = 눌럿을 때 값
let bt = document.querySelectorAll('button'); //버튼 눌럿을때 작동하기위한 초기변수
let swc = false;  // 연산자 중복으로 쓰지못하게 하기위한 변수
let gap = "";
let gap2 = "";
let stack = 0;
let stack1 = 0;
let npoint = null;
let dong = "";

for (j = 0; j < bt.length; j++) {
    bt[j].addEventListener('mouseenter', caculatecol);
    bt[j].addEventListener('mouseleave', caculatecolback);
    bt[j].addEventListener('click', caculatenum);
}
function caculatecol(event) {
    event.target.style.background = 'gray';
}
function caculatecolback(event) {
    event.target.style.background = 'linear-gradient(lightgray 20%,white 40%, lightgray 100%)';
}
function caculatenum(event) {
    let val = event.target.classList;
    if (val == 'num') {
        val1.innerText += event.target.innerText;
        swc = false;
    } else if (val == 'cal') {
        if (swc == false) {
            val1.innerText += event.target.innerText;
            swc = true;
        }
    } else if (val == 'back') {
        if (val1.innerText.length > 0) {
            val1.innerText = val1.innerText.slice(0, -1);
        }
    } else if (val == 'clear') {
        val1.innerText = "";
        result.innerText = "";
    } else if (val == 'result') {
        for (k = val1.innerText.length; k > 0;) {
            for (i = 0; i < val1.innerText.length; i++) {
                if (!(val1.innerText.charAt(i) > -1 || val1.innerText.charAt(i) < 10)) {
                    npoint = true;
                    break;
                } else {
                    gap2 += val1.innerText.charAt(i);
                    npoint = false;
                }
            }
            if (npoint == true) {
                for (i = 0; i < val1.innerText.length; i++){
                if (val1.innerText.charAt(i) > -1 || val1.innerText.charAt(i) < 10) {
                    gap += val1.innerText.charAt(i);
                    stack = gap;
                } else {
                        dong = val1.innerText.charAt(i);
                        switch (val1.innerText.charAt(i)) {
                            case '+':
                                stack1 = Number(stack) + Number(gap);
                                break;
                            case '-':
                                stack1 = Number(stack) - Number(gap);
                                break;
                            case '*':
                                stack1 = Number(stack) * Number(gap);
                                break;
                            case '/':
                                stack1 = Number(stack) / Number(gap);
                                break;
                        }
                        val1.innerText = val1.innerText.slice(i + 1, val1.innerText.length);
                        gap = "";
                        break;
                    }
                }
                result.innerText = stack1;
            } else {
                switch (dong) {
                    case '+':
                        stack1 = Number(stack) + Number(val1.innerText);
                        break;
                    case '-':
                        stack1 = Number(stac) - Number(val1.innerText);
                        break;
                    case '*':
                        stack1 = Number(stack) * Number(val1.innerText);
                        break;                   
                     case '/':
                        stack1 = Number(stack) / Number(val1.innerText);
                        break;
                }
                result.innerText = stack1;
                val1.innerText = "";
                gap ="";
                break;
            }
        }
        stack1=0;
    }
}

