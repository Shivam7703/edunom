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

  function initMarquee() {
    const container = document.getElementById('marqueeContainer');
    const content = document.getElementById('marqueeContent');

    if (!container || !content) {
      console.error('Marquee container or content not found.');
      return; // Exit if marquee elements are not found
    }

    let position = container.offsetWidth;
    const normalSpeed = 2;
    let currentSpeed = normalSpeed;
    const slowSpeed = 0.75;

    function moveMarquee() {
      position -= currentSpeed;
      if (position <= -content.offsetWidth) {
        position = container.offsetWidth;
      }
      content.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveMarquee);
    }

    container.addEventListener('mouseover', function() {
      currentSpeed = slowSpeed;
    });

    container.addEventListener('mouseout', function() {
      currentSpeed = normalSpeed;
    });

    moveMarquee();
  }

// Function to animate the progress circle
function animateProgressCircle(element, duration = 1000) {
  const targetPercent = parseInt(element.dataset.progress, 10);
  let startPercent = 0;
  const startTime = performance.now();

  function updateCircleProgress(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentPercent = Math.floor(startPercent + (targetPercent - startPercent) * progress);

    element.style.background = `conic-gradient(#2976A4 ${currentPercent * 3.6}deg, #e0e0e0 0deg)`;

    if (progress < 1) {
      requestAnimationFrame(updateCircleProgress);
    }
  }

  requestAnimationFrame(updateCircleProgress);
}

// Function to animate the number progress
function animateNumberProgress(element, duration = 1000) {
  const valueElement = element.querySelector('.progress-circle-value') || element;
  const targetPercent = parseInt(element.dataset.progress, 10);
  let startPercent = 0;
  const startTime = performance.now();

  function updateNumberProgress(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentPercent = Math.floor(startPercent + (targetPercent - startPercent) * progress);

    valueElement.textContent = `${currentPercent}%`;

    if (progress < 1) {
      requestAnimationFrame(updateNumberProgress);
    }
  }

  requestAnimationFrame(updateNumberProgress);
}

// Function to handle animation for both circle and number
function animateProgress(element, duration = 1000) {
  if (element.classList.contains('progress-circle')) {
    animateProgressCircle(element, duration);
  }
  const valueElement = element.querySelector('.progress-circle-value');
  if (valueElement) {
    animateNumberProgress(element, duration);
  }
}

// Function to initialize and observe progress circles
function initProgressCircles() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;

          // Add a visible class for any additional styles (if needed)
          targetElement.classList.add('visible');

          // Animate the progress (both circle and number)
          animateProgress(targetElement);

          // Stop observing the element once animated
          observer.unobserve(targetElement);
        }
      });
    },
    { threshold: 0.1 } // Adjust threshold for when to trigger animation
  );

  // Observe all elements with the 'progress-circle' class
  document.querySelectorAll('.progress-circle').forEach((circle) => {
    observer.observe(circle);
  });
}

// text-animation
function animateNumberProgress2(element, duration = 2500) {
  const targetPercent = parseInt(element.dataset.progress, 10);
  let startPercent = 0;
  const startTime = performance.now();

  function updateNumberProgress(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentPercent = Math.floor(startPercent + (targetPercent - startPercent) * progress);

    element.textContent = `${currentPercent}+`;

    if (progress < 1) {
      requestAnimationFrame(updateNumberProgress);
    }
  }

  requestAnimationFrame(updateNumberProgress);
}

// Initialize and observe elements with progress animation
function initNumberProgress() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          animateNumberProgress2(targetElement);
          observer.unobserve(targetElement);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all elements with the class 'progress-number'
  document.querySelectorAll('.progress-number').forEach((element) => {
    observer.observe(element);
  });
}




  function initFAQ() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', () => {
            // If clicking on an already active item, remove the active class
            if (question.parentNode.classList.contains('active')) {
                question.parentNode.classList.remove('active');
            } else {
                // Remove 'active' class from all question parents first
                questions.forEach(q => {
                    q.parentNode.classList.remove('active');
                });
                
                // Add 'active' class to the clicked question's parent
                question.parentNode.classList.add('active');
            }
        });
    });
}

  document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    initMarquee();
    initProgressCircles();
    initFAQ();
    initNumberProgress();
  });