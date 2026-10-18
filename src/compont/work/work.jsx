import { useEffect, useState } from "react";
import "./work.css";
import {
  Video, PlayCircle, BookOpen, ClipboardCheck,
  CalendarCheck, UsersRound, Compass, Wrench,
  MessageCircle, Monitor, PenTool, Hand,
  CircleHelp, RotateCcw, StickyNote, FileText,
  ClipboardList, History, Timer, Trophy,
  ChartNoAxesCombined, CalendarDays, House,
  FileBarChart, GraduationCap, Users,
  BriefcaseBusiness, Rocket, Network
} from "lucide-react";

function Work() {
const steps = [
  {
    title: "Find or Register",
    description: "",
    items: [
      ["Students", "Search coaching institutes, courses, mentors and more."],
      ["Coaching Institutes", "Register your institute and showcase your courses and teachers."],
      ["Mentors & Teachers", "Create your profile and offer your expertise."],
      ["Organizations", "Register your organization and find the right talent."]
    ]
  },
  {
    title: "Choose What You Need",
    description: "Pick the learning experience that fits your goal and schedule.",
    items: ["Live Classes", "Recorded Classes", "Study Material", "Tests & Assignments", "Attendance & Performance", "Mentorship", "Career Guidance", "Skill Development"]
  },
  {
    title: "Learn Live",
    description: "Join interactive live classes and learning features.",
    items: ["HD Video", "Live Chat", "Screen Share", "Whiteboard", "Raise Hand", "Polls", "Quizzes", "Doubt Session"]
  },
  {
    title: "Never Miss a Class",
    description: "Watch recorded sessions and access all learning resources anytime, anywhere.",
    items: ["Recordings", "Study Notes", "PDFs & PPTs", "Assignments", "Practice Papers", "Previous Year Papers"]
  },
  {
    title: "Practice & Test Yourself",
    description: "Improve your preparation with regular practice and tests.",
    items: ["Online Tests", "Mock Tests", "Rank & Scorecard", "Solutions & Analysis"]
  },
  {
    title: "Track Your Progress",
    description: "Monitor your learning journey in one dashboard.",
    items: ["Attendance", "Homework", "Test Results", "Performance", "Upcoming Classes"]
  },
  {
    title: "Connect with Teachers & Mentors",
    description: "Get guidance beyond the classroom.",
    items: ["1:1 Mentorship", "Group Sessions", "Masterclasses", "Career Guidance"]
  },
  {
    title: "Build Skills & Explore Opportunities",
    description: "Go beyond academics and prepare for your future.",
    items: ["Skill Development", "Workshops & Bootcamps", "Career Guidance", "Job Opportunities", "Industry Connections"]
  }
];

  /* =====================================================
     UPPER JOURNEY CARD ANIMATION
  ===================================================== */

  const [activeJourneyStep, setActiveJourneyStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveJourneyStep((prev) => {
        if (prev >= 8) {
          return 1;
        }

        return prev + 1;
      });
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const heroJourneySteps = [
    {
      icon: "👥",
      title: "Find or Register",
      description: "Institutes, courses and mentors",
    },

    {
      icon: "☷",
      title: "Choose What You Need",
      description: "Live, recorded, notes and tests",
    },

    {
      icon: "◉",
      title: "Learn Live",
      description: "Whiteboard, polls and raise hand",
    },

    {
      icon: "↻",
      title: "Never Miss a Class",
      description: "Recordings, notes and PDFs",
    },

    {
      icon: "▣",
      title: "Practise & Test",
      description: "Mock tests with rank and scorecard",
    },

    {
      icon: "⌁",
      title: "Track Progress",
      description: "Attendance, results and performance",
    },

    {
      icon: "♟",
      title: "Connect with Mentors",
      description: "1:1 and group sessions",
    },

    {
      icon: "🚀",
      title: "Build Skills",
      description: "Workshops, careers and opportunities",
    },
  ];

  
const chipIcons = {
  "Live Classes": Video,
  "Recorded Classes": PlayCircle,
  "Study Material": BookOpen,
  "Tests & Assignments": ClipboardCheck,
  "Attendance & Performance": CalendarCheck,
  "Mentorship": UsersRound,
  "Career Guidance": Compass,
  "Skill Development": Wrench,
  "HD Video": Video,
  "Live Chat": MessageCircle,
  "Screen Share": Monitor,
  "Whiteboard": PenTool,
  "Raise Hand": Hand,
  "Polls": ChartNoAxesCombined,
  "Quizzes": ClipboardCheck,
  "Doubt Session": CircleHelp,
  "Recordings": RotateCcw,
  "Study Notes": StickyNote,
  "PDFs & PPTs": FileText,
  "Assignments": ClipboardList,
  "Practice Papers": FileText,
  "Previous Year Papers": History,
  "Online Tests": ClipboardCheck,
  "Mock Tests": Timer,
  "Rank & Scorecard": Trophy,
  "Solutions & Analysis": ChartNoAxesCombined,
  "Attendance": CalendarCheck,
  "Homework": House,
  "Test Results": FileBarChart,
  "Performance": ChartNoAxesCombined,
  "Upcoming Classes": CalendarDays,
  "1:1 Mentorship": GraduationCap,
  "Group Sessions": Users,
  "Masterclasses": GraduationCap,
  "Workshops & Bootcamps": Rocket,
  "Job Opportunities": BriefcaseBusiness,
  "Industry Connections": Network
};


  return (
    <main className="work-page">
      {/* =====================================================
          UPPER HERO
      ===================================================== */}
      <section className="work-hero">

        {/* LEFT SIDE */}

        <div className="work-hero-content">

          <div className="hero-badge">
            <span>★</span>
            How LiveMentorHub works
          </div>

          <h1>
            One learning
            <br />
            journey. <span>Every</span>
            <br />
            <span>next step</span>
            <br />
            <span>connected.</span>
          </h1>

          <p>
            From registration to skills and opportunities,
            LiveMentorHub brings the entire learning experience
            into one connected platform.
          </p>

          <div className="work-buttons">
<button
  className="work-primary"
  onClick={() => {
    window.location.hash = "get-started";
  }}
>
  Get Started
  <span>→</span>
</button>

<button
  className="work-secondary"
  onClick={() => {
    window.location.hash = "learning";
  }}
>
  See the Journey
</button>
          </div>
        </div>
        {/* =====================================================
            RIGHT SIDE JOURNEY CARD
        ===================================================== */}

        <div className="journey-card">

          <div className="journey-header">

            <div className="journey-title">

              <div className="journey-logo">
                ↕
              </div>
              <div>
                <h2>Your learning journey</h2>
                <p>Every step in one place</p>
              </div>

            </div>
            <div className="step-count">
              Step {activeJourneyStep} of 8
            </div>
          </div>
          {/* =================================================
              ALL 8 STEPS STAY IN PLACE
          ================================================= */}

          <div className="steps">

            {heroJourneySteps.map((step, index) => {

              const stepNumber = index + 1;

              const isCurrent =
                stepNumber === activeJourneyStep;

              const isCompleted =
                stepNumber < activeJourneyStep;

              return (
                <div
                  key={stepNumber}
                  className={`step ${
                    isCurrent ? "step-active" : ""
                  } ${
                    isCompleted ? "step-completed" : ""
                  }`}
                >
                  <div
                    className={`step-icon ${
                      isCurrent
                        ? "icon-current"
                        : isCompleted
                        ? "icon-completed"
                        : "icon-pending"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="step-info">
                    <h3>
                      {step.title}
                    </h3>
                    <p>
                      {step.description}
                    </p>

                  </div>
                  {isCompleted && (
                    <span className="check">
                      ✓
                    </span>
                  )}
                  {isCurrent && (
                    <span className="now">
                      Now
                    </span>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* =====================================================
          YAHAN SE TUMHARA PURANA LOWER SECTION SAME RAHEGA
          01 - 08
      ===================================================== */}
    <section className="how-section">
      <div className="how-heading">
        <span className="how-label">⭐ 01 The LiveMentorHub journey</span>
        <h1>
          How LiveMentorHub <span>works.</span>
        </h1>
        <p>
          Every learner, mentor and institution has a clear next step —
          with the tools to keep learning moving.
        </p>
      </div>

      <div className="journey">
        {steps.map((step, index) => (
          <article
            className="jstep"
            id={`step-${index + 1}`}
            key={step.title}
          >
            <span className={`step-number number-${index + 1}`}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="step-info">
              <h3>{step.title}</h3>
              {step.description && <p>{step.description}</p>}
            </div>

            <div className={index === 0 ? "sub" : "chips"}>
              {step.items.map((item) =>
                index === 0 ? (
                  <div className="sub-card" key={item[0]}>
                    <b>{item[0]}</b>
                    <p>{item[1]}</p>
                  </div>
                ) : (
                  <span className="chip" key={item}>
                    {(() => {
                      const Icon = chipIcons[item] || BookOpen;
                      return (
                        <Icon
                          className="chip-icon"
                          size={15}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      );
                    })()}
                    <span>{item}</span>
                  </span>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </section>


{/*=========3to 3 box  */}
<section className="dashboard-section">
  <div className="dashboard-wrapper">

    <div className="dashboard-badge">
      <span className="dashboard-star">★</span>
      <span>02</span>
      <span>One connected platform</span>
    </div>

    <h2 className="dashboard-heading">
      Different dashboards.
      <br />
      <span>One powerful platform.</span>
    </h2>

    {/* First Row */}
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <div className="dashboard-icon dashboard-cyan">🎓</div>
        <h3>Student Dashboard</h3>
        <p>Learn, attend classes, practise, track progress and achieve your goals.</p>
        <button className="dashboard-button"
         onClick={() => window.location.hash = "schools"}>
          Learn More <span>→</span>
        </button>
      </div>

      <div className="dashboard-card">
        <div className="dashboard-icon dashboard-cyan">👨‍🏫</div>
        <h3>Teacher Dashboard</h3>
        <p>Manage classes, teach students and track progress.</p>
        <button className="dashboard-button" onClick={() => window.location.hash = "teachers"}>
          Learn More <span>→</span>
        </button>
      </div>

      <div className="dashboard-card">
        <div className="dashboard-icon dashboard-cyan">🏫</div>
        <h3>Institute Dashboard</h3>
        <p>Manage your institution, teachers and students.</p>
        <button className="dashboard-button" onClick={() => window.location.hash = "schools"}>
          Learn More <span>→</span>
        </button>
      </div>
    </div>

    {/* Second Row */}
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <div className="dashboard-icon dashboard-cyan">🏢</div>
        <h3>Organization Dashboard</h3>
        <p>Find the right talent, post jobs, manage applications and recruit easily.</p>
        <button className="dashboard-button" onClick={() => window.location.hash = "content"}>
          Learn More <span>→</span>
        </button>
      </div>

      <div className="dashboard-card">
        <div className="dashboard-icon dashboard-yellow">👤</div>
        <h3>LiveMentorHub Super Admin</h3>
        <p>Monitor, manage and analyze the entire platform with complete control.</p>
        <button className="dashboard-button" onClick={() => window.location.hash = "admin"}>
          Learn More <span>→</span>
        </button>
      </div>

      <div className="dashboard-card dashboard-started">
        <div className="dashboard-icon dashboard-pink">⚡</div>
        <h3>Get Started</h3>
        <p>Choose your role and we'll guide you to the right LiveMentorHub portal.</p>
        <button className="dashboard-button" onClick={() => window.location.hash = "get-started"}>
          Learn More <span>→</span>
        </button>
      </div>
    </div>

  </div>
</section>
      {/* ====bule==== */}

<section className="ecosystem-section">
  <div className="ecosystem-wrapper">

    <div className="ecosystem-stars">
      <span>•</span>
      <span>•</span>
      <span>•</span>
      <span>•</span>
      <span>•</span>
      <span>•</span>
      <span>•</span>
      <span>•</span>
      <span>•</span>
      <span>•</span>
    </div>

    <div className="ecosystem-content">

      <div className="ecosystem-badge">
        <span className="ecosystem-star">★</span>
        <span>03</span>
        <span>Our connected ecosystem</span>
      </div>

      <h2 className="ecosystem-heading">
        Everyone in the journey,
        <span> connected.</span>
      </h2>

      <div className="ecosystem-grid">

        <div className="ecosystem-card ecosystem-yellow">
          <div className="ecosystem-icon">▦</div>
          <h3>Coaching<br />Institutes</h3>
          <p>Structured education</p>
        </div>

        <div className="ecosystem-card ecosystem-cyan">
          <div className="ecosystem-icon">▣</div>
          <h3>Teachers &<br />Mentors</h3>
          <p>Guidance & support</p>
        </div>

        <div className="ecosystem-card ecosystem-pink">
          <div className="ecosystem-icon">◆</div>
          <h3>Students &<br />Learners</h3>
          <p>Learn and improve</p>
        </div>

        <div className="ecosystem-card ecosystem-yellow">
          <div className="ecosystem-icon">⚒</div>
          <h3>Skills & Learning</h3>
          <p>Industry-ready skills</p>
        </div>

        <div className="ecosystem-card ecosystem-cyan">
          <div className="ecosystem-icon">◉</div>
          <h3>Career Guidance</h3>
          <p>Prepare for opportunities</p>
        </div>

        <div className="ecosystem-card ecosystem-pink">
          <div className="ecosystem-icon">▣</div>
          <h3>Employers &<br />Opportunities</h3>
          <p>Connect with talent</p>
        </div>

      </div>

    </div>
  </div>
</section>
    </main>
  );
}

export default Work;