function openTab(evt, tabName) {    
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
  
   
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
  
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }





var modal = document.getElementById("myModal");


var btn = document.getElementById("openModalBtn");


var closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};


closeBtn.onclick = function() {
  modal.style.display = "none";
};


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



