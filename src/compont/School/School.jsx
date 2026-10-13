
import "./School.css";
import { useRef, useState } from "react";

function School() {
  const partnerFormRef = useRef(null);
  const [formMessage, setFormMessage] = useState("");

  const scrollToPartnerForm = () => {
    partnerFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage(
      "Thank you! Your partnership request has been submitted."
    );
    e.currentTarget.reset();
  };

  return (
    <main className="school-page">
      <div className="school-dots"></div>

      {/* HERO SECTION */}
      <section className="school-hero">
        <div className="school-left">
          <div className="school-badge">
            <span>★</span>
            For schools &amp; institutions
          </div>

          <h1>
            Build a stronger
            <br />
            <span>learning</span>
            <br />
            <span>ecosystem.</span>
          </h1>

          <p>
            Bring mentorship, workshops, academic support and learner
            <br />
            engagement to your institution.
          </p>

          <div className="school-buttons">
            <button
              type="button"
              className="school-primary-btn"
              onClick={scrollToPartnerForm}
            >
              Partner With Us
              <span>→</span>
            </button>

            <button
              type="button"
              className="school-secondary-btn"
              onClick={() => {
                window.location.hash = "institute/login";
              }}
            >
              Institute Sign In
            </button>
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="school-right">
          <div className="school-training">
            <span>▣</span>
            Teacher Training
          </div>

          <div className="school-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">
                <div className="dashboard-main-icon">▦</div>

                <div>
                  <h3>Institution dashboard</h3>
                  <p>Term overview</p>
                </div>
              </div>

              <div className="sample-data">Sample data</div>
            </div>

            {/* DASHBOARD STATS */}
            <div className="dashboard-stats">
              <div className="stat-box stat-blue">
                <small>Attendance</small>
                <strong>94%</strong>
                <span>▲ 3% this term</span>
              </div>

              <div className="stat-box">
                <small>Average score</small>
                <strong>73%</strong>
                <span>▲ 6% this term</span>
              </div>

              <div className="stat-box">
                <small>Workshops</small>
                <strong>12</strong>
                <span>this term</span>
              </div>
            </div>

            {/* SCORE GRAPH */}
            <div className="score-card">
              <div className="score-heading">
                <strong>Average score by class</strong>
                <span>Classes 6–12</span>
              </div>

              <div className="score-chart">
                <div className="bar-item">
                  <div className="bar bar-6"></div>
                  <span>6</span>
                </div>

                <div className="bar-item">
                  <div className="bar bar-7"></div>
                  <span>7</span>
                </div>

                <div className="bar-item">
                  <div className="bar bar-8"></div>
                  <span>8</span>
                </div>

                <div className="bar-item">
                  <div className="bar bar-9"></div>
                  <span>9</span>
                </div>

                <div className="bar-item">
                  <div className="bar bar-10"></div>
                  <span>10</span>
                </div>

                <div className="bar-item">
                  <div className="bar bar-11"></div>
                  <span>11</span>
                </div>

                <div className="bar-item">
                  <div className="bar bar-12"></div>
                  <span>12</span>
                </div>
              </div>
            </div>

            {/* UPCOMING WORKSHOP */}
            <div className="career-workshop">
              <div className="workshop-icon">▣</div>

              <div className="workshop-text">
                <strong>Career guidance workshop</strong>
                <span>Class 11 · Thursday, 10:00</span>
              </div>

              <div className="upcoming">Upcoming</div>
            </div>
          </div>

          <div className="detailed-reports">
            ▣ &nbsp; Detailed Reports
          </div>
        </div>
      </section>

      {/* SIX FEATURES SECTION */}
      <section className="school-ways">
        <div className="school-ways-badge">
          <span>★</span>
          01 &nbsp; What we bring
        </div>

        <h2>
          Six ways we <span>work with institutions.</span>
        </h2>

        <div className="school-way-grid">
          <div className="school-way-card">
            <div className="way-icon way-cyan">▣</div>
            <h3>Academic Support</h3>
            <p>
              Structured academic support that complements classroom
              learning and helps learners strengthen understanding.
            </p>
          </div>

          <div className="school-way-card">
            <div className="way-icon way-yellow">▣</div>
            <h3>Teacher Training</h3>
            <p>
              Support teachers with new approaches, resources and
              learning experiences.
            </p>
          </div>

          <div className="school-way-card">
            <div className="way-icon way-pink">♨</div>
            <h3>Student Engagement</h3>
            <p>
              Use mentoring, live learning and activities to keep
              learners engaged.
            </p>
          </div>

          <div className="school-way-card">
            <div className="way-icon way-cyan">◉</div>
            <h3>Career Guidance</h3>
            <p>
              Help students understand pathways, skills and future
              opportunities.
            </p>
          </div>

          <div className="school-way-card">
            <div className="way-icon way-yellow">▣</div>
            <h3>Detailed Reports</h3>
            <p>
              Support progress-focused conversations with learning
              and performance information.
            </p>
          </div>

          <div className="school-way-card">
            <div className="way-icon way-pink">🚀</div>
            <h3>Workshops &amp; Mentorship</h3>
            <p>
              Bring focused workshops, mentorship programs and learner
              engagement into the institution.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP FORM SECTION */}
      <section
        className="school-partner"
        ref={partnerFormRef}
        id="partner-form"
      >
        {/* LEFT CONTENT */}
        <div className="partner-left">
          <div className="partner-badge">
            <span>★</span>
            02 &nbsp; Partner with LiveMentorHub
          </div>

          <h2>
            Let's build
            <br />
            <span>together.</span>
          </h2>

          <p>
            Tell us about your institution, learners and goals.
            <br />
            We can explore an academic support, mentorship,
            <br />
            workshop or engagement model that fits
            <br />
            your context.
          </p>

          <div className="partner-info">
            <div className="partner-info-box">
              <small>PARTNERSHIPS</small>
              <strong>connect@livementorhub.com</strong>
            </div>

            <div className="partner-info-box">
              <small>PHONE</small>
              <strong>+91 80191 67891</strong>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          className="partner-form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="partner-name">Your name *</label>
              <input
                id="partner-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="partner-role">Your role *</label>
              <input
                id="partner-role"
                name="role"
                type="text"
                placeholder="e.g. Principal"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="partner-institution">
              Institution name *
            </label>
            <input
              id="partner-institution"
              name="institution"
              type="text"
              placeholder="Enter institution name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="partner-email">Email *</label>
              <input
                id="partner-email"
                name="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="partner-phone">Phone *</label>
              <input
                id="partner-phone"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                pattern="[0-9+\-\s()]{10,20}"
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="partner-interest">Interested in *</label>
            <select
              id="partner-interest"
              name="interest"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="academic-support">
                Academic support
              </option>
              <option value="teacher-training">
                Teacher training
              </option>
              <option value="student-engagement">
                Student engagement
              </option>
              <option value="career-guidance">
                Career guidance
              </option>
              <option value="workshops-mentorship">
                Workshops &amp; mentorship
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="partner-goals">
              Tell us about your learners and goals *
            </label>
            <textarea
              id="partner-goals"
              name="goals"
              placeholder="Describe your institution and goals..."
              minLength={10}
              required
            ></textarea>
          </div>

          <button type="submit" className="partner-submit">
            Partner With Us
            <span>→</span>
          </button>

          {formMessage && (
            <p className="partner-form-message" role="status">
              {formMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default School;
