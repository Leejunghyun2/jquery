let numVal = document.querySelectorAll('#numVal');
for(i=0;i<numVal.length;i++){
numVal[i].addEventListener('click',textadd);
}

let num = [];
let text = "";
let numTextbuffer = "";
let opbuffer = [];
let textaria = document.getElementById('setValue');
let buf = document.getElementById('getResult');
let count = 0;
let ok = false;

function operator(op){
    if(!(numTextbuffer=="")){
        num.push(numTextbuffer);
        numTextbuffer = "";
    }
 
        opbuffer.push(op);
        console.log(op)
        text += op;
        textaria.innerText =text;
    
}
function textadd(event){
    numTextbuffer += event.target.value;
    text += event.target.value;
    textaria.innerText = text;
}
function clearVal(){
    num = [];
    text = "";
    numTextbuffer = "";
    opbuffer = [];
    textaria.innerText = "";
    buf.innerText = "";
    count = 0;
}
function resultVal(){
    if(!(numTextbuffer=="")){
        num.push(numTextbuffer);
        numTextbuffer = "";
    }
    
    console.log('메롱');
    console.log(opbuffer.includes('*')||opbuffer.includes('/'));
    while(opbuffer.includes('*')||opbuffer.includes('/')){
        console.log('메롱');
        for(i=0;i<opbuffer.length;i++){
        console.log('메롱');
        if(opbuffer[i]=='*'){
        let result = Number(num[i])*Number(num[i+1]);
            num.splice(i,2,result);
            opbuffer.splice(i,1);
          
            break;
        }else if(opbuffer[i]=='/'){
            let result = Number(num[i])/Number(num[i+1]);
            num.splice(i,2,result);
            opbuffer.splice(i,1);
       
            break;
        }
        }
  }
    while(num.length > 1){
    console.log(opbuffer[0]);
    if(opbuffer[0]=='+'){
    let result = Number(num[0])+Number(num[1]);
    num.splice(0,2,result);
    opbuffer.pop();
    console.log(opbuffer.toString());
    continue;
  } else if(opbuffer[0]=='-'){
    let result = Number(num[0])-Number(num[1]);
    num.splice(0,2,result);
    opbuffer.splice(0,1);
    continue;
  }
 }
   buf.innerText = num[0];
   count = 0;
}

