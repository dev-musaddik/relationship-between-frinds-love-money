let friend= false;
function control1(){
    
    if(friend==false){
    friend=true;
    document.getElementById('child1').style.translate= '2rem 0';
    document.getElementById('child1').innerText="on"
    
    console.log('friend:',friend);
    if(love && money ==true ){
        money=false;
    document.getElementById('child3').style.translate= '-.05rem 0';
    document.getElementById('child3').innerText="off" 
    }
    }
    // else{
    // friend=false;
    // document.getElementById('child1').style.translate= '-.05rem 0';
    // console.log('friend:',friend)
    // }
}
let love= false;
function control2(){
    
    if(love==false){
    love=true;
    document.getElementById('child2').style.translate= '2rem 0';
    document.getElementById('child2').innerText="on"
    console.log('love:',love)
    if(friend && money ==true ){
        friend=false;
    document.getElementById('child1').style.translate= '-.05rem 0';
    document.getElementById('child1').innerText="off"
    }
    }
    // else{
    // love=false;
    // document.getElementById('child2').style.translate= '-.05rem 0';
    // console.log('love:',love)
    // }
}
let money= false;
function control3(){
    
    if(money==false){
    money=true;
    document.getElementById('child3').style.translate= '2rem 0';
    document.getElementById('child3').innerText="on"
    console.log('money:',money)
    if(friend && love == true){
        love=false;
        document.getElementById('child2').style.translate= '-.05rem 0';
        document.getElementById('child2').innerText="off"
        console.log('love:',love)
    }
    } 
    // else{
    // money=false;
    // document.getElementById('child3').style.translate= '-.05rem 0';
    // console.log('money:',money)
    // }
   
}

