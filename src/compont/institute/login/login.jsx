
import { useState } from "react";
import "./login.css";

export default function InstituteLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="insti-page">
      {/* LOGIN HERO */}
      <main className="insti-hero">
        <section className="insti-welcome">
          <span className="insti-badge">
            ⭐ Institute portal
          </span>

          <h1>
            Institute <span>sign in.</span>
          </h1>

          <p>
            Access your institute’s administrative portal to
            manage courses, teachers, learners and reports.
          </p>

          <div className="insti-features">
            <div>
              <span className="insti-feature-icon">▤</span>
              Courses
            </div>

            <div>
              <span className="insti-feature-icon">♟</span>
              Teachers &amp; learners
            </div>

            <div>
              <span className="insti-feature-icon">▥</span>
              Reports
            </div>
          </div>
        </section>

        {/* LOGIN CARD */}
        <section className="insti-login-card">
          <div className="insti-tabs">
            <button
              type="button"
              onClick={() => {
                window.location.href = "/student/login";
              }}
            >
              🎓 Student
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/teacher/login";
              }}
            >
              ▣ Teacher
            </button>

            <button
              type="button"
              className="insti-tab-active"
            >
              ▦ Institute
            </button>
          </div>

          <h2>Institute Sign In</h2>

          <p className="insti-subtitle">
            Access your institute administrative portal.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Login abhi backend se connected nahi hai.");
            }}
          >
            <label htmlFor="insti-email">
              Email or mobile number
            </label>

            <input
              id="insti-email"
              type="text"
              autoComplete="username"
              required
            />

            <label htmlFor="insti-password">
              Password
            </label>

            <div className="insti-password-wrap">
              <input
                id="insti-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <div className="insti-form-options">
              <label className="insti-remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#institute/forgot-password">
                Forgot password?
              </a>
            </div>

            <button
              className="insti-submit"
              type="submit"
            >
              Sign in to Portal
              <span>➜</span>
            </button>
          </form>

          <div className="insti-register">
            New institute partner?
            <a href="#institute/register">
              {" "}Register your institute
            </a>
          </div>
        </section>
      </main>

   
    </div>
  );
}
