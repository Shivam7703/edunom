function initHamburgerMenu() {
    const hamMenu = document.querySelector(".ham-menu");
    const dropdowns = document.querySelectorAll(".hamMenuDropdown");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    if (!hamMenu) {
      console.error('Hamburger menu element not found.');
      return;
    }
    if (!offScreenMenu) {
      console.error('Off-screen menu element not found.');
      return;
    }

    console.log('Hamburger menu and off-screen menu elements found.');

    hamMenu.addEventListener("click", () => {
      console.log('Hamburger menu clicked.');
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });

    dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent event from bubbling up to parent dropdowns
        const parent = e.target.closest("li");
        if (!parent) return;

        console.log('Dropdown clicked:', parent);

        const dropdownContainer = parent.querySelector(".hamDropdownContainer");

        // Toggle the current dropdown
        dropdownContainer.classList.toggle("open-dropdown");

        // If the current dropdown is open, ensure all ancestor dropdowns remain open
        if (dropdownContainer.classList.contains("open-dropdown")) {
          let ancestor = parent.parentElement.closest("li");
          while (ancestor) {
            ancestor.querySelector(".hamDropdownContainer").classList.add("open-dropdown");
            ancestor = ancestor.parentElement.closest("li");
          }
        } else {
          // Close all nested dropdowns
          parent.querySelectorAll(".hamDropdownContainer").forEach(container => {
            container.classList.remove("open-dropdown");
          });
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
  });