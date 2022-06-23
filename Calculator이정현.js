let bt = document.querySelectorAll('button');
for(j=0;j<bt.length;j++){
    bt[j].addEventListener('mouseleave',caculatecolback);
}
for(i=0;i<=9;i++){
    document.getElementById('num'+i).addEventListener('click',caculatenum);
    document.getElementById('num'+i).addEventListener('mouseenter',caculatecol);
}
function caculatecol(event){
    event.target.style.background='gray';
}
function caculatecolback(event){
    event.target.style.background='linear-gradient(lightgray 20%,white 40%, lightgray 100%)';
}


function caculatenum(event){
    let val1 = document.getElementById('setValue');
    val1.innerText += event.target.innerText;
}

