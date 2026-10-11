
import { useState } from "react";
import "./Getstarted.css";
import {
  GraduationCap,
  Users,
  ContactRound,
  Building2,
  ArrowRight,
  Hand,
} from "lucide-react";

const roles = [
  {
    name: "Student",
    icon: "🎓",
    description: "Live classes, practice and guidance",
  },
  {
    name: "Parent",
    icon: "👨‍👩‍👧",
    description: "Support your child’s journey",
  },
  {
    name: "Teacher",
    icon: "👨‍🏫",
    description: "Teach, guide and share expertise",
  },
  {
    name: "Institute",
    icon: "🏢",
    description: "Schools, coaching and organisations",
  },
];

function GetStarted() {
  const [selectedRole, setSelectedRole] = useState("Student");

  const handleContinue = () => {
    if (selectedRole === "Student") {
      window.location.hash = "signup";
    } else if (selectedRole === "Parent") {
      window.location.hash = "parent";
    } else if (selectedRole === "Teacher") {
      window.location.hash = "teachers";
    } else {
      window.location.hash = "schools";
    }
  };

  return (
    <main className="get-page">
      <section className="get-intro">
        <div className="get-badge">
          <span>★</span> Get started with LiveMentorHub
        </div>

        <h1>
          First, tell us: <span>how can we help?</span>
        </h1>

        <p>
          Choose the role that best describes you. We'll guide
          you to the right LiveMentorHub portal.
        </p>
      </section>

      <section className="role-card">
        <div className="role-card-heading">
          <div className="welcome-icon">✋</div>
          <div>
            <h2>Welcome to LiveMentorHub</h2>
            <p>Who is joining today?</p>
          </div>
        </div>

        <div className="role-grid">
          {roles.map((role) => (
            <button
              type="button"
              key={role.name}
              className={`role-option ${
                selectedRole === role.name ? "selected" : ""
              }`}
              onClick={() => setSelectedRole(role.name)}
              aria-pressed={selectedRole === role.name}
            >
              <span className="role-icon">{role.icon}</span>
              <span className="role-radio">
                {selectedRole === role.name ? "●" : ""}
              </span>
              <strong>{role.name}</strong>
              <span className="role-description">
                {role.description}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="continue-role"
          onClick={handleContinue}
        >
          <span>
            Continue as <strong>{selectedRole}</strong>
          </span>
          <span className="continue-arrow">→</span>
        </button>
      </section>



<section className="get-started-section">
  <div className="get-started-container">
    <div className="get-started-grid">

      {/* Student */}
      <div className="role-card role-card-active">
        <div className="role-icon">🎓</div>
        <h2>Student</h2>
        <p>
          I want live classes, practice and expert guidance.
        </p>
        <button
          className="role-button"
          onClick={() => window.location.href = "/student/login/"}
        >
          Choose Student <span className="role-arrow">→</span>
        </button>
      </div>

      {/* Parent */}
      <div className="role-card">
        <div className="role-icon">👨‍👩‍👧</div>
        <h2>Parent</h2>
        <p>
          I want to support my child's learning journey.
        </p>
        <button
          className="role-button"
          onClick={() => window.location.href = "/parent/login/"}
        >
          Choose Parent <span className="role-arrow">→</span>
        </button>
      </div>

      {/* Teacher */}
      <div className="role-card">
        <div className="role-icon">👨‍🏫</div>
        <h2>Teacher</h2>
        <p>
          I want to teach, guide and share my expertise.
        </p>
        <button
          className="role-button"
          onClick={() => window.location.href = "/teacher/login/"}
        >
          Choose Teacher <span className="role-arrow">→</span>
        </button>
      </div>

      {/* Institute */}
      <div className="role-card">
        <div className="role-icon">🏢</div>
        <h2>Institute</h2>
        <p>
          I represent a school, coaching institute or organization.
        </p>
        <button
          className="role-button"
          onClick={() => window.location.href = "/institute/login/"}
        >
          Choose Institute <span className="role-arrow">→</span>
        </button>
      </div>

    </div>
  </div>
</section>


{/* 
<section className="four-cards-section">
  <section className="getstarted-grid">
    {roles.map((role) => (
      <article
        key={role.name}
        className={`getstarted-card ${
          selectedRole === role.name ? "selected" : ""
        }`}
        onClick={() => setSelectedRole(role.name)}
      >
        <div className={`getstarted-icon ${role.color}`}>
          {role.icon}
        </div>

        <h2>{role.name}</h2>

        <p>{role.description}</p>

        <button
          type="button"
          className="getstarted-button"
          onClick={(event) => {
            event.stopPropagation();
            window.location.hash = `#${routes[role.name]}`;
          }}
        >
          <span>Choose {role.name}</span>

          <span className="getstarted-arrow">
            <ArrowRight size={22} />
          </span>
        </button>
      </article>
    ))}
  </section>
</section> */}


      
    </main>
  );
}

export default GetStarted;


