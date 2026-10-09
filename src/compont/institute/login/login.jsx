
import "./Institute.css";

function Institute() {
  return (
    <main className="institute-page">
      <div className="institute-dots"></div>

      <section className="institute-hero">
        <div className="institute-left">
          <div className="institute-badge">
            <span>★</span> Institute portal
          </div>

          <h1>
            Institute <span>sign in.</span>
          </h1>

          <p>
            Access your institute’s administrative portal to manage
            <br />
            courses, teachers, learners and reports.
          </p>

          <div className="institute-features">
            <div><span>▣</span> Courses</div>
            <div><span>♟</span> Teachers &amp;<br /> learners</div>
            <div><span>▦</span> Reports</div>
          </div>
        </div>

        <div className="institute-login-card">
          <div className="institute-tabs">
            <button>♟ Student</button>
            <button>▣ Teacher</button>
            <button className="selected">▦ Institute</button>
          </div>

          <h2>Institute Sign In</h2>
          <p className="login-subtitle">
            Access your institute administrative portal.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label>Email or mobile number</label>
            <input type="text" />

            <label>Password</label>
            <input type="password" />

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="institute-submit">
              Sign in to Portal <span>→</span>
            </button>
          </form>

          <div className="institute-register">
            New institute partner?
            <a href="#register-institute"> Register your institute</a>
          </div>
        </div>
      </section>

      <section className="institute-bottom-banner">
        <h2>
          Learn. Connect. <span>Grow.</span>
        </h2>
        <div className="banner-star">★</div>
      </section>
    </main>
  );
}

export default Institute;
