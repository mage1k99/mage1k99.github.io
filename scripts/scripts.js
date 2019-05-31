function burgerFunction(){
    var tempVar = document.getElementById("navbar");
      if(tempVar.className === "navbar") {
          tempVar.className += " mobile";
      } else {
         tempVar.className = "navbar";
      }
}

// chance the navigator. bar color while scrolling

    window.scroll = function () { 
        myFunction();
    }
    function myFunction(){
        var navbar = document.getElementById("navbar");
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            navbar.className = "navbar-fixed-top";
        }else{
            navbar.className = "navbar"
        }
    }