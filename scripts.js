const projects = [
  {
    title: "Tasky",
    description:
      "Tasky is a full-stack web application I developed to streamline task management. It features a React.js frontend hosted on AWS S3 and a Django backend deployed on AWS EC2, utilizing SQLite for data storage. The application employs RESTful APIs for seamless frontend-backend communication and supports full CRUD operations for managing tasks.",
    link: "http://taskyfe.s3-website-us-east-1.amazonaws.com/login",
    image: "assets/Tasky.png",
  },
  {
    title: "Silbiger Family Tree",
    description:
      "The Silbiger Family Tree is a Node.js web application designed to document the genealogy of the Silbiger family. It uses PostgreSQL for the database and Node.js for both the frontend and backend. The application is styled with Bootstrap, providing a clean and responsive design. It supports full CRUD operations, allowing users to create, read, update, and delete family records efficiently. JWT (JSON Web Tokens) is used for secure authentication and authorization, with administrator login granting permissions for operation management.",
    link: "https://github.com/JustinSilbiger/silbiger",
    image: "assets/Family.png",
  },
  {
    title: "Patient Service API",
    description:
      "As part of a group boot camp project, I contributed to the Patient Service API by designing and integrating new database models that establish connections between Physician and Employee entities. My contributions included developing and optimizing CRUD operations for managing employee data and introducing new API endpoints for seamless data retrieval. These enhancements strengthened the backend architecture and ensured the system's scalability, setting a solid foundation for future growth. This boot camp group project was an excellent learning experience in building and managing complex backend systems with a focus on robust, scalable infrastructure.",
    link: "https://github.com/JustinSilbiger/Patient-Service-API",
    image: "assets/Patient.png",
  },
  // {
  //   title: "Patient Service UI",
  //   description: "A React front-end UI for the Patient Service API.",
  //   link: "https://github.com/JustinSilbiger/PATIENT_SERVICE_UI",
  // },
  {
    title: "Recipe Book",
    description:
      "A Flask application to manage and share your favorite recipes.",
    link: "https://github.com/JustinSilbiger/recipe_book",
  },
  {
    title: "JTimes.org",
    description:
      "This reference website utilizes the Hebcal API to fetch and display Sabbath times, leveraging JavaScript Geolocation for user-specific information. String concatenation is employed to dynamically construct and present location-based information, combining static text with fetched data for personalized content.",
    link: "https://github.com/JustinSilbiger/shabbat-shalom.github.io",
    image: "assets/Jtimes.png",
  },
  {
    title: "Sigma Mary AI",
    description:
      "Sigma-Mary-AI is an AI text summarizer built using Meta's BART model, trained on CNN and Daily Mail news articles. Developed as a project from Postman Academy, it effectively condenses lengthy texts into concise summaries. By leveraging advanced natural language processing, Sigma-Mary-AI demonstrates the practical use of AI in text summarization.",
    link: "https://github.com/JustinSilbiger/Sigma-Mary-AI",
    image: "assets/Sigma-Mary-AI.png",
  },
];

function populateProjects() {
  const projectsContainer = document.getElementById("projects-container");
  projects
    .sort(() => Math.random() - 0.5)
    .forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "col-md-4 d-flex p-2";
      projectCard.innerHTML = `
        <div class="card project-card" data-aos="fade-up">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            ${
              project.image
                ? `<img src="${project.image}" class="card-img-top p-2 mb-3" alt="${project.title} image">`
                : ""
            }
            <p class="card-text">${project.description}</p>
            <a href="${
              project.link
            }" class="btn btn-primary" target="_blank">Learn More</a>
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
