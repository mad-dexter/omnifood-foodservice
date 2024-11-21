// Code to open and close menu item in mobile view
document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    if (document.querySelector(".header").classList.contains("nav-open")) {
      document.querySelector(".header").classList.remove("nav-open");
    } else {
      document.querySelector(".header").classList.add("nav-open");
    }
  });

// Get current year for copyright
yearEl = document.querySelector(".year");
currYear = new Date().getFullYear();
console.log(currYear);
yearEl.textContent = currYear;

// Code for smooth scroll in all browser
const links = document.querySelectorAll("a:link");
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Before doing anything if in mobile remove the "nav-open" class from navigation to close it
    document.querySelector(".header").classList.remove("nav-open");

    const target = link.getAttribute("href");
    // console.log(target);

    // Check if the link clicked is home
    if (target === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Get the element using the href id where we need to scroll
      const scrollEl = document.querySelector(target);
      scrollEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Sticky navigation implementation
const heroEl = document.querySelector(".hero-section");

// INtersection observer check for the mentioned section if its intersecting in the viewport of not
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    // console.log(entry);
    if (entry.isIntersecting) {
      document.querySelector(".header").classList.remove("sticky");
    } else {
      document.querySelector(".header").classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-180px",
  }
);

// Observe the movement of the hero section in viewport
obs.observe(heroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions.
// SOME STYLES are in QUERIES.CSS file
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// End of Flexbox gap fix
