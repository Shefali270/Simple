
import { useState } from "react";
import {
  GraduationCap,
  Users,
  UserRound,
  Building2,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import "./GetStarted.css";

const roles = [
  {
    id: "student",
    title: "Student",
    description: "Live classes, practice and expert guidance.",
    cardDescription:
      "I want live classes, practice and expert guidance.",
    icon: GraduationCap,
    color: "yellow",
    route: "/student/login",
  },
  {
    id: "parent",
    title: "Parent",
    description: "Support your child's learning journey.",
    cardDescription:
      "I want to support my child's learning journey.",
    icon: Users,
    color: "yellow",
    route: "/parent/login",
  },
  {
    id: "teacher",
    title: "Teacher",
    description: "Teach, guide and share your expertise.",
    cardDescription:
      "I want to teach, guide and share my expertise.",
    icon: UserRound,
    color: "cyan",
    route: "/teacher/login",
  },
  {
    id: "institute",
    title: "Institute",
    description: "Schools, coaching and organisations.",
    cardDescription:
      "I represent a school, coaching institute or organization.",
    icon: Building2,
    color: "cyan",
    route: "/institute/login",
  },
];

function GetStarted() {
  const [selectedRole, setSelectedRole] = useState("student");

  const selected = roles.find(
    (role) => role.id === selectedRole
  );

  const handleContinue = () => {
    if (selected) {
      window.location.href = selected.route;
    }
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role.id);
    window.location.href = role.route;
  };

  return (
    <main className="get-started-page">
      <div className="get-started-dots" aria-hidden="true" />

      <div className="get-started-content">
        {/* TOP SECTION */}
        <section className="get-started-hero">
          <div className="get-started-intro">
            <div className="get-started-badge">
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

          {/* ROLE SELECTION PANEL */}
          <div className="get-started-panel">
            <div className="get-started-panel-heading">
              <div className="get-started-sparkle">
                <Sparkles size={17} />
              </div>

              <div>
                <h2>Welcome to LiveMentorHub</h2>
                <p>Who is joining today?</p>
              </div>
            </div>

            <div className="get-started-panel-roles">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;

                return (
                  <button
                    type="button"
                    key={role.id}
                    className={`get-started-mini-role ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => setSelectedRole(role.id)}
                    aria-pressed={isSelected}
                  >
                    <span className="get-started-mini-icon">
                      <Icon size={17} />
                    </span>

                    <span className="get-started-mini-copy">
                      <strong>{role.title}</strong>
                      <small>{role.description}</small>
                    </span>

                    <span className="get-started-radio">
                      {isSelected && <Check size={10} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="get-started-continue"
              onClick={handleContinue}
            >
              <span>Continue as {selected?.title}</span>
              <span className="get-started-continue-arrow">
                <ArrowRight size={17} />
              </span>
            </button>
          </div>
        </section>

        {/* FOUR CLICKABLE ROLE CARDS */}
        <section className="get-started-role-grid">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <article
                key={role.id}
                className={`get-started-role-card ${
                  isSelected ? "active" : ""
                }`}
              >
                <button
                  type="button"
                  className="get-started-card-select"
                  onClick={() => handleRoleClick(role)}
                  aria-label={`Open ${role.title} login`}
                >
                  <span
                    className={`get-started-role-icon ${role.color}`}
                  >
                    <Icon size={22} />
                  </span>

                  <span className="get-started-card-title">
                    {role.title}
                  </span>

                  <span className="get-started-card-description">
                    {role.cardDescription}
                  </span>

                  <span className="get-started-card-action">
                    <span>Choose {role.title}</span>
                    <span className="get-started-card-arrow">
                      <ArrowRight size={15} />
                    </span>
                  </span>
                </button>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default GetStarted;
