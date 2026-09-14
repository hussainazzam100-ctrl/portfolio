const projects = [
    {
        title: "Lagoon Bites",
        year: "2026",
        category: "Web Development",
        description:
            "A responsive restaurant menu website designed as a professional digital menu for a local restaurant. Built with HTML, CSS and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/menu.png",
        link: "https://hussainazzam100-ctrl.github.io/demo_restaurent-menu/"
    },
    {
        title: "VCSA Student Platform",
        year: "2026",
        category: "Web Development",
        description:
            "A prototype student platform for the Villa College Student Association, designed to bring announcements, events and student resources together in one place.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/images.png",
        link: "https://hussainazzam100-ctrl.github.io/VCSA/"
    }
];

const workContainer = document.querySelector(".work");

function renderProjects() {
    if (!workContainer) return;

    workContainer.innerHTML = projects.map((project, index) => `
        <article class="piece p${index + 1}">
            <a
                href="${project.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
            >
                <div class="frame">
                    <img
                        src="${project.image}"
                        alt="${project.title} preview"
                    >
                    <span class="view-project">
                        View Project →
                    </span>
                </div>
            </a>

            <div class="cap">
                <div>
                    <strong>
                        ${project.title}
                    </strong>
                    <small>
                        ${project.description}
                    </small>
                    <div class="technologies">
                        ${project.technologies.map(tech => `
                            <span>${tech}</span>
                        `).join("")}
                    </div>
                </div>

                <span class="year">
                    ${project.year}
                </span>
            </div>
        </article>
    `).join("");
}

renderProjects();

/* THEME TOGGLE */
const themeToggle = document.getElementById("theme-toggle");

function updateThemeIcon() {
    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☾";
    } else {
        themeToggle.textContent = "☀";
    }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    updateThemeIcon();
});