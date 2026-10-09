
import "./RegisterInstitute.css";

function RegisterInstitute() {
  return (
    <main className="register-page">
      <div className="register-dots"></div>

      <section className="register-layout">
        <div className="register-left">
          <div className="register-badge">
            <span>★</span> Institute portal
          </div>

          <h1>
            Partner with
            <br />
            <span>LiveMentorHub.</span>
          </h1>

          <p>
            Register your institute to showcase your courses and
            <br />
            teachers and reach more learners.
          </p>

          <div className="register-features">
            <div><span>▣</span> Courses</div>
            <div><span>♟</span> Teachers &amp;<br /> learners</div>
            <div><span>▦</span> Reports</div>
          </div>
        </div>

        <div className="register-card">
          <div className="register-tabs">
            <button>♟ Student</button>
            <button>▣ Teacher</button>
            <button className="active">▦ Institute</button>
          </div>

          <h2>Register Your Institute</h2>
          <p className="register-subtitle">
            Create an institute account to partner with LiveMentorHub.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <h3>INSTITUTE DETAILS</h3>

            <label>Institute name <b>*</b></label>
            <input type="text" required />

            <label>Official email <b>*</b></label>
            <input type="email" required />

            <label>Exam categories offered <b>*</b></label>
            <div className="exam-categories">
              <label><input type="checkbox" /> School (Classes 6–12)</label>
              <label><input type="checkbox" /> JEE</label>
              <label><input type="checkbox" /> NEET</label>
              <label><input type="checkbox" /> UPSC</label>
              <label><input type="checkbox" /> Skills &amp; careers</label>
            </div>

            <div className="register-divider"></div>
            <h3>ADDRESS DETAILS</h3>

            <div className="register-form-grid">
              <div>
                <label>Country <b>*</b></label>
                <select defaultValue="India" required>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label>State <b>*</b></label>
                <input type="text" required />
              </div>

              <div>
                <label>City <b>*</b></label>
                <input type="text" required />
              </div>

              <div>
                <label>Area / locality <b>*</b></label>
                <input type="text" required />
              </div>
            </div>

            <div className="register-divider"></div>
            <h3>DOCUMENTS</h3>

            <label>Upload documents</label>
            <input
              className="register-file"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
            />

            <small className="register-help">
              Registration certificate or other proof of your institute
              (PDF, JPG or PNG).
            </small>

            <button type="submit" className="register-submit">
              Register Institute <span>→</span>
            </button>

            <p className="register-terms">
              By creating an account you agree to our
              <a href="#terms"> Terms</a> and
              <a href="#privacy"> Privacy Policy</a>.
            </p>

            <div className="register-signin">
              Already have an account?
              <a href="/institute/login/index.html"> Sign in</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default RegisterInstitute;
