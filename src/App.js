// React Portfolio Starter Template (No Router)
// All sections on one page for simplicity

import React from "react";

function App() {
  return (
    <div className="p-4 font-sans">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Hi, I'm Byeolah 👋</h1>
        <p className="mt-2 text-lg">Aspiring ML Engineer | CS Master's Student at Columbia</p>
      </section>

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2">
          I'm passionate about technology, education, and making CS accessible. Currently teaching math and computer science while preparing for grad school.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc list-inside mt-2">
          <li><strong>To-do List App</strong> – A simple React app to manage tasks (deployed via GitHub Pages)</li>
          <li><strong>ML Pipeline</strong> – Built with Python and scikit-learn in collaboration with KPMG</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="mt-2">React, Python, JavaScript, HTML, CSS, scikit-learn, PyTorch, Git</p>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">Email: byeolah@example.com</p>
        <p>GitHub: <a className="text-blue-500" href="https://github.com/Byeolah-Kwon">@Byeolah-Kwon</a></p>
        <p>LinkedIn: <a className="text-blue-500" href="https://linkedin.com/in/byeolah">/in/byeolah</a></p>
      </section>
    </div>
  );
}

export default App;
