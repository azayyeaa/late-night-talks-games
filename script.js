let x=50,y=50,chapter=1;
const player=()=>document.getElementById('player');

function startGame(){
 document.getElementById('menu').style.display='none';
 document.getElementById('game').style.display='block';
 const world=document.getElementById('world');
 for(let i=0;i<40;i++){
   const s=document.createElement('div');
   s.className='star';
   s.innerHTML='★';
   s.style.left=Math.random()*880+'px';
   s.style.top=Math.random()*530+'px';
   world.appendChild(s);
 }
}

document.addEventListener('keydown',e=>{
 if(document.getElementById('game').style.display==='none') return;
 if(e.key==='w') y-=10;
 if(e.key==='s') y+=10;
 if(e.key==='a') x-=10;
 if(e.key==='d') x+=10;
 player().style.left=x+'px';
 player().style.top=y+'px';

 if(e.key.toLowerCase()==='e'){
   checkNPC();
 }
});

function checkNPC(){
 const npcs=document.querySelectorAll('.npc');
 npcs.forEach(n=>{
   const nx=parseInt(n.style.left), ny=parseInt(n.style.top);
   if(Math.abs(x-nx)<50 && Math.abs(y-ny)<50){
      document.getElementById('speaker').innerText=n.dataset.name;
      document.getElementById('text').innerText=n.dataset.text;

      chapter=Math.min(chapter+1,3);
      document.getElementById('chapter').innerText=chapter;
   }
 });
}
