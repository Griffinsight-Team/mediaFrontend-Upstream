import React from 'react';

const About = () => {
  return (
    <div className="griffinsight-container">
      <header className="griffinsight-header">
        <h1>Griffinsight</h1>
        <p>IIT Mandi Student Media Body</p>
      </header>
      <main className="griffinsight-main">
        <section className="mission-statement">
          <h2>Mission of Griffinsight</h2>
          <p>
            We strive to represent the diversity of perspectives on campus,
            publishing news and opinion on subjects that concern the welfare and
            enlightenment of the members of the IIT Mandi community. We are
            dedicated to handling all matters accurately, transparently, and
            impartially.
          </p>
          <p>
            We aim to become the reliable source for campus news and serve as a
            public forum for the campus community to enable students to be
            informed and become active participants in college life.
          </p>
        </section>
        <section className="club-members">
          <h2>Club Members Breakdown - Academic Year 2023-24</h2>
          <h3>Content Team</h3>
          <ul>
            <li>Anisha</li>
            <li>Prisha Singh</li>
            <li>Meghana</li>
            <li>Saatvik</li>
            <li>Toshan Gupta</li>
            <li>Khushi Ladha (Mentor)</li>
          </ul>
          <h3>Design Team</h3>
          <ul>
            <li>Harshit Vyas</li>
          </ul>
          <h3>Technical Team</h3>
          <ul>
            <li>Vikas Dangi</li>
            <li>Saksham</li>
            <li>Pushkar Patel</li>
          </ul>
        </section>
      </main>
      <footer className="griffinsight-footer">
        {/* <p>&copy; Griffinsight {new Date().getFullYear()}</p> */}
      </footer>
    </div>
  );
};

export default About;
