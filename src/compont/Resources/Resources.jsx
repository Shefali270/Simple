import "./Resources.css";
import {
  NotebookPen,
  Play,
  CirclePlay,
  ClipboardList,
  Download,
  BookOpen,
  Check,
  Clock3,
  FileText,
} from "lucide-react";

function Resources() {
  return (
    <main className="resources-page">
      <div className="resources-dots" />

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

        {/* RIGHT RESOURCE CARDS */}
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
                <span>1</span><span>v</span>
                <b>+</b>
                <span>1</span><span>u</span>
                <b>=</b>
                <span>1</span><span>f</span>
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

          {/* VIDEO */}
          <div className="resource-video resource-card">
            <div className="video-cover">
              <div className="video-label">
                <Play size={13} fill="currentColor" />
                Videos
              </div>

              <div className="video-person">
                <div className="video-hair" />
                <div className="video-face">
                  <span />
                  <span />
                  <i />
                </div>
                <div className="video-body" />
                <div className="video-laptop" />
              </div>

              <div className="video-play">
                <Play size={24} fill="#3260ed" color="#3260ed" />
              </div>

              <div className="video-progress">
                <span />
              </div>
            </div>

            {/* TEST SERIES */}
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
                <span><Check size={14} /></span>
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

     
<section className="resources-category-section">
  <div className="resources-category-badge">
    <span>★</span>
    01&nbsp; Explore resources by category
  </div>

  <h2 className="resources-category-title">
    Eight ways to <span>study smarter.</span>
  </h2>

  <div className="resources-category-filters">
    <button>All</button>
    <button>Learn</button>
    <button className="active">Practice</button>
  </div>

  <div className="resources-category-grid">
    <div className="resources-category-card">
      <div className="resources-category-icon yellow">▣</div>
      <h3>Test Series</h3>
      <p>Practice with tests and quizzes to prepare smarter.</p>
    </div>

    <div className="resources-category-card">
      <div className="resources-category-icon cyan">♧</div>
      <h3>Previous Papers</h3>
      <p>Use previous year papers for realistic practice.</p>
    </div>

    <div className="resources-category-card">
      <div className="resources-category-icon cyan">☷</div>
      <h3>MCQs</h3>
      <p>Quick practice and concept checks.</p>
    </div>

    <div className="resources-category-card">
      <div className="resources-category-icon yellow">▰</div>
      <h3>Practice Papers</h3>
      <p>Structured practice for revision and preparation.</p>
    </div>
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
          {/* <GraduationCap size={27} fill="#10183f" /> */}
        </div>
        <div className="audience-content">
          <h3>For Students</h3>
          <p>
            Strengthen concepts with study materials, notes, test series
            and more.
          </p>
        </div>
        <div className="audience-arrow blue">↗</div>
      </a>

      <a href="/teacher/login" className="audience-card">
        <div className="audience-icon yellow">
          {/* <Presentation size={27} fill="#10183f" /> */}
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
          {/* <Building2 size={27} /> */}
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
          {/* <BriefcaseBusiness size={27} fill="#10183f" /> */}
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