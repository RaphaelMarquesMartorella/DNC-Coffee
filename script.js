var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var span = document.getElementById("span");

function Sobre() {
    modal.style.display = 'block';
}

function Close(){
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if(event.target == modal2){
        modal2.style.display = "none";
    }
  }

  function Atendimento() {
    modal2.style.display = 'block';
}

function Close2(){
    modal2.style.display = "none";

}




  

