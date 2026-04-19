const msg='Wishing you lots of smiles, love, and happiness today and always! 💖'
let i=0
function typeMsg(){
    if(i < msg.length){
      document.getElementById('message').innerHTML+= msg.charAt(i);
      i++;
      setTimeout(typeMsg,50)
    }
}

typeMsg();

//play music
function playMusic(){
    const music= document.getElementById('music')
    if(music.paused) music.play();
    else music.paused();
}





// floating  heart
for (let j = 0; j < 15; j++) {
    const heart = document.createElement('div')
    heart.classList.add('heart');
    heart.style.left= Math.random()*90 +"%";
    heart.style.animationDelay= Math.random()*5+"s";
    heart.style.background=['#ff66b3','#ff99cc','#ffb3d1', '#ff3385'][Math.floor(Math.random()*4)];
    document.body.appendChild(heart);
}

// floating sparkels
for (let k = 0; k < 50; k++) {
    const sparkels = document.createElement('div')
    sparkels.classList.add('sparkels'); // fixed
    sparkels.style.left = Math.random() * 100 + "%";
    sparkels.style.background = ['#ff66b3', '#ffccff', '#ff99cc', '#ff3385'][Math.floor(Math.random() * 4)]; // fixed
    sparkels.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(sparkels); // fixed

}