// Liste des projets
const projects = [
    { title: "Projet 1", description: "Description du projet 1" },
    { title: "Projet 2", description: "Description du projet 2" },
    { title: "Projet 3", description: "Description du projet 3" },
];

// Ajouter les projets à la page
const projectContainer = document.getElementById('project-list');
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectContainer.appendChild(projectDiv);
});

// Liste des compétences
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const skillList = document.getElementById('skill-list');
skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    skillList.appendChild(skillItem);
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Merci ${name}! Votre message a été envoyé.`);
    e.target.reset();
});
