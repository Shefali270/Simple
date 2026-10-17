import { useState, useEffect } from "react";
import student1 from "../../assets/image/images.jpg";
import student2 from "../../assets/image/imag 2.webp";
import student3 from "../../assets/image/image boy.jpg";
import "./Live.css";

/* WHY LIVEMENTORHUB FEATURES */
const features = [
  {
    title: "Expert Mentors",
    description:
      "Get guidance from mentors who care about your learning and support your journey, every step.",
    icon: "♙",
    color: "blue",
  },
  {
    title: "Live Classes",
    description:
      "Learn interactively with live sessions that are collaborative and designed for concept-building.",
    icon: "◉",
    color: "yellow",
  },
  {
    title: "Structured Learning",
    description:
      "Follow clear pathways designed to help you learn for academics and skills that matter.",
    icon: "↕",
    color: "pink",
  },
  {
    title: "Progress Focused",
    description:
      "Track your learning journey with insights, assessments and progress tools.",
    icon: "▥",
    color: "cyan",
  },
];

/* LIVE LAB DATA */
const labTopics = [
  {
    title: "Hydrogen spectrum",
    subject: "Physics",
    topic: "Atomic structure",
    description:
      "Electrons absorb or release energy when they move between energy levels. Each transition produces a characteristic wavelength of light.",
    fact: "Hydrogen is the simplest atom.",
    icon: "⚛",
  },
  {
    title: "Bohr atomic model",
    subject: "Physics",
    topic: "Structure of the atom",
    description:
      "Electrons occupy specific energy levels around the nucleus. Moving between levels requires absorbing or releasing energy.",
    fact: "Electrons occupy quantized energy levels.",
    icon: "⚛",
  },
  {
    title: "Photoelectric effect",
    subject: "Physics",
    topic: "Quantum physics",
    description:
      "Light can release electrons from a material when its frequency is above a threshold value.",
    fact: "Light energy comes in discrete photons.",
    icon: "☀",
  },
  {
    title: "DNA structure",
    subject: "Biology",
    topic: "Genetics",
    description:
      "DNA stores genetic information in a double helix. Its sequence helps determine how living organisms develop.",
    fact: "DNA uses four nucleotide bases.",
    icon: "🧬",
  },
  {
    title: "Rutherford's gold foil",
    subject: "Chemistry",
    topic: "Structure of the atom",
    description:
      "Most alpha particles pass straight through an atom. A few deflect sharply when they approach its tiny, positively charged nucleus.",
    fact: "The experiment revealed a small, dense nucleus.",
    icon: "⚛",
  },
];

/* MAIN COMPONENT */

/* MAIN COMPONENT */
function Live() {
  const [index, setIndex] = useState(4);
  const [playing, setPlaying] = useState(true);
  const [energy, setEnergy] = useState(70);
  const [impact, setImpact] = useState(41);
  const [isSwitching, setIsSwitching] = useState(false);



  /* NEXT AND PREVIOUS */
  const switchLab = (direction) => {
    setIsSwitching(true);

    setTimeout(() => {
      setIndex(
        (current) =>
          (current + direction + labTopics.length) % labTopics.length
      );
      setIsSwitching(false);
    }, 180);
  };

const nextLab = () => switchLab(1);
const previousLab = () => switchLab(-1);

  // Current lab data
  const lab = labTopics[index % labTopics.length];
  const angle = (impact * 0.96).toFixed(1);
  const distance = (impact * 1.424).toFixed(1);



  // Tumhara existing lab, angle aur distance code yahan rahega

  
  return (
    <main className="live-page">
      {/* HERO SECTION */}
      <section className="live-hero">
        <div className="live-hero-copy">
          <span className="live-eyebrow">
            LEARN BY EXPLORING
          </span>

          <h1>
            Learn by doing.
            <br />
            <span>Master it live.</span>
          </h1>

          <p>
            Try the idea here, then master it in a live class
            with an experienced teacher. Classes 6–12, CBSE,
            ICSE, IB and State Boards.
          </p>

          <div className="live-hero-actions">
            <button
              className="live-primary-button"
              onClick={() => {
                window.location.hash = "get-started";
              }}
            >
              Get Started <span>➜</span>
            </button>

            <button
              className="live-text-button"
              onClick={() => {
                window.location.hash = "how-it-works";
              }}
            >
              See how it works <span>➜</span>
            </button>
          </div>
        </div>

        {/* LIVE LAB CARD */}
        <div className="live-lab-card">
          <div className="live-card-header">
            <div className="live-card-topic">
              <span className="live-status-dot"></span>
              <span className="live-status-text">LIVE LAB</span>
              <strong>{lab.title}</strong>
              <small>
                {lab.subject} · {lab.topic}
              </small>
            </div>

            <div className="live-card-navigation">
              <button
                onClick={previousLab}
                aria-label="Previous lab"
                title="Previous lab"
              >
                ‹
              </button>

              <button onClick={nextLab}>
                <span>▶</span> Next
              </button>



              <small>
                {index + 1}/{labTopics.length}
              </small>
            </div>
          </div>

          <div className="live-lab-body">
            {/* SCIENCE DIAGRAM */}
            {/* <div className="live-atom-panel">
              <div className="live-particle-label">
                α particles →
              </div>


              {Array.from({ length: 28 }, (_, i) => (
                <span
                  key={i}
                  className="live-particle"
                  style={{
                    left: `${(i * 37 + 7) % 96}%`,
                    top: `${(i * 23 + 3) % 94}%`,
                    animationDelay: `${(i % 8) * -0.25}s`,
                  }}
                />
              ))}

              <svg
                className="live-science-svg"
                viewBox="0 0 420 250"
                role="img"
                aria-label="Illustration of alpha particles approaching a nucleus"
              >
                <path
                  d={`M 0 95 L 170 95 Q 245 95 280 65 T ${330 + impact * 0.4} 5`}
                  fill="none"
                  stroke="#315cf5"
                  strokeWidth="3"
                />

                <path
                  d="M 0 95 L 180 95 Q 240 95 285 75"
                  fill="none"
                  stroke="#315cf5"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  opacity=".5"
                />

                <circle
                  cx="260"
                  cy="130"
                  r="24"
                  fill="none"
                  stroke="#ff8b9d"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />

                <circle
                  cx="260"
                  cy="130"
                  r="13"
                  fill="#ffb6c2"
                  opacity=".4"
                />

                <circle
                  cx="260"
                  cy="130"
                  r="6"
                  fill="#f04466"
                />

                <text
                  x="282"
                  y="113"
                  fill="#f04466"
                  fontSize="15"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  d
                </text>

                <text
                  x="273"
                  y="178"
                  fill="#f04466"
                  fontSize="10"
                  fontWeight="bold"
                >
                  gold nucleus, +79e
                </text>

                <text
                  x="300"
                  y="240"
                  fill="#8290b9"
                  fontSize="10"
                >
                  1 fm = 10⁻¹⁵ m
                </text>
              </svg>
            </div> */}


           
<div className={`live-atom-panel lab-visual lab-visual-${index}`}>
  <div className="live-particle-label">
    {index === 0 && "Hydrogen energy levels"}
    {index === 1 && "Bohr atomic model"}
    {index === 2 && "Light → electrons"}
    {index === 3 && "DNA double helix"}
    {index === 4 && "α particles →"}
  </div>

  {/* 1. Hydrogen spectrum */}
  {index === 0 && (
    <svg className="live-science-svg" viewBox="0 0 420 250">
      {[45, 90, 135, 180].map((y) => (
        <line key={y} x1="65" y1={y} x2="355" y2={y}
          stroke="#315cf5" strokeWidth="2" />
      ))}
      <g className="lab-electron">
        <circle cx="110" cy="45" r="8" fill="#ffb000" />
        <path d="M110 45 L110 180" stroke="#f04466"
          strokeWidth="3" strokeDasharray="5 5" />
        <path d="M102 165 L110 180 L118 165" fill="none"
          stroke="#f04466" strokeWidth="3" />
      </g>
      <text x="20" y="49" fill="#263b78" fontSize="13">n = 4</text>
      <text x="20" y="94" fill="#263b78" fontSize="13">n = 3</text>
      <text x="20" y="139" fill="#263b78" fontSize="13">n = 2</text>
      <text x="20" y="184" fill="#263b78" fontSize="13">n = 1</text>
      <text x="130" y="220" fill="#f04466" fontSize="15">
        Photon emitted
      </text>
    </svg>
  )}

  {/* 2. Bohr atomic model */}
  {index === 1 && (
    <svg className="live-science-svg" viewBox="0 0 420 250">
      {[35, 65, 95].map((r) => (
        <circle key={r} cx="210" cy="125" r={r}
          fill="none" stroke="#315cf5" strokeWidth="2"
          strokeDasharray="5 4" />
      ))}
      <circle cx="210" cy="125" r="17" fill="#ff8b9d" />
      <circle cx="205" cy="120" r="6" fill="#f04466" />
      <circle cx="217" cy="130" r="6" fill="#315cf5" />
      <g className="lab-orbit-electron">
        <circle cx="305" cy="125" r="8" fill="#ffb000" />
      </g>
      <text x="20" y="30" fill="#263b78" fontSize="14">
        Electrons occupy energy levels
      </text>
    </svg>
  )}

  {/* 3. Photoelectric effect */}
  {index === 2 && (
    <svg className="live-science-svg" viewBox="0 0 420 250">
      <rect x="45" y="145" width="330" height="48" rx="8"
        fill="#315cf5" opacity=".18" />
      <path d="M45 145 H375" stroke="#315cf5" strokeWidth="5" />
      {[85, 145, 205, 265, 325].map((x) => (
        <g key={x}>
          <path d={`M${x} 35 L${x} 115`}
            stroke="#ffb000" strokeWidth="3" strokeDasharray="6 5" />
          <path d={`M${x - 7} 105 L${x} 118 L${x + 7} 105`}
            fill="none" stroke="#ffb000" strokeWidth="3" />
          <circle cx={x} cy="130" r="6" fill="#ffb000" />
        </g>
      ))}
      <g className="lab-photo-electron">
        <circle cx="160" cy="95" r="7" fill="#f04466" />
        <path d="M160 95 L160 50" stroke="#f04466"
          strokeWidth="3" strokeDasharray="4 4" />
      </g>
      <text x="100" y="220" fill="#263b78" fontSize="15">
        Electrons released by light
      </text>
    </svg>
  )}

  {/* 4. DNA structure */}
  {index === 3 && (
    <svg className="live-science-svg" viewBox="0 0 420 250">
      <path
        d={Array.from({ length: 21 }, (_, i) =>
          `${i === 0 ? "M" : "L"} ${115 + Math.sin(i * 0.55) * 60} ${15 + i * 11}`
        ).join(" ")}
        fill="none" stroke="#315cf5" strokeWidth="5"
      />
      <path
        d={Array.from({ length: 21 }, (_, i) =>
          `${i === 0 ? "M" : "L"} ${235 - Math.sin(i * 0.55) * 60} ${15 + i * 11}`
        ).join(" ")}
        fill="none" stroke="#f04466" strokeWidth="5"
      />
      {Array.from({ length: 11 }, (_, i) => {
        const y = 20 + i * 20;
        const x1 = 115 + Math.sin((i * 2) * 0.55) * 60;
        const x2 = 235 - Math.sin((i * 2) * 0.55) * 60;
        return (
          <line key={i} x1={x1} y1={y} x2={x2} y2={y}
            stroke="#ffb000" strokeWidth="3" />
        );
      })}
      <text x="290" y="125" fill="#263b78" fontSize="15">
        DNA double helix
      </text>
    </svg>
  )}

  {/* 5. Rutherford gold foil */}
  {index === 4 && (
    <>
      {Array.from({ length: 28 }, (_, i) => (
        <span
          key={i}
          className="live-particle"
          style={{
            left: `${(i * 37 + 7) % 96}%`,
            top: `${(i * 23 + 3) % 94}%`,
            animationDelay: `${(i % 8) * -0.25}s`,
          }}
        />
      ))}
      <svg className="live-science-svg" viewBox="0 0 420 250">
        <path
          d={`M0 95 L170 95 Q245 95 280 65 T${330 + impact * 0.4} 5`}
          fill="none" stroke="#315cf5" strokeWidth="3"
        />
        <path d="M0 95 L180 95 Q240 95 285 75"
          fill="none" stroke="#315cf5" strokeWidth="1.5"
          strokeDasharray="5 5" opacity=".5" />
        <circle cx="260" cy="130" r="24" fill="none"
          stroke="#ff8b9d" strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="260" cy="130" r="13" fill="#ffb6c2" opacity=".4" />
        <circle cx="260" cy="130" r="6" fill="#f04466" />
        <text x="273" y="178" fill="#f04466" fontSize="10">
          gold nucleus, +79e
        </text>
        <text x="300" y="240" fill="#8290b9" fontSize="10">
          1 fm = 10⁻¹⁵ m
        </text>
      </svg>
    </>
  )}
</div>




            {/* LAB CONTROLS */}
            <div className="live-lab-controls">
              <div className="live-metric">
                <span>Head-on closest approach</span>
                <strong>{distance} fm</strong>
              </div>

              <div className="live-metric">
                <span>Blue path turns by</span>
                <strong>{angle}°</strong>
              </div>

              <div className="live-metric">
                <span>Blue path gets within</span>
                <strong>{(distance * 2).toFixed(1)} fm</strong>
              </div>

              <div className="live-metric">
                <span>Alpha energy</span>
                <strong>{(energy / 10).toFixed(1)} MeV</strong>
              </div>

              <input
                className="live-slider"
                aria-label="Alpha energy"
                type="range"
                min="10"
                max="100"
                value={energy}
                onChange={(e) =>
                  setEnergy(Number(e.target.value))
                }
                style={{
                  "--slider-progress": `${energy}%`,
                }}
              />

              <div className="live-metric live-impact-label">
                <span>Aim (impact parameter b)</span>
                <strong>{impact} fm</strong>
              </div>

              <input
                className="live-slider"
                aria-label="Impact parameter"
                type="range"
                min="10"
                max="90"
                value={impact}
                onChange={(e) =>
                  setImpact(Number(e.target.value))
                }
                style={{
                  "--slider-progress": `${((impact - 10) / 80) * 100}%`,
                }}
              />

              <button
                className="live-play-button"
                onClick={() =>
                  setPlaying((value) => !value)
                }
              >
                {playing ? "Pause" : "Play"}
                <span>{playing ? "Ⅱ" : "▶"}</span>
              </button>
            </div>
          </div>

          <div className="live-lab-footer">
            <div className="live-formula">
              tan <sup>θ</sup>/<sub>2</sub>
              <span>=</span>
              <sup>d</sup>/<sub>2b</sub>
            </div>

            <p>{lab.description}</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-wrap">
          <div className="trust-item">
            <span className="trust-avatars">

       <span className="trust-avatars">
    <img src={student1} alt="Student" />
    <img src={student2} alt="Student" /> 
    <img src={student3} alt="Student" />
  </span>

            </span>
            <span>
              <b>2K+</b> happy students
            </span>
          </div>

          <div className="trust-item">
            <span className="trust-stars">★★★★★</span>
            <span>
              <b>4.8/5</b> rating
            </span>
          </div>

          <div className="trust-item">
            <span className="trust-icon">♙</span>
            Verified expert mentors
          </div>

          <div className="trust-item">
            <span className="trust-icon">✓</span>
            A safe place to learn
          </div>
        </div>
      </section>

      {/* MOVING SUBJECT TEXT */}
      <div className="trust-marquee">
        <div className="trust-marquee-track">
          {[1, 2].map((group) => (
            <div className="trust-marquee-group" key={group}>
              {[
                "CBSE",
                "ICSE",
                "IB",
                "State Boards",
                "Classes 6–12",
                "Coding",
                "Data Science",
                "Design",
                "Communication",
              ].map((item) => (
                <span
                  className="trust-marquee-item"
                  key={item}
                >
                  <b>★</b> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHY LIVEMENTORHUB SECTION */}
      <section className="why-section">
        <div className="why-left">
          <div className="why-label">
            <span>★</span> 01&nbsp; Why LiveMentorHub?
          </div>

          <h1>
            Learning is
            <br />
            better when
            <br />
            you're <span>not</span>
            <br />
            <span>doing it alone.</span>
          </h1>

          <p>
            We bring the structure, people and tools around a
            learner, so learning becomes clearer, more engaging
            and easier to act on.
          </p>

          <button
            className="why-button"
            onClick={() => {
              window.location.hash = "why";
            }}
          >
            Explore Why LiveMentorHub
          </button>
        </div>

        <div className="why-right">
          {features.map((feature) => (
            <article
              className="why-card"
              key={feature.title}
            >
              <div className="why-card-text">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>

              <div className={`why-icon ${feature.color}`}>
                {feature.icon}
              </div>
            </article>
          ))}
        </div>
      </section>

      
{/* HOW LIVEMENTORHUB WORKS SECTION */}
<section className="journey-section">
  <div className="journey-container">
    <div className="journey-label">
      <span>★</span> 02&nbsp; How LiveMentorHub works
    </div>

    <div className="journey-heading-row">
      <div>
        <h2>
          A connected <span>learning journey.</span>
        </h2>

        <p>
          Learning and live classes work together: choose what you need,
          <br className="journey-desktop-break" />
          learn, practise, ask questions and keep progressing.
        </p>
      </div>

      <button
        className="journey-learn-button"
        onClick={() => {
          window.location.hash = "how-it-works";
        }}
      >
        Learn More <span>➜</span>
      </button>
    </div>

    <div className="journey-cards">
      <article className="journey-card">
        <div className="journey-number yellow">01</div>
        <h3>Find or Register</h3>
        <p>
          Students, parents, teachers and organisations can create an
          account and get started.
        </p>
      </article>

      <article className="journey-card">
        <div className="journey-number cyan">02</div>
        <h3>Choose What You Need</h3>
        <p>
          Pick the learning experience that fits your goal and schedule.
        </p>
      </article>

      <article className="journey-card">
        <div className="journey-number pink">03</div>
        <h3>Learn Live</h3>
        <p>
          Join interactive live classes with HD video, live chat and
          real-time questions.
        </p>
      </article>

      <article className="journey-card">
        <div className="journey-number white">04</div>
        <h3>Never Miss a Class</h3>
        <p>
          Keep learning after class with recordings, notes, assignments
          and practice resources.
        </p>
      </article>
    </div>
  </div>
</section>


{/* LEARNING PATHS SECTION */}
<section className="paths-section">
  <div className="paths-container">
    <div className="paths-label">
      <span>★</span> 03&nbsp; Choose your path
    </div>

    <div className="paths-heading-row">
      <div>
        <h2>
          Learning paths for <span>every goal.</span>
        </h2>

        <p>
          Whether you're a school student, building skills or looking for
          <br className="paths-desktop-break" />
          personal mentorship — choose a path designed around what you
          <br className="paths-desktop-break" />
          want to achieve.
        </p>
      </div>

      <button
        className="paths-explore-link"
        onClick={() => {
          window.location.hash = "learning";
        }}
      >
        Explore Learning <span>➜</span>
      </button>
    </div>

    <div className="paths-grid">
      {/* ACADEMICS */}
      <article className="path-card academics-card">
        <div className="path-icon cyan-icon">▤</div>
        <div className="path-decoration">▮</div>

        <h3>Academics</h3>
        <small>Classes 6–12</small>

        <ul>
          <li>CBSE</li>
          <li>ICSE</li>
          <li>State Boards</li>
        </ul>

        <button
          className="path-action"
          onClick={() => {
            window.location.hash = "learning";
          }}
        >
          Explore Academics <span>➜</span>
        </button>
      </article>

      {/* SKILLS AND CAREERS */}
      <article className="path-card skills-card">
        <div className="path-icon yellow-icon">▣</div>
        <div className="path-decoration">▮▮</div>

        <h3>Skills &amp; Careers</h3>
        <small>Future-ready skills</small>

        <ul>
          <li>Coding</li>
          <li>Data Science</li>
          <li>Design</li>
          <li>Communication</li>
        </ul>

        <button
          className="path-action"
          onClick={() => {
            window.location.hash = "learning";
          }}
        >
          Explore Skills <span>➜</span>
        </button>
      </article>

      {/* MENTORSHIP */}
      <article className="path-card mentorship-card">
        <div className="path-icon yellow-icon">♣</div>
        <div className="path-decoration">▮▮▮</div>

        <h3>Mentorship<br />Programs</h3>
        <small>Personal guidance</small>

        <ul>
          <li>1:1 Mentoring</li>
          <li>Career Guidance</li>
        </ul>

        <button
          className="path-action"
          onClick={() => {
            window.location.hash = "parent";
          }}
        >
          Explore Mentorship <span>➜</span>
        </button>
      </article>
    </div>
  </div>
</section>


{/* MENTORS SECTION */}
<section className="mentors-section">
  <div className="mentors-container">
    <div className="mentors-label">
      <span>★</span> 04&nbsp; Meet our mentors
    </div>

    <div className="mentors-heading-row">
      <div>
        <h2>
          Learn from <span>the best.</span>
        </h2>

        <p>
          Experienced mentors and educators who help learners
          <br className="mentors-desktop-break" />
          understand, improve and achieve more.
        </p>
      </div>

      <button
        className="mentors-view-all"
        onClick={() => {
          window.location.hash = "teachers";
        }}
      >
        View All Mentors <span>➜</span>
      </button>
    </div>

    <div className="mentors-grid">
      <article className="mentor-card">
        <div className="mentor-art mentor-blue">
          <span className="mentor-subject">ϟ Physics</span>
          <div className="mentor-cloud">PS</div>
        </div>
        <h3>Ms. Priya Sharma</h3>
        <p>Physics Expert</p>
        <div className="mentor-meta">
          <span>⭐ 4.9</span>
          <span className="mentor-verified">✓ Verified</span>
        </div>
      </article>

      <article className="mentor-card">
        <div className="mentor-art mentor-yellow">
          <span className="mentor-subject">∑ Maths</span>
          <div className="mentor-cloud">RV</div>
        </div>
        <h3>Mr. Rahul Verma</h3>
        <p>Maths Expert</p>
        <div className="mentor-meta">
          <span>⭐ 4.8</span>
          <span className="mentor-verified">✓ Verified</span>
        </div>
      </article>

      <article className="mentor-card">
        <div className="mentor-art mentor-pink">
          <span className="mentor-subject">⚗ Chemistry</span>
          <div className="mentor-cloud">SI</div>
        </div>
        <h3>Ms. Sneha Iyer</h3>
        <p>Chemistry Expert</p>
        <div className="mentor-meta">
          <span>⭐ 4.9</span>
          <span className="mentor-verified">✓ Verified</span>
        </div>
      </article>

      <article className="mentor-card">
        <div className="mentor-art mentor-navy">
          <span className="mentor-subject">‹› Coding</span>
          <div className="mentor-cloud">AM</div>
        </div>
        <h3>Mr. Arjun Mehta</h3>
        <p>Coding Expert</p>
        <div className="mentor-meta">
          <span>⭐ 4.8</span>
          <span className="mentor-verified">✓ Verified</span>
        </div>
      </article>

      <article className="mentor-card">
        <div className="mentor-art mentor-cyan">
          <span className="mentor-subject">▣ English</span>
          <div className="mentor-cloud">KR</div>
        </div>
        <h3>Ms. Kavya Reddy</h3>
        <p>English Expert</p>
        <div className="mentor-meta">
          <span>⭐ 4.9</span>
          <span className="mentor-verified">✓ Verified</span>
        </div>
      </article>
    </div>
  </div>
</section>


{/* ABOUT LIVEMENTORHUB SECTION */}
<section className="about-growth-section">
  <div className="about-growth-container">
    <div className="about-growth-label">
      <span>★</span> 05&nbsp; About LiveMentorHub
    </div>

    <h2>
      More than a platform. <span>A partner<br className="growth-break" />
      in your growth.</span>
    </h2>

    <div className="about-growth-content">
      <div className="about-growth-spacer"></div>

      <div className="about-growth-description">
        <p>
          LiveMentorHub is an Indian education and mentorship
          platform established in 2026 with a simple belief:
          learning becomes more powerful when great content is
          combined with great guidance. We bring together
          structured learning, live classes, expert mentorship,
          doubt solving and progress tracking in one connected
          experience — helping learners know not only what to
          learn, but also who can help and what to do next.
        </p>

        <button
          className="about-growth-button"
          onClick={() => {
            window.location.hash = "about";
          }}
        >
          Know Our Story
        </button>
      </div>
    </div>

    <div className="about-growth-cards">
      <article className="growth-feature mentors-feature">
        <h3>Mentors</h3>
        <p>
          Expert guidance
          <br />
          Verified professionals
        </p>
      </article>

      <article className="growth-feature classes-feature">
        <h3>Live Classes</h3>
        <p>
          Interactive learning
          <br />
          Real-time sessions
        </p>
      </article>

      <article className="growth-feature learners-feature">
        <h3>Learners</h3>
        <p>
          Built around students
          <br />
          Progress-focused
        </p>
      </article>

      <article className="growth-feature subjects-feature">
        <h3>Subjects</h3>
        <p>
          Academic + skills
          <br />
          Growing catalogue
        </p>
      </article>
    </div>
  </div>
</section>



{/* STUDENT TESTIMONIALS SECTION */}
<section className="testimonial-section">
  <div className="testimonial-container">
    <div className="testimonial-label">
      <span>★</span> 06&nbsp; What our students say
    </div>

    <div className="testimonial-heading">
      <h2>
        In their <span>own words.</span>
      </h2>

      <a href="#resources" className="testimonial-link">
        Read Learner Stories&nbsp; →
      </a>
    </div>

    <div className="testimonial-grid">
      {/* FEATURED TESTIMONIAL */}
      <article className="testimonial-featured">
        <div className="testimonial-quote-mark">“</div>

        <h3>
          Having a mentor means I don't feel stuck for long.
          The guidance is practical and easy to follow.
        </h3>

        <div className="testimonial-author">
          <div className="testimonial-avatar avatar-yellow">
            RK
          </div>

          <div>
            <strong>Rohan K.</strong>
            <small>JEE Aspirant</small>
          </div>
        </div>

        <div className="testimonial-sun"></div>
      </article>

      {/* RIGHT TESTIMONIALS */}
      <div className="testimonial-side">
        <article className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>

          <p>
            “The live classes are designed to make questions
            easier to ask and concepts easier to understand.”
          </p>

          <div className="testimonial-author">
            <div className="testimonial-avatar avatar-blue">
              AR
            </div>

            <div>
              <strong>Ananya R.</strong>
              <small>Class 10 / CBSE</small>
            </div>
          </div>
        </article>

        <article className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>

          <p>
            “It is not just about studying; it is about building
            confidence and learning how to improve.”
          </p>

          <div className="testimonial-author">
            <div className="testimonial-avatar avatar-pink">
              IS
            </div>

            <div>
              <strong>Ishita S.</strong>
              <small>Class 12 / NEET</small>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>


{/* FOR SCHOOLS SECTION */}
<section className="schools-hero">
  <div className="schools-blue-shape"></div>

  <div className="schools-content">
    <div className="schools-label">
      <span>★</span> 07&nbsp; For schools
    </div>

    <h2>
      Strengthen
      <br />
      learning
      <br />
      outcomes <span>inside</span>
      <br />
      <span>and outside</span>
      <br />s
      <span>the classroom.</span>
    </h2>

    <div className="schools-bottom">
      <div className="schools-description">
        <p>
          Partner with LiveMentorHub for academic support,
          workshops, mentorship, career guidance and learner
          engagement.
        </p>

        <button
          className="schools-partner-button"
          onClick={() => {
            window.location.hash = "connect";
          }}
        >
          Partner With Us <span>→</span>
        </button>
      </div>

      <div className="schools-tags">
        <a href="#learning" className="school-tag tag-yellow">
          Academic Support ↗
        </a>
        <a href="#resources" className="school-tag tag-purple">
          Workshops ↗
        </a>
        <a href="#parent" className="school-tag tag-pink">
          Mentorship ↗
        </a>
        <a href="#learning" className="school-tag tag-purple">
          Career Guidance ↗
        </a>
        <a href="#learning" className="school-tag tag-cyan">
          Learner Engagement ↗
        </a>
      </div>
    </div>
  </div>

  <div className="schools-yellow-star">★</div>
</section>


{/* RESOURCES SECTION */}

{/* LEARN RESOURCES SECTION */}
<section className="learn-hero">
  <div className="learn-container">

    {/* LEFT SIDE */}
    <div className="learn-left">
      <div className="learn-label">
        <span>★</span>
        <span>08&nbsp; Learn &amp; grow with our resources</span>
      </div>

      <h2>
        Everything
        <br />
        you need to
        <br />
        <span>learn, practise</span>
        <br />
        <span>and grow.</span>
      </h2>

      <button
        type="button"
        className="learn-view-button"
        onClick={() => {
          window.location.hash = "resources";
        }}
      >
        View All Resources
      </button>
    </div>

    {/* RIGHT SIDE CARDS */}
    <div className="learn-right">

      {/* STUDY MATERIALS */}
      <a href="#resources" className="learn-item">
        <span className="learn-icon learn-cyan">▤</span>

        <span className="learn-text">
          <strong>Study Materials</strong>
          <small>Notes, PDFs &amp; more</small>
        </span>

        <span className="learn-arrow">→</span>
      </a>

      {/* EXAM TIPS */}
      <a href="#resources" className="learn-item">
        <span className="learn-icon learn-yellow">♧</span>

        <span className="learn-text">
          <strong>Exam Tips</strong>
          <small>Prepare smarter</small>
        </span>

        <span className="learn-arrow">→</span>
      </a>

      {/* CAREER GUIDANCE */}
      <a href="#resources" className="learn-item">
        <span className="learn-icon learn-blue">◎</span>

        <span className="learn-text">
          <strong>Career Guidance</strong>
          <small>Explore opportunities</small>
        </span>

        <span className="learn-arrow">→</span>
      </a>

      {/* BLOGS */}
      <a href="#resources" className="learn-item">
        <span className="learn-icon learn-cyan">☷</span>

        <span className="learn-text">
          <strong>Blogs</strong>
          <small>Insights &amp; updates</small>
        </span>

        <span className="learn-arrow">→</span>
      </a>

    </div>
  </div>
</section>

 
{/* LEARNING ON THE GO SECTION */}
<section className="app-hero">
  <div className="app-container">
    <div className="app-content">
      <div className="app-label">
        <span>★</span> 09&nbsp; Learning on the go
      </div>

      <h2>
        Your classroom.
        <br />
        <span>Wherever you go.</span>
      </h2>

      <p>
        Access live classes, doubt solving and more on the
        LiveMentorHub app.
      </p>

      <div className="app-buttons">
        <a href="#get-started" className="app-download">
          <span className="app-store-icon">▣</span>
          <span>
            <small>COMING SOON · GET IT ON</small>
            <strong>Google Play</strong>
          </span>
        </a>

        <a href="#get-started" className="app-download">
          <span className="app-store-icon">▯</span>
          <span>
            <small>COMING SOON · DOWNLOAD ON THE</small>
            <strong>App Store</strong>
          </span>
        </a>
      </div>
    </div>

    <div className="app-visual">
      <div className="app-blue-circle"></div>

      <div className="app-phone">
        <div className="app-phone-notch"></div>

        <div className="app-phone-screen">
          <h3>Today's Schedule</h3>

          <div className="app-live-card">
            <span className="app-live-badge">● LIVE</span>
            <strong>Physics</strong>
            <small>10:30 AM – 11:30 AM</small>

            <svg
              className="app-wave"
              viewBox="0 0 180 45"
              aria-hidden="true"
            >
              <path
                d="M2 25 C25 -2, 40 48, 65 25 S105 2, 125 25 S155 45, 178 23"
                fill="none"
                stroke="#ffb511"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="app-schedule-card">
            <strong>12:00 PM · Mathematics</strong>
            <small>Live class</small>
          </div>

          <div className="app-schedule-card">
            <strong>02:00 PM · Chemistry</strong>
            <small>Live class</small>
          </div>

          <div className="app-progress-card">
            <strong>Progress</strong>
            <small>Track your learning journey</small>
            <div className="app-progress-track">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="schools-section">
      <div className="schools-blue-shape"></div>
      <div className="schools-yellow-star">★</div>

      <div className="schools-content">
        <div className="schools-label">
          <span>★</span> 10&nbsp; For schools &amp; institutions
        </div>

        <h1>
          Build a stronger
          <br />
          <span>learning ecosystem.</span>
        </h1>

        <p>
          Bring mentorship, workshops, academic support and learner
          <br className="schools-desktop-break" />
          engagement to your institution.
        </p>

        <div className="schools-buttons">
          <button
            className="schools-primary-btn"
            onClick={() => {
              window.location.hash = "connect";
            }}
          >
            Partner With Us <span>→</span>
          </button>

          <button
            className="schools-secondary-btn"
            onClick={() => {
              window.location.hash = "connect";
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </section>


    </main>
  );
}

export default Live;