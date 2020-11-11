  /*  Knapp för Modelbeskrivning  */

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

  /*  Knappp för Skärm/Display  */
  
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

  /* Knapp för funktioner och egenskaper  */

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

  /*  Knapp för anslutningar  */

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

  /*  Knapp för design, form och placering  */
  
  function dropDesign() {
    var end = document.getElementById("enddesign");
    var designText = document.getElementById("design");
    var btnText = document.getElementById("infoDesing");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "Design, Shape & Placing";
      designText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "Design, Shape & Placing";
      designText.style.display = "inline";
    }
  }

  /*  Knapp för mått & vikt */
  
  function dropWeights() {
    var end = document.getElementById("endweights");
    var weightsText = document.getElementById("weights");
    var btnText = document.getElementById("infoWeights");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "Weights & Measures";
      weightsText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "Weights & Measures";
      weightsText.style.display = "inline";
    }
  }

  /*   Knapp för förpacknings innehåll  */
  
  function dropPackage() {
    var end = document.getElementById("endpackage");
    var packageText = document.getElementById("package");
    var btnText = document.getElementById("infoPackage");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "Package Content";
      packageText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "Package Content";
      packageText.style.display = "inline";
    }
  }

  /*  Knapp för EAN */
  
  function dropEan() {
    var end = document.getElementById("endean");
    var eanText = document.getElementById("ean");
    var btnText = document.getElementById("infoEan");

    if (end.style.display === "none") {
        end.style.display = "inline";
      btnText.innerHTML = "EAN";
      eanText.style.display = "none";
    } else {
        end.style.display = "none";
      btnText.innerHTML = "EAN";
      eanText.style.display = "inline";
    }
  }