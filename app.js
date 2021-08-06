let checkbox1=document.getElementById("box1");
let checkbox2=document.getElementById("box2");
let checkbox3=document.getElementById("box3");
let checkbox4=document.getElementById("box4");
let checkbox5=document.getElementById("box5");
let checkbox6=document.getElementById("box6");
let checkbox7=document.getElementById("box7");
let checkbox8=document.getElementById("box8");

let a=-1;
let b=-1;
let c=-1;
let d=-1;




function count() {
    if (checkbox1.checked){
        a+=2;
    }
    if (checkbox2.checked){
        a+=1;
    }
    if (checkbox3.checked){
        b+=2;
    }
    if (checkbox4.checked){
        b+=1;
    }
    if (checkbox5.checked){
        c+=2;
    }
    if (checkbox6.checked){
        c+=1;
    }
    if (checkbox7.checked){
        d+=2;
    }
    if (checkbox8.checked){
        d+=1;
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

}


function sindan() {
    count();
    if(a==1 && b==1 && c==1 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka1.html";
        
    }else if(a==1 && b==1 && c==1 && d==0){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka2.html";
        
    }else if(a==1 && b==1 && c==0 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka3.html";
        
    }else if(a==1 && b==1 && c==0 && d==0){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka4.html";
        
    }else if(a==1 && b==0 && c==1 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka5.html";
        
    }else if(a==1 && b==0 && c==1 && d==0){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka6.html";
        
    }else if(a==1 && b==0 && c==0 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka7.html";
        
    }else if(a==1 && b==0 && c==0 && d==0){
        window.location.herf="/javascript/じゃがりこ診断/kekka/kekka8.html";
        
    }else if(a==0 && b==1 && c==1 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka9.html";
       
    }else if(a==0 && b==1 && c==1 && d==0){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka10.html";
      
    }else if(a==0 && b==1 && c==0 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka11.html";
       
    }else if(a==0 && b==1 && c==0 && d==0){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka12.html";
        
    }else if(a==0 && b==0 && c==1 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka13.html";
        
    }else if(a==0 && b==0 && c==1 && d==0){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka14.html";
       
    }else if(a==0 && b==0 && c==0 && d==1){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka15.html";
      
    }else if(a==0 && b==0 && c==0 && d==0){
        window.location.href="/javascript/じゃがりこ診断/kekka/kekka16.html";
        
    }else{
        alert("チェックボックスをちゃんと選択してください");
    }
}

