
import { useState } from "react";
import "./why.css";
import student3 from "../../assets/image/boy.jpg";
import studentAfter from "../../assets/image/imag 2.webp";

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
  {
    title: "CLARITY",
    oldText: "Not sure what to study next",
    newText: "A clear next step to work on",
  },
  {
    title: "CONFIDENCE",
    oldText: "Doubts stay unanswered",
    newText: "Doubts cleared live, in class",
  },
  {
    title: "CONSISTENCY",
    oldText: "Study rhythm keeps breaking",
    newText: "A steady rhythm of live sessions",
  },
  {
    title: "GROWTH",
    oldText: "No clear sense of progress",
    newText: "Progress you can see and track",
  },
];

function Why() {
  const [split, setSplit] = useState(50);

  // Right side zyada visible hone par new text show hoga.
  const isNew = split >= 50;

  return (
    <>
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
            <div
              className="cmp-photo"
              style={{ "--split": `${split}%` }}
            >
              <figure className="a">
                <img
                  src={student3}
                  alt="Studying alone"
                />
                <figcaption>Studying alone</figcaption>
              </figure>

              <figure className="b">
                <img
                  src={studentAfter}
                  alt="With LiveMentorHub"
                />
                <figcaption>With LiveMentorHub</figcaption>
              </figure>

              <input
                className="cmp-slider"
                type="range"
                min="0"
                max="100"
                value={split}
                onChange={(e) =>
                  setSplit(Number(e.target.value))
                }
                aria-label="Compare before and after images"
              />

              <span className="cmp-knob">
                <span className="ms">↔</span>
              </span>
            </div>
          </div>

          <div className="why-problems">
            {problems.map((problem) => (
              <div
                className={`why-problem ${isNew ? "is-new" : "is-old"}`}
                key={problem.title}
              >
                <span className="why-problem-icon">
                  {isNew ? "✓" : "×"}
                </span>

                <div>
                  <small>{problem.title}</small>
                  <strong>
                    {isNew ? problem.newText : problem.oldText}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <article
              className="features-card"
              key={feature.title}
            >
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
