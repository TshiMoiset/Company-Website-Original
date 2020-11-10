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

  
  function dropScreen() {
    var end = document.getElementById("end");
    var screenText = document.getElementById("screen");
    var btnText = document.getElementById("infoScreen");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "Screen/Display";
      screenText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "Screen/Display";
      screenText.style.display = "inline";
    }
  }

  
  function dropFeatures() {
    var end = document.getElementById("endfeatures");
    var featuresText = document.getElementById("features");
    var btnText = document.getElementById("infoFeatures");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "Features & Capacity";
      featuresText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "Features & Capacity";
      featuresText.style.display = "inline";
    }
  }

  
  function dropConnections() {
    var end = document.getElementById("endconnections");
    var connectionsText = document.getElementById("connections");
    var btnText = document.getElementById("infoConnections");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "Connections";
      connectionsText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "Connections";
      connectionsText.style.display = "inline";
    }
  }