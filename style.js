function dropModel() {
    var end = document.getElementById("end");
    var modelText = document.getElementById("model");
    var btnText = document.getElementById("infoModel");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "Model Description";
      modelText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "Model Description";
      modelText.style.display = "inline";
    }
  }
