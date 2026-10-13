
import { useState } from "react";
import "./Resources.css";
import student from "../../assets/image/student.jpg";

import {
  NotebookPen,
  Play,
  ClipboardList,
  Download,
  BookOpen,
  Check,
  Clock3,
  FileText,
  GraduationCap,
  Warehouse,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // RESOURCE DATA
  const resourceCategories = [
    {
      title: "Study Materials",
      description:
        "Notes, PDFs and supporting materials for learning and revision.",
      type: "Learn",
      color: "cyan",
      icon: <FileText size={21} />,
    },
    {
      title: "Notes",
      description: "Organised learning notes to support concept clarity.",
      type: "Learn",
      color: "blue",
      icon: <NotebookPen size={21} />,
    },
    {
      title: "E-Books",
      description: "Digital learning resources for convenient access.",
      type: "Learn",
      color: "yellow",
      icon: <BookOpen size={21} />,
    },
    {
      title: "Videos",
      description: "Video-based explanations and learning content.",
      type: "Learn",
      color: "pink",
      icon: <Play size={21} />,
    },
    {
      title: "Test Series",
      description: "Practice with tests and quizzes to prepare smarter.",
      type: "Practice",
      color: "yellow",
      icon: <ClipboardList size={21} />,
    },
    {
      title: "Previous Papers",
      description: "Use previous year papers for realistic practice.",
      type: "Practice",
      color: "cyan",
      icon: <Download size={21} />,
    },
    {
      title: "MCQs",
      description: "Quick practice and concept checks.",
      type: "Practice",
      color: "cyan",
      icon: <Check size={21} />,
    },
    {
      title: "Practice Papers",
      description: "Structured practice for revision and preparation.",
      type: "Practice",
      color: "yellow",
      icon: <FileText size={21} />,
    },
  ];

  const filteredResources =
    selectedCategory === "All"
      ? resourceCategories
      : resourceCategories.filter(
          (resource) => resource.type === selectedCategory
        );

  return (
    <main className="resources-page">
      <div className="resources-dots" />

      {/* HERO SECTION */}
      <section className="resources-hero">
        {/* LEFT CONTENT */}
        <div className="resources-left">
          <div className="resources-badge">
            <span>★</span> Resources
          </div>

          <h1>
            Everything
            <br />
            you need to
            <br />
            <span>learn, practise</span>
            <br />
            <span>and grow.</span>
          </h1>

          <p>
            Access high-quality study materials, notes, previous year
            papers, test series, e-books, videos and more from educators
            and learning partners.
          </p>
        </div>

        {/* RIGHT RESOURCE PREVIEW */}
        <div className="resources-visual">
          {/* NOTES */}
          <div className="resource-notes resource-card">
            <div className="resource-card-heading">
              <NotebookPen size={18} />
              <strong>Notes</strong>
            </div>

            <div className="notes-paper">
              <h4>Light: Reflection and Refraction</h4>
              <p>Mirror formula</p>

              <div className="notes-formula">
                <span>1</span>
                <span>v</span>
                <b>+</b>
                <span>1</span>
                <span>u</span>
                <b>=</b>
                <span>1</span>
                <span>f</span>
              </div>

              <strong className="notes-highlight">
                Magnification m = −v/u
              </strong>

              <p>Refractive index n = c/v</p>
              <p>Power of a lens P = 1/f</p>

              <svg className="lens-diagram" viewBox="0 0 220 100">
                <line x1="12" y1="35" x2="170" y2="35" />
                <line x1="12" y1="65" x2="170" y2="65" />
                <line x1="12" y1="50" x2="180" y2="50" />
                <path d="M170 15 Q205 50 170 85" />
                <path d="M160 22 L180 50 L160 78" />
                <circle cx="170" cy="50" r="3" />
                <text x="145" y="64">F</text>
              </svg>
            </div>
          </div>

          {/* VIDEO PREVIEW */}
          <div className="resource-video resource-card">
            <div className="video-cover">
              <img
                className="resource-video-image"
                src={student}
                alt="Students learning"
              />

              <div className="video-label">
                <Play size={13} fill="currentColor" />
                Videos
              </div>

              <div className="video-play">
                <Play size={24} fill="#3260ed" color="#3260ed" />
              </div>

              <div className="video-progress">
                <span />
              </div>
            </div>

            {/* TEST SERIES PREVIEW */}
            <div className="resource-test">
              <div className="resource-card-heading test-heading">
                <ClipboardList size={19} />
                <strong>Test Series</strong>

                <span className="test-timer">
                  <Clock3 size={14} /> Q 12/30
                </span>
              </div>

              <h4>Which gas turns lime water milky?</h4>

              <div className="test-option">
                <span>A</span> Oxygen
              </div>

              <div className="test-option test-correct">
                <span>
                  <Check size={14} />
                </span>
                Carbon dioxide
              </div>

              <div className="test-option">
                <span>C</span> Nitrogen
              </div>

              <div className="test-option">
                <span>D</span> Hydrogen
              </div>
            </div>
          </div>

          {/* PREVIOUS PAPERS */}
          <div className="resource-papers resource-card">
            <div className="resource-card-heading">
              <FileText size={18} />
              <strong>Previous Papers</strong>
            </div>

            <div className="paper-row">
              <span className="paper-pdf">PDF</span>
              <div>
                <strong>Class 10 Science</strong>
                <small>2025</small>
              </div>
              <Download size={17} />
            </div>

            <div className="paper-row">
              <span className="paper-pdf">PDF</span>
              <div>
                <strong>Class 10 Science</strong>
                <small>2024</small>
              </div>
              <Download size={17} />
            </div>
          </div>

          {/* E-BOOKS */}
          <div className="resource-ebooks resource-card">
            <div className="resource-card-heading">
              <BookOpen size={19} />
              <strong>E-Books</strong>
            </div>

            <div className="books-stack">
              <div className="book book-maths">
                <span />
                <strong>Maths</strong>
              </div>

              <div className="book book-science">
                <span />
                <strong>Science</strong>
              </div>

              <div className="book book-english">
                <span />
                <strong>English</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE CATEGORY SECTION */}
      <section className="resources-category-section">
        <div className="resources-category-badge">
          <span>★</span>
          01&nbsp; Explore resources by category
        </div>

        <h2 className="resources-category-title">
          Eight ways to <span>study smarter.</span>
        </h2>

        {/* FILTER BUTTONS */}
        <div className="resources-category-filters">
          {["All", "Learn", "Practice"].map((category) => (
            <button
              type="button"
              key={category}
              className={
                selectedCategory === category ? "active" : ""
              }
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FILTERED RESOURCE CARDS */}
        <div className="resources-category-grid">
          {filteredResources.map((resource) => (
            <div
              className="resources-category-card"
              key={resource.title}
            >
              <div
                className={`resources-category-icon ${resource.color}`}
              >
                {resource.icon}
              </div>

              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES FOR EVERY LEARNER */}
      <section className="resources-audience">
        <div className="resources-audience-container">
          <div className="resources-audience-left">
            <div className="resources-audience-badge">
              <span>★</span>
              02&nbsp; Resources for every learner
            </div>

            <h2>
              Built for
              <br />
              everyone <span>in</span>
              <br />
              <span>the journey.</span>
            </h2>
          </div>

          <div className="resources-audience-list">
            <a href="/student/login" className="audience-card">
              <div className="audience-icon cyan">
                <GraduationCap size={16} />
              </div>

              <div className="audience-content">
                <h3>For Students</h3>
                <p>
                  Strengthen concepts with study materials, notes, test
                  series and more.
                </p>
              </div>

              <div className="audience-arrow blue">↗</div>
            </a>

            <a href="/teacher/login" className="audience-card">
              <div className="audience-icon yellow">
                <Users size={16} />
              </div>

              <div className="audience-content">
                <h3>For Teachers &amp; Mentors</h3>
                <p>
                  Share knowledge by contributing resources and helping
                  more learners.
                </p>
              </div>

              <div className="audience-arrow navy">→</div>
            </a>

            <a href="/institute/login" className="audience-card">
              <div className="audience-icon blue">
                <Warehouse size={16} />
              </div>

              <div className="audience-content">
                <h3>For Coaching Institutes</h3>
                <p>
                  Provide quality resources to students and build trust
                  and credibility.
                </p>
              </div>

              <div className="audience-arrow navy">→</div>
            </a>

            <a href="/jobs" className="audience-card">
              <div className="audience-icon cyan">
                <BriefcaseBusiness size={16} />
              </div>

              <div className="audience-content">
                <h3>For Job Seekers</h3>
                <p>
                  Access preparation materials, interview resources and
                  career guidance.
                </p>
              </div>

              <div className="audience-arrow navy">→</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resources;
