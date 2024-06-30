document.querySelector(".control-buttons span").onclick = function(){
    let yourname= prompt("what's your name?");
    if (yourname == null || yourname == ""){
document.querySelector(".name span").innerHTML="unknown";
    }
    else {
        document.querySelector(".name span").innerHTML=yourname; 
    }
    document.querySelector(".control-buttons").remove();
};
let duration=1000;
  let blockscontainer = document.querySelector(".container-memory");
  let blocks = Array.from(blockscontainer.children);
  let orderRange = Array.from(Array(blocks.length).keys());

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);
//let testorderrange =[0,2,3,1,5,4,19,18,12,11,10,7,17,11,8,6,13,9,15,14,16]
blocks.forEach((block,index)=> {
    block.style.order=orderRange[index];
    block.addEventListener('click',function(){
flipblock(block);
    });

});
function flipblock(selectedblock){
    selectedblock.classList.add('is-flipped');
    let allflippedblocks = blocks.filter(flippedblock=>flippedblock.classList.contains('is-flipped'));
    if(allflippedblocks.length===2){
       stopclicking();
       checkmatchedblocks(allflippedblocks[0],allflippedblocks[1]);
    }
}
function stopclicking(){
    blockscontainer.classList.add('no-clicking') ;
    setTimeout(()=>{
        blockscontainer.classList.remove('no-clicking') ;   

    },duration);
}
function checkmatchedblocks(firstblock,secondblock){
let tries=document.querySelector('.tries span');
if(firstblock.dataset.img===secondblock.dataset.img){
    firstblock.classList.remove('is-flipped');
    secondblock.classList.remove('is-flipped') ;
    firstblock.classList.add('has-match');
    secondblock.classList.add('has-match') ;
     document.getElementById('success').play();
}
else {
    tries.innerHTML=parseInt(tries.innerHTML)+1;
    setTimeout(()=>{
        firstblock.classList.remove('is-flipped');
        secondblock.classList.remove('is-flipped') ;

    },duration);
    document.getElementById('fail').play();
    
}
}
function shuffle(array){
    let current = array.length,
    temp,
    random;
    while(current>0){
    random= Math.floor(Math.random()*current);
    current--;
    temp=array[current];
    array[current]=array[random];
    array[random]=temp;
    }
    return array;
}