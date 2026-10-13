
import { images, smallimage } from "../../assets/image/image.js";
import "./Teacher.css";
import { useState } from "react";

function Teacher() {
  const [selectedSubject, setSelectedSubject] = useState("All subjects");

  // TEACHER DATA
  const teachers = [
    {
      name: "Ms. Priya Sharma",
      subject: "Physics",
      initials: "PS",
      rating: "4.9",
      cardClass: "teacher-card-physics",
    },
    {
      name: "Mr. Rahul Verma",
      subject: "Maths",
      initials: "RV",
      rating: "4.8",
      cardClass: "teacher-card-maths",
    },
    {
      name: "Ms. Sneha Iyer",
      subject: "Chemistry",
      initials: "SI",
      rating: "4.9",
      cardClass: "teacher-card-chemistry",
    },
    {
      name: "Mr. Arjun Mehta",
      subject: "Coding",
      initials: "AM",
      rating: "4.8",
      cardClass: "teacher-card-coding",
    },
    {
      name: "Ms. Kavya Reddy",
      subject: "English",
      initials: "KR",
      rating: "4.9",
      cardClass: "teacher-card-english",
    },
  ];

  // FILTER TEACHERS
  const filteredTeachers = teachers.filter((teacher) => {
    if (selectedSubject === "All subjects") return true;

    if (selectedSubject === "Science") {
      return ["Physics", "Chemistry"].includes(teacher.subject);
    }

    return teacher.subject === selectedSubject;
  });

  const subjects = ["All subjects", "Science", "Maths", "Coding", "English"];

  return (
    <main className="teacher-page">
      <div className="teacher-dots"></div>

      {/* FIRST HERO SECTION */}
      <section className="teacher-hero">
        <div className="teacher-left">
          <div className="teacher-badge">
            <span>★</span>
            Our teachers
          </div>

          <h1>
            Guidance from
            <br />
            people who <span>care</span>
            <br />
            <span>about progress.</span>
          </h1>

          <p>
            Experienced educators and teachers help learners
            <br />
            understand, improve and move forward with confidence.
          </p>
        </div>

        <div className="teacher-right">
          <div className="teacher-video-card">
            <div className="teacher-top-bar">
              <div className="teacher-live">
                <span></span>
                LIVE
              </div>

              <strong>Quadratic Equations · Class 10</strong>

              <div className="teacher-count">👥 32</div>
            </div>

            <div className="teacher-image-box">
              <img src={images} alt="Live teaching session" />

              <div className="teacher-rating">★ &nbsp; 4.9 rating</div>

              <div className="teacher-small-video">
                <img src={smallimage} alt="Teacher preview" />
              </div>
            </div>

            <div className="teacher-controls">
              <button type="button">◒</button>
              <button type="button">▣</button>
              <button type="button" className="hand">✋</button>
              <button type="button" className="call">☎</button>
            </div>
          </div>

          <div className="teacher-chat">
            <div className="chat-heading">
              <span>▣</span>
              Class chat
            </div>

            <div className="raised-hand">
              <span>✋</span>
              <strong>Riya raised a hand</strong>
            </div>

            <div className="question-box">
              <small>Riya</small>
              <p>Why does this graph cut the x-axis twice?</p>
            </div>

            <div className="answer-box">
              <small>Teacher</small>
              <p>
                Its discriminant b² − 4ac is positive, so the equation has
                two real roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHER SUBJECT FILTERS AND CARDS */}
      <section className="teacher-list-section">
        <div className="teacher-subjects">
          {subjects.map((subject) => (
            <button
              type="button"
              key={subject}
              className={selectedSubject === subject ? "active" : ""}
              aria-pressed={selectedSubject === subject}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="teacher-cards">
          {filteredTeachers.map((teacher) => (
            <div className="teacher-card" key={teacher.subject}>
              <div
                className={`teacher-card-image ${teacher.cardClass}`}
              >
                <span className="teacher-subject-badge">
                  {teacher.subject === "Physics" && "⚡ "}
                  {teacher.subject === "Maths" && "Σ "}
                  {teacher.subject === "Chemistry" && "⚗ "}
                  {teacher.subject === "Coding" && "</> "}
                  {teacher.subject === "English" && "▣ "}
                  {teacher.subject}
                </span>

                <div className="teacher-initials">{teacher.initials}</div>
              </div>

              <h3>{teacher.name}</h3>
              <p>{teacher.subject} Teacher</p>

              <div className="teacher-card-bottom">
                <span className="teacher-rating-small">
                  ★ {teacher.rating}
                </span>
                <span className="teacher-verified">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECOND HERO SECTION */}
      <section className="teacher-hero">
        <div className="teacher-left">
          <div className="teacher-badge">
            <span>★</span>
            01 live teaching
          </div>

          <h1>
            Ask questions.
            <br />
            Get guidance.
            <br />
            <span>Keep moving.</span>
          </h1>

          <p>
            Teaching is designed to complement learning —
            <br />
            helping learners clarify doubts, understand
            <br />
            difficult concepts, build confidence and make
            <br />
            better next-step decisions.
          </p>
        </div>

        <div className="teacher-guidance">
          <div className="guidance-box guidance-blue">
            <div>
              <h3>1:1 Guidance</h3>
              <p>Focused support around a learner's needs.</p>
            </div>
            <div className="guidance-icon">♟</div>
          </div>

          <div className="guidance-box guidance-yellow">
            <div>
              <h3>Group Interactive Sessions</h3>
              <p>
                Learn collaboratively and hear different questions
                <br />
                and approaches.
              </p>
            </div>
            <div className="guidance-icon">♟</div>
          </div>

          <div className="guidance-box guidance-pink">
            <div>
              <h3>Masterclasses</h3>
              <p>Go deeper into important concepts and skills.</p>
            </div>
            <div className="guidance-icon">♙</div>
          </div>

          <div className="guidance-box guidance-cyan">
            <div>
              <h3>Academic Guidance</h3>
              <p>
                Explore choices and opportunities with structured guidance.
              </p>
            </div>
            <div className="guidance-icon">●</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Teacher;
