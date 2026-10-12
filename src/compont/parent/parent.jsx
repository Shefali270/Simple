import "./parent.css";


import {
  Bell,
  Users,
  CalendarCheck,
  BookOpen,
  MessageSquare,
  ChartNoAxesCombined,
  BellRing,
} from "lucide-react";

function Parent() {
  return (
    <main className="parent-page">
      <div className="parent-dots"></div>

      <section className="parent-hero">
        <div className="parent-left">
          <div className="parent-badge">
            <span>★</span> Parent portal · Coming soon
          </div>

          <h1>
            Stay connected
            <br />
            with <span>your</span>
            <br />
            <span>child's learning.</span>
          </h1>

          <p>
            We’re building a dedicated Parent Portal to follow your child’s
            performance, attendance and mentor feedback in one place.
          </p>

          <div className="parent-buttons">
            <a className="parent-notify" href="#notify">
              Notify Me <span><Bell size={19} fill="currentColor" /></span>
            </a>

            <a className="parent-back" href="#work">
              Back to Get Started
            </a>
          </div>
        </div>

        <div className="parent-right">
          <div className="parent-photo-wrap">
            <img
              className="parent-photo"
              src="https://images.unsplash.com/photo-1587613865763-4b8b4b8c8f5b?auto=format&fit=crop&w=900&q=85"
              alt="Mother and daughter learning together"
            />
          </div>

          <div className="parent-soon">Soon</div>

          <div className="weekly-card">
            <div className="weekly-header">
              <div className="weekly-title">
                <Users size={21} color="#3260ed" fill="#3260ed" />
                <strong>Weekly summary</strong>
              </div>
              <span className="preview-pill">Preview</span>
            </div>

            <div className="weekly-row">
              <div className="weekly-icon">
                <CalendarCheck size={18} />
              </div>
              <div className="weekly-info">
                <strong>Attendance</strong>
                <span>Live classes this week</span>
              </div>
              <b>5 / 5</b>
            </div>

            <div className="weekly-row">
              <div className="weekly-icon">
                <BookOpen size={18} />
              </div>
              <div className="weekly-info">
                <strong>Maths test</strong>
                <span>Linear equations</span>
              </div>
              <b>18 / 20</b>
            </div>

            <div className="weekly-row">
              <div className="weekly-icon">
                <MessageSquare size={18} />
              </div>
              <div className="weekly-info">
                <strong>Mentor note</strong>
                <span>“Great progress with word problems.”</span>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* PARENT PORTAL CORE FEATURES */}
      <section className="parent-features">
        <div className="parent-features-container">
          <div className="parent-features-badge">
            <span>★</span> 01&nbsp; What’s coming
          </div>

          <h2>
            Parent Portal <span>core features.</span>
          </h2>

          <div className="parent-features-grid">
            <div className="parent-feature-card">
              <div className="parent-feature-icon cyan">
                <ChartNoAxesCombined size={25} />
              </div>
              <h3>Track Student<br />Performance</h3>
              <p>
                Check subject-wise test scores, quiz results and
                performance trends for your child.
              </p>
            </div>

            <div className="parent-feature-card">
              <div className="parent-feature-icon yellow">
                <CalendarCheck size={25} />
              </div>
              <h3>Attendance<br />&amp; Class Log</h3>
              <p>
                See live class attendance, participation and submitted
                homework.
              </p>
            </div>

            <div className="parent-feature-card">
              <div className="parent-feature-icon pink">
                <MessageSquare size={25} />
              </div>
              <h3>Mentor &amp;<br />Teacher Feedback</h3>
              <p>
                Receive feedback, progress reviews and advice from your
                child’s mentors.
              </p>
            </div>

            <div className="parent-feature-card">
              <div className="parent-feature-icon cyan">
                <BellRing size={25} />
              </div>
              <h3>Alerts &amp; Reports</h3>
              <p>
                Get performance summaries and test score alerts by email
                and SMS.
              </p>
            </div>
          </div>
        </div>
      </section>


            {/* NOTIFY WHEN PORTAL LAUNCHES */}
      <section className="parent-notify-section" id="notify">
        <div className="parent-notify-container">
          <div className="parent-notify-content">
            <div className="parent-notify-badge">
              <span>★</span> 02&nbsp; Be the first to know
            </div>

            <h2>
              Get notified
              <br />
              <span>when it</span>
              <br />
              <span>launches.</span>
            </h2>

            <p>
              Leave your email and we’ll let you know as soon
              <br />
              as the Parent Portal is ready.
            </p>
          </div>

          <form
            className="parent-notify-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! Your notification request has been submitted.");
            }}
          >
            <label htmlFor="parent-name">Your name</label>
            <input
              type="text"
              id="parent-name"
              name="name"
              required
            />

            <label htmlFor="parent-email">Email</label>
            <input
              type="email"
              id="parent-email"
              name="email"
              required
            />

            <button type="submit">
              Notify Me
              <span>➜</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Parent;