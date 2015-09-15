var frame = 1;

setInterval(function(){
    var el = document.getElementById('duel' + frame);
    el.className = '';
    frame = frame +1;
    if(frame == 9){
     frame = 1;   
    }
    el = document.getElementById('duel' + frame);
el.className = 'visible';
    console.log(frame);
},1500);