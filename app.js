document.addEventListener("DOMContentLoaded", function() {
  // Dynamic Nav
  const sections = [
    { id: "section-1", title: "Section 1" },
    { id: "section-2", title: "Section 2" },
    { id: "section-3", title: "Section 3" },
    { id: "section-4", title: "Section 4" },
    // Add more sections as needed
  ];

  const navList = document.getElementById("nav-list");

  sections.forEach(function(section) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", `#${section.id}`);
    link.textContent = section.title;
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  // Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  const allSections = document.querySelectorAll("section");

  allSections.forEach(function(section) {
    observer.observe(section);
  });

  function handleIntersection(entries) {
    entries.forEach(function(entry) {
      const { target } = entry;
      const navLink = document.querySelector(`a[href="#${target.id}"]`);

      if (entry.isIntersecting) {
        target.classList.add("active");
        navLink.classList.add("active");
              } else {
                target.classList.remove("active");
                navLink.classList.remove("active");
              }
            });
          }

          // Scroll-to-Top Button
          const scrollToTopBtn = document.getElementById("scroll-to-top");

          function toggleScrollToTopButton() {
            if (window.scrollY > window.innerHeight) {
              scrollToTopBtn.classList.remove("hidden");
            } else {
              scrollToTopBtn.classList.add("hidden");
            }
          }

          function scrollToTop() {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }

          scrollToTopBtn.addEventListener("click", scrollToTop);
          document.addEventListener("scroll", toggleScrollToTopButton);

          // Smooth Scrolling
          const navLinks = document.querySelectorAll("nav a");

          navLinks.forEach(function(navLink) {
            navLink.addEventListener("click", function(e) {
              e.preventDefault();

              const targetId = navLink.getAttribute("href").slice(1);
              const targetSection = document.getElementById(targetId);

              window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
              });
            });
          });

          // Add New Sections
          const main = document.querySelector("main");

          function addSection() {
            const sectionCount = document.querySelectorAll("section").length;
            const newSectionId = `section-${sectionCount + 1}`;
            const newSectionTitle = `Section ${sectionCount + 1}`;

            const newSection = document.createElement("section");
            newSection.setAttribute("id", newSectionId);
            newSection.setAttribute("data-nav", newSectionTitle);
            newSection.innerHTML = `
              <h2>${newSectionTitle}</h2>
              <p>This is section ${sectionCount + 1}.</p>
            `;

            main.appendChild(newSection);

            const newNavLink = document.createElement("a");
            newNavLink.setAttribute("href", `#${newSectionId}`);
            newNavLink.textContent = newSectionTitle;

            const newNavItem = document.createElement("li");
            newNavItem.appendChild(newNavLink);
            navList.appendChild(newNavItem);

            observer.observe(newSection);
          }

          // Example: Add a new section when a button is clicked
          const addButton = document.getElementById("add-button");
          addButton.addEventListener("click", addSection);
        });
