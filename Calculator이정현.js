
let val1 = document.getElementById('setValue'); // = 나오는 값
let result = document.getElementById('getResult'); // = 눌럿을 때 값
let bt = document.querySelectorAll('button'); //버튼 눌럿을때 작동하기위한 초기변수
let swc = false;  // 연산자 중복으로 쓰지못하게 하기위한 변수
window.addEventListener('keydown', e=>{
    console.log(e.key);
    let key1 = document.getElementById(e.key);
    key =key1.innerText;
    if(key == '='){
        result.innerText = eval(val1.innerText);
    }
    if(key == 'Backspace'){
        val1.innerText = val1.innerText.slice(0,-1);
    }
    val1.innerText += key;
})

for(j=0;j<bt.length;j++){
    bt[j].addEventListener('click',caculatenum);
}

function caculatenum(event){
    let val = event.target.classList;
    if(val =='num'){
        if(val1.innerText.charAt(val1.innerText.length-1)=='='){
            val1.innerText = val1.innerText.slice(0,-1);
        }
        val1.innerText += event.target.innerText;
        swc = false;
    }else if(val=='cal'){
        if(swc==false){
            if(val1.innerText.charAt(val1.innerText.length-1)=='='){
                val1.innerText = val1.innerText.slice(0,-1);
            }
            if(!(val1.innerText.length==0)){
            val1.innerText += event.target.innerText;
            swc = true;
            }
        }
    }else if(val=='back'){
        if(val1.innerText.length>0){
        val1.innerText = val1.innerText.slice(0,-1);
        }
    }else if(val=='clear'){
        val1.innerText = "";
        result.innerText = "";
    }else if(val=='result'){
        result.innerText = eval(val1.innerText);
        val1.innerText += "=";
    }
}

