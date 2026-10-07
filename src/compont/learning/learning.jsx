import { useEffect, useState } from "react";
import "./learning.css";

function Leaning() {
  const [activeTab, setActiveTab] = useState(0);

  const learningData = [
    {
      name: "Academics",
      icon: "▣",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
      title: "Academics",
      subtitle: "Classes 6–12 · CBSE, ICSE and State Boards",
      points: [
        "School subjects",
        "Concept clarity",
        "Practice and assessment",
        "Progress-focused learning",
      ],
    },

    {
      name: "Skills & Careers",
      icon: "▣",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",
      title: "Skills & Careers",
      subtitle: "Practical skills for future opportunities",
      points: [
        "Coding",
        "Data Science",
        "Design",
        "Communication",
      ],
    },

    {
      name: "Mentorship",
      icon: "♣",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",
      title: "Mentorship Programs",
      subtitle: "A person to help you move forward",
      points: [
        "1:1 mentoring",
        "Career guidance",
        "Personal learning support",
        "Focused guidance",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % learningData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const activeData = learningData[activeTab];

  return (
    <main className="leaning-page">

      {/* =========================================
          LEARNING HERO
      ========================================= */}

      <section className="leaning-hero">

        {/* Background dots */}
        <div className="leaning-dots"></div>

        {/* =========================================
            TOP CONTENT
        ========================================= */}

        <div className="leaning-container">

          {/* LEFT */}
          <div className="leaning-left">

            <div className="leaning-badge">
              <span>★</span>
              Learning
            </div>

            <h1>
              Choose a path
              <br />
              built <span>around</span>
              <br />
              <span>your goal.</span>
            </h1>

            <p>
              Explore academics, skills and careers, and mentorship
              programs through a connected learning experience.
            </p>

          </div>


          {/* =========================================
              RIGHT MAIN LEARNING CARD
          ========================================= */}

          <div className="learning-card">

            {/* 3 TABS */}
            <div className="learning-tabs">

              {learningData.map((item, index) => (
                <button
                  key={item.name}
                  className={`learning-tab ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="learning-tab-icon">
                    {item.icon}
                  </span>

                  {item.name}
                </button>
              ))}

            </div>


            {/* IMAGE */}
            <div className="learning-image">

              <img
                key={activeData.image}
                src={activeData.image}
                alt={activeData.title}
              />

              <div className="learning-image-overlay"></div>

              <div className="learning-image-text">
                <h2>{activeData.title}</h2>

                <p>{activeData.subtitle}</p>
              </div>

            </div>


            {/* 4 POINTS */}
            <div className="learning-points">

              {activeData.points.map((point) => (
                <div
                  className="learning-point"
                  key={point}
                >
                  <span className="learning-check">
                    ✓
                  </span>

                  <span>{point}</span>
                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            BELOW 3 CARDS
            IMPORTANT:
            YE learning-card ke bahar hain
        ================================================= */}

        {/* =========================================
    BELOW 3 BOXES
    UPPER SECTION KO TOUCH MAT KARNA
========================================= */}

<div className="learning-second-row">

  {/* ================================
      ACADEMICS
  ================================= */}

  <div className="learning-box">

    <div className="learning-box-icon learning-icon-cyan">
      🎓
    </div>

    <h3>Academics</h3>

    <p>
      Classes 6–12 across CBSE, ICSE and State Boards
      with concept-based learning and structured support.
    </p>

    <div className="learning-box-list">

      <div>
        <span>✓</span>
        <strong>School subjects</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Concept clarity</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Practice and assessment</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Progress-focused learning</strong>
      </div>

    </div>

    <button className="learning-box-button">
      Get Started <span>→</span>
    </button>

  </div>


  {/* ================================
      SKILLS & CAREERS
  ================================= */}

  <div className="learning-box learning-box-blue">

    <div className="learning-box-icon learning-icon-yellow">
      💻
    </div>

    <h3>Skills &amp; Careers</h3>

    <p>
      Build practical skills that support future
      opportunities and personal growth.
    </p>

    <div className="learning-box-list">

      <div>
        <span>✓</span>
        <strong>Coding</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Data Science</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Design</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Communication</strong>
      </div>

    </div>

    <button className="learning-box-button">
      Get Started <span>→</span>
    </button>

  </div>


  {/* ================================
      MENTORSHIP PROGRAMS
  ================================= */}

  <div className="learning-box">

    <div className="learning-box-icon learning-icon-pink">
      👥
    </div>

    <h3>Mentorship Programs</h3>

    <p>
      Get focused guidance when you need a person
      to help you move forward.
    </p>

    <div className="learning-box-list">

      <div>
        <span>✓</span>
        <strong>1:1 mentoring</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Career guidance</strong>
      </div>

      <div>
        <span>✓</span>
        <strong>Personal learning support</strong>
      </div>

    </div>

    <button className="learning-box-button">
      Get Started <span>→</span>
    </button>



          </div>

        </div>

      </section>

      {/* =========================================
    SECTION BELOW 3 BOXES
========================================= */}

<section className="learning-live-section">

  <div className="learning-live-container">

    {/* LEFT CONTENT */}
    <div className="learning-live-left">

      <div className="learning-live-label">
        <span>★</span>
        <strong>01</strong>
        <span>Learning + live classes</span>
      </div>

      <h2>
        Learning
        <br />
        doesn't stop
        <br />
        <span>when the</span>
        <br />
        <span>class ends.</span>
      </h2>

    </div>


    {/* RIGHT CONTENT */}
    <div className="learning-live-right">

      <h3>
        Use live classes to ask questions and
        understand concepts in real time,
        then continue with recordings,
        notes, assignments, practice and
        progress tracking.
      </h3>


      {/* FEATURES */}

      <div className="learning-live-features">

        <div className="learning-live-feature">
          <span>↻</span>
          Recordings
        </div>

        <div className="learning-live-feature">
          <span>▤</span>
          Notes
        </div>

        <div className="learning-live-feature">
          <span>▣</span>
          Assignments
        </div>

        <div className="learning-live-feature">
          <span>◧</span>
          Practice
        </div>

        <div className="learning-live-feature">
          <span>⌁</span>
          Progress tracking
        </div>

      </div>


      {/* BUTTON */}

      <button className="learning-live-button">
        How It Works
      </button>

    </div>

  </div>

</section>

    </main>
  );
}

export default Leaning;