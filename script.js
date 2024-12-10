const main=document.querySelector('#meet');
const crsr=document.querySelector('.cursor')

main.addEventListener('mousemove',function(dets){
    crsr.style.left=dets.x+'px';
    crsr.style.top=dets.y+'px';
})


