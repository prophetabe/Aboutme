import React from 'react';
import './App.css'; 

function App() {
  const skills = [
    { id: 1, name: 'JavaScript', level: 'Intermediate' },
    { id: 2, name: 'React', level: 'Beginner' },
    { id: 3, name: 'Python', level: 'Mediocre' },
  ];

  const experiences = [
    { id: 1, title: 'Developer', company: 'ibm', duration: 'Jun 2024 – Present' },
    
  ];

  const education = [
    { id: 1, institution: 'USF', degree: 'B.S. Information Systems', years: '2021 – 2025' },
  ];
}

return (
    <div className="App">
      <header className="App-header">
        <h1>Ibraheem Aderoju </h1>
        <p>
          Tech savvy and ready to build!
        </p>
        <p>Email: iaaderoju@usf.edu | LinkedIn: linkedin.com/in/IbraheemAderoju</p>
      </header>
      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill.id}>{skill.name} - {skill.level}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        {experiences.map(exp => (
          <div key={exp.id}>
            <h3>{exp.title} at {exp.company}</h3>
            <p>{exp.duration}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        {education.map(edu => (
          <div key={edu.id}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution} - {edu.years}</p>
          </div>
        ))}
      </section>
    </div>
  );
  
  export default App;