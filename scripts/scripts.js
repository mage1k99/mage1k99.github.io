function burgerFunction(){
    var tempVar = document.getElementById("navbar");
      if(tempVar.className === "navbar") {
          tempVar.className += " mobile";
      } else {
         tempVar.className = "navbar";
      }
}

    window.onscroll = function() {myFunction()};
    function myFunction() {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navbar.className = "navbar" + " navbar-fixed";
        } else {
            navbar.className = navbar.className.replace(" navbar-fixed", "");
        }
    }