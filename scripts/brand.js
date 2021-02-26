function hoverBanner() {
  document.body.style.backgroundImage = "radial-gradient(#ADD8E6, #FFFFFF)";
}

function hoverMain() {
  document.body.style.backgroundImage = "radial-gradient(#FFFFFF, #ADD8E6)";
}

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("dynamiccontent").innerHTML =
      this.responseText;
    }
  };
  if ($("button").attr("id") === "contract") {
    xhttp.open("GET", "contract_two.html", true);
    xhttp.send();
  } 
  else if ($("button").attr("id") === "introduction") {
    xhttp.open("GET", "introduction_two.html", true);
    xhttp.send();
  } 
  else if ($("button").attr("id") === "brand") {
    xhttp.open("GET", "brand_two.html", true);
    xhttp.send();
  } 
  else if ($("button").attr("id") === "codeplay") {
    xhttp.open("GET", "codeplay_two.html", true);
    xhttp.send();
  } 
  else if ($("button").attr("id") === "asmarterwaytolearn") {
    xhttp.open("GET", "asmarterwaytolearn_two.html", true);
    xhttp.send();
  } 
  else {
    xhttp.open("GET", "placeholder.txt", true);
    xhttp.send();
  }
}


  
