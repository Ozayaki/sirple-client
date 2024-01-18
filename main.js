var inp = document.getElementById('code');
const but = document.getElementById('but');
const txt = document.getElementById('text');
const g = document.getElementById('ground');
const l = document.getElementById('layer');
but.onclick = function () {
    if (inp.value == "free") {
         l.style.visibility = "hidden";
         document.body.style.backgroundImage = "url('./scream.png')";
         var audio = document.getElementById('aud')
         audio.play();
    }else {
        txt.textContent = "Офигел?";
        setTimeout(() => {
            txt.textContent = "Оставить жалобу" 
        }, 2000)
    }
}
