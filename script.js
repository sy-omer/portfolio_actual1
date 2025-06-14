document.getElementById('portfolioForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const profession = form.profession.value.trim();
  const bio = form.bio.value.trim();
  const skills = form.skills.value.split(',').map(s => s.trim());
  const projects = form.projects.value.split(',').map(p => p.trim());
  const education = form.education.value.trim();
  const experience = form.experience.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const linkedin = form.linkedin.value.trim();

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>${name}'s Portfolio</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
        body {
          padding: 40px;
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
        }
        h2, h4 {
          color: #007bff;
          text-align: center;
        }
        section {
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <h2>${name}</h2>
      <h4>${profession}</h4>
      <section><h5>About Me</h5><p>${bio}</p></section>
      <section><h5>Skills</h5><ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul></section>
      <section><h5>Projects</h5><ul>${projects.map(project => `<li>${project}</li>`).join('')}</ul></section>
      <section><h5>Education</h5><p>${education}</p></section>
      <section><h5>Experience</h5><p>${experience}</p></section>
      <section><h5>Contact</h5>
        <p>Email: <a href="mailto:${email}">${email}</a><br>
        Phone: ${phone}<br>
        LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
      </section>
    </body>
    </html>
  `;

  // Open new tab and write HTML to it
  const newWindow = window.open('', '_blank');
  newWindow.document.write(htmlContent);
  newWindow.document.close();
});
