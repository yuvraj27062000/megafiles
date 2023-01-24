{/* <img src="https://themewagon.github.io/restoran/img/hero.png" alt=""> */}

function mynavbar() {
  console.log('done');
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    console.log('done2');
  }