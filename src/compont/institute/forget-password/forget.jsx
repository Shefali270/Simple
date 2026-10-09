
import "./Institute.css";

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
            <div><span>♟</span> Teachers &amp;<br /> learners</div>
            <div><span>▦</span> Reports</div>
          </div>
        </div>

        <div className="institute-login-card forgot-card">
          <div className="institute-tabs">
            <button>♟ Student</button>
            <button>▣ Teacher</button>
            <button className="selected">▦ Institute</button>
          </div>

          <h2>Reset Institute Password</h2>

          <p className="login-subtitle">
            We’ll send reset instructions to your official email or mobile.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label>Official email or mobile number</label>
            <input
              type="text"
              placeholder=""
              required
            />

            <button type="submit" className="institute-submit">
              Send Reset Link <span>→</span>
            </button>
          </form>

          <div className="institute-register">
            Remembered it?{" "}
            <a href="/institute/login/index.html">Back to sign in</a>
          </div>
        </div>
      </section>

      <section className="institute-bottom-banner">
        <h2>
          Learn. Connect. <span>Grow.</span>
        </h2>

        <div className="banner-star">★</div>

        <a className="banner-get-started" href="#get-started">
          Get Started <span>→</span>
        </a>
      </section>
    </main>
  );
}

export default ForgotPassword;
