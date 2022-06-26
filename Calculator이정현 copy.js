let numVal = document.querySelectorAll('.numVal');
let textaria = document.getElementById('setValue');
let num = [];
let numTextbuffer = "";
let op1 = [];
let opbuffer = [];
let buf = document.getElementById('getResult');
let count = 0;
let ok = false;
let text = "";
let backcheck = false;

let backop1 =[];
let backopbuffer =[];
let backnum =[];
for (i = 0; i < numVal.length; i++) {
    numVal[i].addEventListener('click', textadd);
}
window.addEventListener('keydown', e => {
    console.log(e.key);
    let key1 = document.getElementById(e.key);
    let key = key1.value;
    if (key == '=') {
        resultVal();
        
    } else if (key == '+' || key == '-' || key == '*' || key == '/') {
        operator(key);
        return;
    } else if(key =='Back'){
        back();
        return;
    }
    numTextbuffer += key;
    text += key;
    textaria.innerText += key;
}) 
function backbuffer(){
    if(backcheck == true && num.length != 0){
        backcheck= false;
        if(num[num.length-1].length != 1){
        numTextbuffer = num[num.length-1];
        }
        num.pop();
    }
}

function back() {
    let t1 = textaria.innerText.charAt(textaria.innerText.length - 1);
    if(t1 == '='){
        num = [...backnum];
        op1 = [...backop1];
        opbuffer = [...opbuffer];
        if(num[num.length-1].length != 1){
            numTextbuffer = num[num.length-1];
        }
        num.pop();
        textaria.innerText = textaria.innerText.slice(0, -1);
        text= text.slice(0, -1);
        console.log(num , op1 , opbuffer , numTextbuffer);
        return;
    }
   
        if (t1 == '+' || t1 == '-' || t1 == '/' || t1 == '*') {
            if (t1 == '+' || t1 == '-') {
                op1.pop();
            }
            opbuffer.pop();
            backcheck = true;
            backbuffer();
        } else {
            if(numTextbuffer != ""){
                numTextbuffer = numTextbuffer.slice(0,-1);
            }
            backbuffer();
            
        }
        
        
    console.log(num , op1 , opbuffer , numTextbuffer);
    textaria.innerText = textaria.innerText.slice(0, -1);
    text= text.slice(0, -1);
}

function operator(op) {
    if (!(numTextbuffer == "")) {
        num.push(numTextbuffer);
        numTextbuffer = "";
    }
    if (op == '+' || op == '-') {
        op1.push(op);
    }
    opbuffer.push(op);
    console.log(op)
    text += op;
    textaria.innerText = text;
}
function textadd(event) {
    numTextbuffer += event.target.value;
    text += event.target.value;
    textaria.innerText = text;
}
function clearVal() {
    num = [];
    text = "";
    numTextbuffer = "";
    opbuffer = [];
    textaria.innerText = "";
    buf.innerText = "";
    count = 0;
}
function resultVal() {
    if (!(numTextbuffer == "")) {
        num.push(numTextbuffer);
        numTextbuffer = "";
    }
    backopbuffer = [...opbuffer];
    backnum = [...num];
    backop1 = [...op1];

    console.log('place1');
    console.log(opbuffer.includes('*') || opbuffer.includes('/'));
    while (opbuffer.includes('*') || opbuffer.includes('/')) {
        console.log('place2');
        for (i = 0; i < opbuffer.length; i++) {
            console.log('place3');
            if (opbuffer[i] == '*') {
                let result = Number(num[i]) * Number(num[i + 1]);
                num.splice(i, 2, result);
                opbuffer.splice(i, 1);

                break;
            } else if (opbuffer[i] == '/') {
                let result = Number(num[i]) / Number(num[i + 1]);
                num.splice(i, 2, result);
                opbuffer.splice(i, 1);

                break;
            }
        }
    }
    while (num.length > 1) {
        console.log(opbuffer[0]);
        if (op1[0] == '+') {
            let result = Number(num[0]) + Number(num[1]);
            num.splice(0, 2, result);
            op1.shift();
            console.log(opbuffer.toString());
            continue;
        } else if (op1[0] == '-') {
            let result = parseInt(num[0]) - parseInt(num[1]);
            num.splice(0, 2, result);
            op1.shift();
            continue;
        }
    }
    buf.innerText = num[0];
    count = 0;
}