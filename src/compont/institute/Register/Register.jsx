
import "./Register.css";

function RegisterInstitute() {
  return (
    <main className="register-page">
      <div className="register-dots"></div>

      <section className="register-layout">
        {/* Left Section */}
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
            <div><span>♟</span> Teachers &amp; learners</div>
            <div><span>▦</span> Reports</div>
          </div>
        </div>

        {/* Registration Card */}
        <div className="register-card">
          <div className="register-tabs">
            <button
              type="button"
              onClick={() => {
                window.location.hash = "student/login";
              }}
            >
              ♟ Student
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.hash = "teacher/login";
              }}
            >
              ▣ Teacher
            </button>

            <button type="button" className="active">
              ▦ Institute
            </button>
          </div>

          <h2>Register Your Institute</h2>

          <p className="register-subtitle">
            Create an institute account to partner with LiveMentorHub.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <h3>INSTITUTE DETAILS</h3>

            <label htmlFor="institute-name">
              Institute name <b>*</b>
            </label>
            <input
              id="institute-name"
              type="text"
              placeholder="Enter institute name"
              required
            />

            <label htmlFor="official-email">
              Official email <b>*</b>
            </label>
            <input
              id="official-email"
              type="email"
              placeholder="Enter official email"
              required
            />

            <label>Exam categories offered <b>*</b></label>

            <div className="exam-categories">
              <label>
                <input type="checkbox" name="category" value="school" />
                School (Classes 6–12)
              </label>
              <label>
                <input type="checkbox" name="category" value="jee" />
                JEE
              </label>
              <label>
                <input type="checkbox" name="category" value="neet" />
                NEET
              </label>
              <label>
                <input type="checkbox" name="category" value="upsc" />
                UPSC
              </label>
              <label>
                <input type="checkbox" name="category" value="skills" />
                Skills &amp; careers
              </label>
            </div>

            <div className="register-divider"></div>

            <h3>ADDRESS DETAILS</h3>

            <div className="register-form-grid">
              <div>
                <label htmlFor="country">
                  Country <b>*</b>
                </label>
                <select id="country" defaultValue="India" required>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="state">
                  State <b>*</b>
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="Enter state"
                  required
                />
              </div>

              <div>
                <label htmlFor="city">
                  City <b>*</b>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter city"
                  required
                />
              </div>

              <div>
                <label htmlFor="locality">
                  Area / locality <b>*</b>
                </label>
                <input
                  id="locality"
                  type="text"
                  placeholder="Enter locality"
                  required
                />
              </div>
            </div>

            <div className="register-divider"></div>

            <h3>DOCUMENTS</h3>

            <label htmlFor="documents">Upload documents</label>
            <input
              id="documents"
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
              By creating an account you agree to our{" "}
              <a href="#terms">Terms</a> and{" "}
              <a href="#privacy">Privacy Policy</a>.
            </p>

            <div className="register-signin">
              Already have an account?{" "}
              <a href="#institute/login">Sign in</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default RegisterInstitute;