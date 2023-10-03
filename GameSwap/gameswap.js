import React from 'react';
import Navbar from './Navbar'; 
var dropdownBtn = document.querySelector(".dropbtn");

  // Lägg till en klickhändelse för att visa/dölja dropdown-innehållet
  dropdownBtn.addEventListener("click", function() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Dölj dropdown-innehållet när användaren klickar någon annanstans på sidan
  window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function(dropdown) {
        if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
        }
      });
    }
  });

  function App() {
    return (
      <div>
        {/* Other components */}
        <Navbar />
        {/* Other components */}
      </div>
    );
  }
  
  export default App;