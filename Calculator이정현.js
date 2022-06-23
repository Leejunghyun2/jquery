let val1 = document.getElementById('setValue'); // = 나오는 값
let result = document.getElementById('getResult'); // = 눌럿을 때 값
let bt = document.querySelectorAll('button'); //버튼 눌럿을때 작동하기위한 초기변수
let swc = false;  // 연산자 중복으로 쓰지못하게 하기위한 변수



for(j=0;j<bt.length;j++){
    bt[j].addEventListener('mouseenter',caculatecol);
    bt[j].addEventListener('mouseleave',caculatecolback);
    bt[j].addEventListener('click',caculatenum);
}
function caculatecol(event){
    event.target.style.background='gray';
}
function caculatecolback(event){
    event.target.style.background='linear-gradient(lightgray 20%,white 40%, lightgray 100%)';
}
function caculatenum(event){
    let val = event.target.classList;
    if(val =='num'){
        val1.innerText += event.target.innerText;
        swc = false;
    }else if(val=='cal'){
        if(swc==false){
            val1.innerText += event.target.innerText;
            swc = true;
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
    }
}

