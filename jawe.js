// Create the HTML structure using JavaScript
function createDebileList() {
    // Create the <hr> elements
    var hr1 = document.createElement("hr");
    var hr2 = document.createElement("hr");
  
    // Create the <center> element
    var center = document.createElement("center");
  
    // Create the <h1> element
    var h1 = document.createElement("h1");
    h1.textContent = "Lista największych pedałów.";
  
    // Create the first <a> element
    var a1 = document.createElement("a");
    a1.href = "https://www.facebook.com/olek.misztal.1";
    a1.textContent = "1. Olek Misztal";
  
    // Create the <h2> elements
    var h2_1 = document.createElement("h2");
    h2_1.textContent = "2. Osu (gra komputerowa)";
    var h2_2 = document.createElement("h2");
    h2_2.textContent = "3. nikt";
  
    // Append elements to the <center> element
    center.appendChild(h1);
    center.appendChild(a1);
    center.appendChild(h2_1);
    center.appendChild(h2_2);
  
    // Append elements to the <body> element
    document.body.appendChild(hr1);
    document.body.appendChild(center);
    document.body.appendChild(hr2);
  }
  
  // Call the function to create the Debile.pl list
  createDebileList();
  