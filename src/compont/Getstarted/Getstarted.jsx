
import React, { useState } from "react";
import "./Getstarted.css";

const roles = [

  {
    name: "Student",
    icon: "🎓",
    description: "Live classes, practice and guidance",
    text: "I want live classes, practice and expert guidance.",
    path: "/student/login/",
  },
  {
    name: "Parent",
    icon: "👨‍👩‍👧",
    description: "Support your child's journey",
    text: "I want to support my child's learning journey.",
    path: "/parent/login/",
  },
  {
    name: "Teacher",
    icon: "👨‍🏫",
    description: "Teach, guide and share expertise",
    text: "I want to teach, guide and share my expertise.",
    path: "/teacher/login/",
  },
  {
    name: "Institute",
    icon: "🏢",
    description: "Schools, coaching and organisations",
    text: "I represent a school, coaching institute or organization.",
    path: "/institute/login/",
  },
];

function Getstarted() {
  const [selectedRole, setSelectedRole] = useState("Student");

  const selected =
    roles.find((role) => role.name === selectedRole) || roles[0];

  const goToLogin = (role) => {
    window.location.href = role.path;
  };

  return (
    <main className="getstarted-page">
    
      {/* Hero section */}
      <section className="gs-hero">
        <div className="gs-hero-copy">
          <div className="gs-eyebrow">
            <span>★</span>
            Get started with LiveMentorHub
          </div>

          <h1>
            First, tell us:
            <br />
            <span>how can</span>
            <br />
            <span>we help?</span>
          </h1>

          <p>
            Choose the role that best describes you. We'll guide
            you to the right LiveMentorHub portal.
          </p>
        </div>

        {/* Interactive role selection preview */}
        <div className="gs-preview">
          <div className="gs-preview-header">
            <span className="gs-preview-logo">✦</span>

            <div>
              <strong>Welcome to LiveMentorHub</strong>
              <small>Who is joining today?</small>
            </div>
          </div>

          <div className="gs-preview-grid">
            {roles.map((role) => (
              <button
                key={role.name}
                type="button"
                className={`gs-preview-option ${
                  selectedRole === role.name ? "selected" : ""
                }`}
                aria-pressed={selectedRole === role.name}
                onClick={() => setSelectedRole(role.name)}
              >
                <span className="gs-preview-icon">
                  {role.icon}
                </span>

                <span className="gs-preview-name">
                  {role.name}
                </span>

                <small>{role.description}</small>

                <span className="gs-radio">
                  {selectedRole === role.name ? "✓" : ""}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="gs-preview-continue"
            onClick={() => goToLogin(selected)}
          >
            <span>Continue as {selectedRole}</span>
            <span className="gs-continue-arrow">→</span>
          </button>
        </div>
      </section>

      {/* Four role cards */}
      <section className="gs-role-section" id="role-cards">
        <div className="gs-role-grid">
          {roles.map((role) => (
            <article
              key={role.name}
              className={`gs-role-card ${
                selectedRole === role.name ? "active" : ""
              }`}
            >
              <div className="gs-role-icon">
                {role.icon}
              </div>

              <h2>{role.name}</h2>

              <p>{role.text}</p>

              <button
                type="button"
                className="gs-role-button"
                onClick={() => goToLogin(role)}
              >
                <span>Choose {role.name}</span>
                <span className="gs-role-arrow">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Getstarted;
