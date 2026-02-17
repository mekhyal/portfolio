// Mobile nav
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("show");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a link (mobile)
    navMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            navMenu.classList.remove("show");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Year in footer
document.getElementById("year").textContent = String(new Date().getFullYear());

// Contact form -> mailto (no backend)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const name = String(data.get("name") || "").trim();
        const subject = String(data.get("subject") || "").trim();
        const message = String(data.get("message") || "").trim();

        const body =
            `Name: ${name}\n\n` +
            `${message}\n\n` +
            `— Sent from Abdullah's portfolio website`;

        const mailto = `mailto:a.almekhyal05@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;

        if (note) note.textContent = "Opening your email app…";
    });
}
