import "./School.css";

function School() {
  return (
    <main className="school-page">

      {/* BACKGROUND DOTS */}
      <div className="school-dots"></div>

      <section className="school-hero">

        {/* ================= LEFT ================= */}
        <div className="school-left">

          <div className="school-badge">
            <span>★</span>
            For schools & institutions
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

            <button className="school-primary-btn">
              Partner With Us
              <span>→</span>
            </button>

            <button className="school-secondary-btn">
              Institute Sign In
            </button>

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="school-right">

          {/* TOP LABEL */}
          <div className="school-training">
            <span>▣</span>
            Teacher Training
          </div>


          {/* DASHBOARD */}
          <div className="school-dashboard">

            {/* HEADER */}
            <div className="dashboard-header">

              <div className="dashboard-title">
                <div className="dashboard-main-icon">
                  ▦
                </div>

                <div>
                  <h3>Institution dashboard</h3>
                  <p>Term overview</p>
                </div>
              </div>

              <div className="sample-data">
                Sample data
              </div>

            </div>


            {/* STATS */}
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


            {/* GRAPH */}
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


            {/* WORKSHOP */}
            <div className="career-workshop">

              <div className="workshop-icon">
                ▣
              </div>

              <div className="workshop-text">
                <strong>Career guidance workshop</strong>
                <span>Class 11 · Thursday, 10:00</span>
              </div>

              <div className="upcoming">
                Upcoming
              </div>

            </div>

          </div>


          {/* REPORT LABEL */}
          <div className="detailed-reports">
            ▣ &nbsp; Detailed Reports
          </div>

        </div>

      </section>
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
        Structured academic support that
        complements classroom learning and helps
        learners strengthen understanding.
      </p>
    </div>

    <div className="school-way-card">
      <div className="way-icon way-yellow">▣</div>
      <h3>Teacher Training</h3>
      <p>
        Support teachers with new approaches,
        resources and learning experiences.
      </p>
    </div>

    <div className="school-way-card">
      <div className="way-icon way-pink">♨</div>
      <h3>Student Engagement</h3>
      <p>
        Use mentoring, live learning and activities
        to keep learners engaged.
      </p>
    </div>

    <div className="school-way-card">
      <div className="way-icon way-cyan">◉</div>
      <h3>Career Guidance</h3>
      <p>
        Help students understand pathways, skills
        and future opportunities.
      </p>
    </div>

    <div className="school-way-card">
      <div className="way-icon way-yellow">▣</div>
      <h3>Detailed Reports</h3>
      <p>
        Support progress-focused conversations
        with learning and performance information.
      </p>
    </div>

    <div className="school-way-card">
      <div className="way-icon way-pink">🚀</div>
      <h3>Workshops & Mentorship</h3>
      <p>
        Bring focused workshops, mentorship
        programs and learner engagement into
        the institution.
      </p>
    </div>

  </div>

</section>

<section className="school-partner">

  {/* LEFT */}
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
  <div className="partner-form">

    <div className="form-row">

      <div className="form-group">
        <label>Your name</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Your role</label>
        <input type="text" />
      </div>

    </div>


    <div className="form-group">
      <label>Institution</label>
      <input type="text" />
    </div>


    <div className="form-row">

      <div className="form-group">
        <label>Email</label>
        <input type="email" />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input type="tel" />
      </div>

    </div>


    <div className="form-group">
      <label>Interested in</label>

      <select defaultValue="Academic support">
        <option>Academic support</option>
        <option>Teacher training</option>
        <option>Student engagement</option>
        <option>Career guidance</option>
        <option>Workshops & mentorship</option>
      </select>
    </div>


    <div className="form-group">
      <label>Tell us about your learners and goals</label>

      <textarea></textarea>
    </div>


    <button className="partner-submit">
      Partner With Us
      <span>→</span>
    </button>

  </div>

</section>
    </main>
  );
}

export default School;