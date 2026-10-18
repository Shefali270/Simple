
import "./forget.css";

function ForgotPassword() {
  return (
    <main className="institute-page">
      <div className="institute-dots"></div>

      <section className="institute-hero">
        <div className="institute-left">
          <div className="institute-badge">
            <span>★</span> Institute portal
          </div>

          <h1>
            Forgot your
            <br />
            <span>password?</span>
          </h1>

          <p>
            Enter your institute’s official email or mobile number and we’ll
            <br />
            help you reset it.
          </p>

          <div className="institute-features">
            <div><span>▣</span> Courses</div>
            <div><span>♟</span> Teachers &amp; learners</div>
            <div><span>▦</span> Reports</div>
          </div>
        </div>

        <div className="institute-login-card forgot-card">
          <div className="institute-tabs">
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

            <button type="button" className="selected">
              ▦ Institute
            </button>
          </div>

          <h2>Reset Institute Password</h2>

          <p className="login-subtitle">
            We’ll send reset instructions to your official email or mobile.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="reset-contact">
              Official email or mobile number
            </label>

            <input
              id="reset-contact"
              type="text"
              placeholder="Enter email or mobile number"
              required
            />

            <button type="submit" className="institute-submit">
              Send Reset Link <span>→</span>
            </button>
          </form>

          <div className="institute-register">
            Remembered it?{" "}
            <a href="#institute/login">Back to sign in</a>
          </div>
        </div>
      </section>

    

    </main>
  );
}

export default ForgotPassword;
