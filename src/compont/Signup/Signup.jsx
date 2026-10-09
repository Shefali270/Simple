
import { useState } from "react";
import {
  Radio,
  RotateCcw,
  ChartNoAxesColumnIncreasing,
  Eye,
  EyeOff,
  ArrowRight,
  GraduationCap,
  School,
  UserRound,
} from "lucide-react";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="signup-page">
      <div className="signup-dots"></div>

      <section className="signup-layout">
        <div className="signup-intro">
          <div className="signup-badge">
            <span>★</span> Student portal
          </div>

          <h1>
            Start learning <span>live,</span>
            <br />
            <span>with guidance.</span>
          </h1>

          <p>
            Create your student account to join live classes, practise
            with tests and track your progress.
          </p>

          <div className="signup-benefits">
            <div>
              <span className="benefit-icon"><Radio size={18} /></span>
              <strong>Live classes</strong>
            </div>

            <div>
              <span className="benefit-icon"><RotateCcw size={18} /></span>
              <strong>Recordings &amp; notes</strong>
            </div>

            <div>
              <span className="benefit-icon">
                <ChartNoAxesColumnIncreasing size={18} />
              </span>
              <strong>Tests &amp; progress</strong>
            </div>
          </div>
        </div>

        <div className="signup-form-card">
          <div className="signup-tabs">
            <button type="button" className="selected">
              <GraduationCap size={14} /> Student
            </button>
            <button type="button">
              <UserRound size={14} /> Teacher
            </button>
            <button type="button">
              <School size={14} /> Institute
            </button>
          </div>

          <h2>Create Student Account</h2>
          <p className="signup-subtitle">
            Sign up as a student to unlock live mentorship and learning.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Signup form submitted!");
            }}
          >
            <div className="signup-section-label">STUDENT DETAILS</div>

            <label>Full name <span>*</span></label>
            <input type="text" required />

            <div className="signup-form-row">
              <div>
                <label>Email address <span>*</span></label>
                <input type="email" required />
              </div>
              <div>
                <label>Mobile number <span>*</span></label>
                <div className="phone-input">
                  <span>+91</span>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="signup-form-row">
              <div>
                <label>Password <span>*</span></label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    minLength="6"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div>
                <label>Confirm password <span>*</span></label>
                <div className="password-input">
                  <input
                    type={showConfirm ? "text" : "password"}
                    minLength="6"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
            </div>

            <small className="signup-hint">At least 6 characters</small>

            <div className="signup-form-row">
              <div>
                <label>Gender</label>
                <select defaultValue="">
                  <option value="" disabled>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label>Country</label>
                <select defaultValue="India">
                  <option>India</option>
                  <option>United Arab Emirates</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <label>Address</label>
            <input type="text" />

            <div className="signup-divider"></div>
            <div className="signup-section-label">PARENT DETAILS</div>

            <label>Parent's name <span>*</span></label>
            <input type="text" required />

            <div className="signup-form-row">
              <div>
                <label>Parent's email address <span>*</span></label>
                <input type="email" required />
              </div>

              <div>
                <label>Parent's mobile number <span>*</span></label>
                <div className="phone-input">
                  <span>+91</span>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>
            </div>

            <label>Are you currently associated with an institute? <span>*</span></label>
            <select defaultValue="No" required>
              <option>No</option>
              <option>Yes</option>
            </select>

            <small className="signup-hint">
              This helps us connect you with the right institute community.
            </small>

            <button type="submit" className="signup-submit">
              Create Account
              <span><ArrowRight size={18} /></span>
            </button>

            <p className="signup-terms">
              By creating an account you agree to our{" "}
              <a href="/terms">Terms</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            <p className="signup-login">
              Already have an account? <a href="/student/login">Sign in</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Signup;
