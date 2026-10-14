
import React from "react";
import "./why.css";

const features = [
  {
    title: "Expert Mentors",
    description:
      "Get guidance from mentors who care about your learning and support your journey, every step.",
    icon: "♙",
    color: "blue",
  },
  {
    title: "Live Classes",
    description:
      "Learn interactively with live sessions that are collaborative and designed for concept-building.",
    icon: "◉",
    color: "yellow",
  },
  {
    title: "Structured Learning",
    description:
      "Follow clear pathways designed to help you learn for academics and skills that matter.",
    icon: "↕",
    color: "pink",
  },
  {
    title: "Progress Focused",
    description:
      "Track your learning journey with insights, assessments and progress tools.",
    icon: "▥",
    color: "cyan",
  },
];

const problems = [
  ["×", "CLARITY", "Not sure what to study next"],
  ["×", "CONFIDENCE", "Doubts stay unanswered"],
  ["×", "CONSISTENCY", "Study rhythm keeps breaking"],
  ["×", "GROWTH", "No clear sense of progress"],
];

function Why() {
  return (
    <>
      {/* First section: Student image and problems */}
      <section className="why-section">
        <div className="why-left">
          <span className="why-label">
            ⭐ Why LiveMentorHub?
          </span>

          <h1>
            Learning is
            <br />
            better when
            <br />
            you're <span>not</span>
            <br />
            <span>doing it alone.</span>
          </h1>

          <p>
            We bring the structure, people and tools around a learner —
            so learning becomes clearer, more engaging and easier to act on.
          </p>
        </div>

        <div className="why-right">
          <div className="why-image-box">
            <img
              src="/images/students.jpg"
              alt="Students learning together"
            />

            <span className="why-image-badge">
              Studying alone
            </span>

            <span className="why-image-arrow">✣</span>
          </div>

          <div className="why-problems">
            {problems.map(([icon, title, description]) => (
              <div className="why-problem" key={title}>
                <span className="why-problem-icon">{icon}</span>

                <div>
                  <small>{title}</small>
                  <strong>{description}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second section: Four parts of learning */}
      <section className="features-section">
        <div className="features-left">
          <span className="features-label">
            ⭐ 01 More than content
          </span>

          <h2>
            Four parts of a
            <br />
            <span>better learning</span>
            <br />
            <span>experience.</span>
          </h2>

          <p>
            LiveMentorHub combines guidance, interaction,
            structure and progress focus in one connected
            experience. The aim is simple: help learners
            understand what to learn, who can help and what
            to do next.
          </p>
        </div>

        <div className="features-right">
          {features.map((feature) => (
            <article className="features-card" key={feature.title}>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <span className={`features-icon ${feature.color}`}>
                {feature.icon}
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Why;
