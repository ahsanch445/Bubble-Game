let score = 0;
var value = 0;
function makebulbe() {
    
    var cid = document.querySelector(".btn")
    let cul = ""
    for (var i = 1; i < 106; i++) {
        var rn = Math.floor(Math.random() * 10)
        cul += `<buble class="btn">${rn}</buble>`
    }
    document.querySelector(".mainbuble").innerHTML = cul;

}
makebulbe()


function runtimer() {
    var timer = 60;
    let clear = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#minus").innerHTML = timer;
        } else {
            var homeElement = document.querySelector(".mainbuble");
            var btn = document.querySelector("#customButton")
          btn.style.display = "block"
      
          homeElement.innerHTML = btn
        homeElement.innerHTML =`<span class="game" ><h1>Game Over</h1></span>`;
       
        
       
      
            
            clearInterval(clear)
        }

    }, 1000)

}
runtimer()
function hitval() {
    value = Math.floor(Math.random() * 10)
    document.querySelector("#valuehit").innerHTML = value;

}
hitval()
function increse() {
    score += 10;
    document.querySelector("#scores").innerHTML = score

}



document.querySelector(".home")
    .addEventListener("click", function (dets) {

        var hire = Number(dets.target.textContent)

        if (hire === value) {
            increse();
            makebulbe()
            hitval()
        } else {

        }
    })

function btn() {
document.querySelector("#customButton").addEventListener("click",function(e){
     
        makebulbe()
 score = 0;
 document.querySelector("#scores").innerHTML = score
   makebulbe()
   hitval()
   runtimer()
     document.querySelector("#customButton ").style.display="none"
   
})

}

btn()