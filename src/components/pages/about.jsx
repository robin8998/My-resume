import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold text-blue-600">Robin Singh</span> – a passionate front-end developer with a strong foundation in
            HTML, CSS, JavaScript, and React. I recently stepped into the world of web development and love crafting user-friendly, responsive,
            and visually appealing web applications.
            <br /><br />
            I’ve also explored tools like React Redux, React Router, and Appwrite to build full-stack projects, including my personal blog platform.
            I enjoy turning ideas into real-world projects and continuously learning to improve my skills.
            <br /><br />
            Currently, I’m diving deeper into responsive design, UI/UX principles, and backend integration to become a more well-rounded developer.
            When I’m not coding, you’ll find me exploring design inspiration or learning something new in tech.
            <br /><br />
            I’m excited to collaborate, contribute, and grow in the tech space. Let’s build something amazing together!
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/images/myPhoto.jpg"
            alt="Robin Singh"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
