
  
    // Toggle Hamburger Menu
    function toggleMenu() {
      document.getElementById("navMenu").classList.toggle("active");
    }

    // Filter Menu Items
    function filterMenu(category) {
      let items = document.getElementsByClassName("menu-item");
      for (let i = 0; i < items.length; i++) {
        if (category === "all") {
          items[i].style.display = "block";
        } else {
          items[i].style.display = items[i].classList.contains(category) ? "block" : "none";
        }
      }
    }

    // Search Menu Items
    function searchMenu() {
      let input = document.getElementById("search").value.toLowerCase();
      let items = document.getElementsByClassName("menu-item");
      for (let i = 0; i < items.length; i++) {
        let name = items[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        items[i].style.display = name.includes(input) ? "block" : "none";
      }
    }
  