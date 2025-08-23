const content = {
  sr: {
    title: "Milan Nedeljković",
    subtitle: "WordPress developer & SEO optimizator",
    aboutTitle: "O meni",
    aboutText: "Radim na izradi i održavanju WordPress sajtova, SEO optimizaciji i rešavanju grešaka uz pomoć AI alata.",
    projectsTitle: "Projekti",
    showcaseTitle: "GitHub Projekti",
    contactText: "Kontakt: milan.nedeljkovic.mht@gmail.com | GitHub: @milannedeljkovic-webdev"
  },
  en: {
    title: "Milan Nedeljković",
    subtitle: "WordPress developer & SEO optimizer",
    aboutTitle: "About Me",
    aboutText: "I build and maintain WordPress websites, optimize SEO, and fix bugs using AI tools.",
    projectsTitle: "Projects",
    showcaseTitle: "GitHub Projects",
    contactText: "Contact: milan.nedeljkovic.mht@gmail.com | GitHub: @milannedeljkovic-webdev"
  }
};

function setLanguage(lang) {
  document.getElementById("title").textContent = content[lang].title;
  document.getElementById("subtitle").textContent = content[lang].subtitle;
  document.getElementById("about-title").textContent = content[lang].aboutTitle;
  document.getElementById("about-text").textContent = content[lang].aboutText;
  document.getElementById("projects-title").textContent = content[lang].projectsTitle;
  document.getElementById("showcase-title").textContent = content[lang].showcaseTitle;
  document.getElementById("contact-text").textContent = content[lang].contactText;
}
