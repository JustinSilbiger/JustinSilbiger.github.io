const projects = [
  {
    title: "Silbiger Family Tree",
    description:
      "The Silbiger Family Tree is a Node.js web application designed to document the genealogy of the Silbiger family.",
    link: "https://github.com/JustinSilbiger/silbiger",
    created: "2021-04-10",
  },
  {
    title: "Patient Service API",
    description: "An API service to manage patient data and interactions.",
    link: "https://github.com/JustinSilbiger/Patient-Service-API",
    created: "2021-11-10",
  },
  {
    title: "Patient Service UI",
    description: "Front-end UI for the Patient Service API.",
    link: "https://github.com/JustinSilbiger/PATIENT_SERVICE_UI",
    created: "2022-03-05",
  },
  {
    title: "To-Do Django",
    description: "A simple to-do application built with Django.",
    link: "https://github.com/JustinSilbiger/To_Do_Django",
    created: "2021-06-15",
  },
  {
    title: "Recipe Book",
    description:
      "A Flask application to manage and share your favorite recipes.",
    link: "https://github.com/JustinSilbiger/recipe_book",
    created: "2021-08-01",
  },
  {
    title: "Department of Automotive Vehicles",
    description:
      "A simple React project that uses JavaScript to determine if a person is old enough to apply for their driver's test.",
    link: "https://github.com/JustinSilbiger/DofAV",
    created: "2022-01-20",
  },
  {
    title: "JTimes.org",
    description: "A website to share Shabbat traditions and resources.",
    link: "https://github.com/JustinSilbiger/shabbat-shalom.github.io",
    created: "2022-05-15",
  },
  {
    title: "YouTube Clone",
    description: "A clone of the YouTube platform with basic features.",
    link: "https://github.com/JustinSilbiger/youtube_clone",
    created: "2022-07-30",
  },
  {
    title: "Sigma Mary AI",
    description: "An AI project focused on natural language processing.",
    link: "https://github.com/JustinSilbiger/Sigma-Mary-AI",
    created: "2022-10-20",
  },
];

function populateProjects() {
  const projectsContainer = document.getElementById("projects-container");
  projects
    .sort((a, b) => new Date(a.created) - new Date(b.created))
    .forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "col-md-4 d-flex p-2";
      projectCard.innerHTML = `
          <div class="card project-card" data-aos="fade-up">
              <div class="card-body">
                  <h5 class="card-title">${project.title}</h5>
                  <p class="card-text">${project.description}</p>
                  <a href="${project.link}" class="btn btn-primary" target="_blank">Learn More</a>
              </div>
          </div>
      `;
      projectsContainer.appendChild(projectCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  populateProjects();

  const sidebar = document.getElementById("sidebar");
  const openSidebarBtn = document.getElementById("openSidebar");
  const closeSidebarBtn = document.getElementById("closeSidebar");
  const links = document.querySelectorAll(".sidebar .nav-link");
  const themeToggle = document.getElementById("themeToggle");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const currentTheme = localStorage.getItem("theme") || "dark";

  document.body.classList.add(currentTheme + "-mode");
  themeToggle.checked = currentTheme === "dark";

  openSidebarBtn.addEventListener("click", () => {
    sidebar.style.width = "250px";
  });

  closeSidebarBtn.addEventListener("click", () => {
    sidebar.style.width = "0";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.style.width = "0";
    });
  });

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
    updateButtonColors();
  });

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  AOS.init();
  updateButtonColors();
});

function updateButtonColors() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const primaryButtons = document.querySelectorAll(".btn-primary");
  const secondaryButtons = document.querySelectorAll(".btn-secondary");

  primaryButtons.forEach((btn) => {
    btn.style.backgroundColor = isDarkMode ? "#ffffff" : "#000000";
    btn.style.borderColor = isDarkMode ? "#ffffff" : "#000000";
    btn.style.color = isDarkMode ? "#000000" : "#ffffff";
  });

  secondaryButtons.forEach((btn) => {
    btn.style.backgroundColor = isDarkMode ? "#ffffff" : "#000000";
    btn.style.borderColor = isDarkMode ? "#ffffff" : "#000000";
    btn.style.color = isDarkMode ? "#000000" : "#ffffff";
  });
}
