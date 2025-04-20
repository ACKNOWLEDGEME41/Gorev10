import React from 'react';
import './Skills.css';  

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>Bildiğim Teknolojiler</h2>
      <ul>
        <li>HTML5, CSS3</li>
        <li>JavaScript (ES6+), TypeScript</li>
        <li>React, Redux, Node.js</li>
        <li>Version Control (Git, GitHub)</li>
        <li>Responsive ve Mobile-First Tasarım</li>
        <li>API Entegrasyonu (RESTful, GraphQL)</li>
        <li>Webpack</li>
        <li>Performance Optimization (Lazy Loading, Code Splitting)</li>
      </ul>
    </section>
  );
};

export default Skills;
