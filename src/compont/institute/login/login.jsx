
import { useState } from "react";
import "./Login.css";

function Login() {
  const getRole = () =>
    window.location.pathname.toLowerCase().includes("teacher")
      ? "teacher"
      : "student";

  const [role, setRole] = useState(getRole);
  const [showPassword, setShowPassword] = useState(false);

  const changeRole = (newRole) => {
    if (newRole === "institute") {
      window.location.hash = "institute/login";
      return;
    }

    setRole(newRole);
    window.history.pushState({}, "", `/${newRole}/login/`);
  };

  return (
    <main className="login-page">
      <section className="login-hero">
        <div className="login-left">
          <span className="login-badge">
            ★ {role === "student" ? "Student portal" : "Teacher portal"}
          </span>

          <h1>
            Welcome back.
            <br />
            <span>
              {role === "student"
                ? "Pick up where you left off."
                : "Your classes are waiting."}
            </span>
          </h1>

          <p>
            {role === "student"
              ? "Sign in to join live classes, catch up on recordings, take tests and track your progress."
              : "Sign in to teach online, manage your sessions and connect with your students."}
          </p>

          <div className="login-features">
            <span>{role === "student" ? "Live classes" : "Teach live"}</span>
            <span>{role === "student" ? "Recordings & notes" : "Manage sessions"}</span>
            <span>{role === "student" ? "Tests & progress" : "Guide students"}</span>
          </div>
        </div>

        <div className="login-card">
          <div className="login-tabs">
            <button
              className={role === "student" ? "active" : ""}
              onClick={() => changeRole("student")}
              type="button"
            >
              🎓 Student
            </button>

            <button
              className={role === "teacher" ? "active" : ""}
              onClick={() => changeRole("teacher")}
              type="button"
            >
              👨‍🏫 Teacher
            </button>

            <button
              type="button"
              onClick={() => changeRole("institute")}
            >
              🏢 Institute
            </button>
          </div>

          <h2>{role === "student" ? "Student Sign In" : "Teacher Sign In"}</h2>
          <p className="login-subtitle">Sign in to access your account.</p>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Login abhi backend se connected nahi hai.");
          }}>
            <label htmlFor="login-email">Email or phone number</label>
            <input
              id="login-email"
              type="text"
              placeholder="Enter email or phone number"
              autoComplete="username"
              required
            />

            <label htmlFor="login-password">Password</label>
            <div className="login-password">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="login-options">
              <label><input type="checkbox" /> Remember me</label>
              <a href={`#${role}/forgot-password`}>Forgot password?</a>
            </div>

            <button className="login-submit" type="submit">
              Sign in <span>→</span>
            </button>
          </form>

          <p className="login-footer">
            Don’t have an account?{" "}
            <a href="#signup">Sign up free</a>
          </p>
        </div>
      </section>

    
    </main>
  );
}

export default Login;
