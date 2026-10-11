
import { useState, useEffect } from "react";
import "./Live.css";

const labTopics = [
  {
    title: "Hydrogen spectrum",
    subject: "Physics",
    topic: "Atomic structure",
    description:
      "Electrons absorb or release energy when they move between energy levels. Each transition produces a characteristic wavelength of light.",
    fact: "Hydrogen is the simplest atom.",
    icon: "⚛",
  },
  {
    title: "Bohr atomic model",
    subject: "Physics",
    topic: "Structure of the atom",
    description:
      "Electrons occupy specific energy levels around the nucleus. Moving between levels requires absorbing or releasing energy.",
    fact: "Electrons occupy quantized energy levels.",
    icon: "⚛",
  },
  {
    title: "Photoelectric effect",
    subject: "Physics",
    topic: "Quantum physics",
    description:
      "Light can release electrons from a material when its frequency is above a threshold value.",
    fact: "Light energy comes in discrete photons.",
    icon: "☀",
  },
  {
    title: "DNA structure",
    subject: "Biology",
    topic: "Genetics",
    description:
      "DNA stores genetic information in a double helix. Its sequence helps determine how living organisms develop.",
    fact: "DNA uses four nucleotide bases.",
    icon: "🧬",
  },
  {
    title: "Rutherford's gold foil",
    subject: "Chemistry",
    topic: "Structure of the atom",
    description:
      "Most alpha particles fly almost straight through: the atom is mostly empty space. Only the rare ones aimed right at the tiny, positive nucleus bounce back, which is how Rutherford found it.",
    fact: "The experiment revealed a small, dense nucleus.",
    icon: "⚛",
  },
];

function Live() {
  const [index, setIndex] = useState(4);
  const [playing, setPlaying] = useState(true);
  const [energy, setEnergy] = useState(70);
  const [impact, setImpact] = useState(41);

  const lab = labTopics[index % labTopics.length];

  useEffect(() => {
    if (!playing) return;

    const timer = setInterval(() => {
      setImpact((value) => (value >= 90 ? 15 : value + 1));
    }, 150);

    return () => clearInterval(timer);
  }, [playing]);

  const nextLab = () => {
    setIndex((value) => (value + 1) % 50);
  };

  const previousLab = () => {
    setIndex((value) => (value + 49) % 50);
  };

  const angle = (impact * 0.96).toFixed(1);
  const distance = (impact * 1.424).toFixed(1);

  return (
    <main className="live-page">
      <section className="live-hero">
        <div className="live-hero-copy">
          <span className="live-eyebrow">
            LEARN BY EXPLORING
          </span>

          <h1>
            Learn by doing.
            <br />
            <span>Master it live.</span>
          </h1>

          <p>
            Try the idea here, then master it in a live class
            with an experienced teacher. Classes 6–12, CBSE,
            ICSE, IB and State Boards.
          </p>

          <div className="live-hero-actions">
            <button
              className="live-primary-button"
              onClick={() => {
                window.location.hash = "get-started";
              }}
            >
              Get Started <span>➜</span>
            </button>

            <button
              className="live-text-button"
              onClick={() => {
                window.location.hash = "how-it-works";
              }}
            >
              See how it works <span>➜</span>
            </button>
          </div>
        </div>

        <div className="live-lab-card">
          <div className="live-card-header">
            <div className="live-card-topic">
              <span className="live-status-dot"></span>
              <span className="live-status-text">LIVE LAB</span>
              <strong>{lab.title}</strong>
              <small>
                {lab.subject} · {lab.topic}
              </small>
            </div>

            <div className="live-card-navigation">
              <button
                onClick={previousLab}
                aria-label="Previous lab"
                title="Previous lab"
              >
                ‹
              </button>

              <button onClick={nextLab}>
                <span>▶</span> Next
              </button>

              <small>
                {index + 1}/50
              </small>
            </div>
          </div>

          <div className="live-lab-body">
            <div className="live-atom-panel">
              <div className="live-particle-label">
                α particles →
              </div>

              {Array.from({ length: 28 }, (_, i) => (
                <span
                  key={i}
                  className="live-particle"
                  style={{
                    left: `${(i * 37 + 7) % 96}%`,
                    top: `${(i * 23 + 3) % 94}%`,
                    animationDelay: `${(i % 8) * -0.25}s`,
                  }}
                />
              ))}

              <svg
                className="live-science-svg"
                viewBox="0 0 420 250"
                role="img"
                aria-label="Illustration of alpha particles approaching a nucleus"
              >
                <path
                  d={`M 0 95 L 170 95 Q 245 95 280 65 T ${330 + impact * 0.4} 5`}
                  fill="none"
                  stroke="#315cf5"
                  strokeWidth="3"
                />

                <path
                  d="M 0 95 L 180 95 Q 240 95 285 75"
                  fill="none"
                  stroke="#315cf5"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  opacity=".5"
                />

                <circle
                  cx="260"
                  cy="130"
                  r="24"
                  fill="none"
                  stroke="#ff8b9d"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />

                <circle
                  cx="260"
                  cy="130"
                  r="13"
                  fill="#ffb6c2"
                  opacity=".4"
                />

                <circle
                  cx="260"
                  cy="130"
                  r="6"
                  fill="#f04466"
                />

                <text
                  x="282"
                  y="113"
                  fill="#f04466"
                  fontSize="15"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  d
                </text>

                <text
                  x="273"
                  y="178"
                  fill="#f04466"
                  fontSize="10"
                  fontWeight="bold"
                >
                  gold nucleus, +79e
                </text>

                <text
                  x="350"
                  y="240"
                  fill="#8290b9"
                  fontSize="10"
                >
                  1 fm = 10⁻¹⁵ m
                </text>
              </svg>
            </div>

            <div className="live-lab-controls">
              <div className="live-metric">
                <span>Head-on closest approach</span>
                <strong>{distance} fm</strong>
              </div>

              <div className="live-metric">
                <span>Blue path turns by</span>
                <strong>{angle}°</strong>
              </div>

              <div className="live-metric">
                <span>Blue path gets within</span>
                <strong>{(distance * 2).toFixed(1)} fm</strong>
              </div>

              <div className="live-metric">
                <span>Alpha energy</span>
                <strong>{(energy / 10).toFixed(1)} MeV</strong>
              </div>

              <input
                className="live-slider"
                aria-label="Alpha energy"
                type="range"
                min="10"
                max="100"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                style={{ "--slider-progress": `${energy}%` }}
              />

              <div className="live-metric live-impact-label">
                <span>Aim (impact parameter b)</span>
                <strong>{impact} fm</strong>
              </div>

              <input
                className="live-slider"
                aria-label="Impact parameter"
                type="range"
                min="10"
                max="90"
                value={impact}
                onChange={(e) => setImpact(Number(e.target.value))}
                style={{
                  "--slider-progress": `${((impact - 10) / 80) * 100}%`,
                }}
              />

              <button
                className="live-play-button"
                onClick={() => setPlaying((value) => !value)}
              >
                {playing ? "Pause" : "Play"}
                <span>{playing ? "Ⅱ" : "▶"}</span>
              </button>
            </div>
          </div>

          <div className="live-lab-footer">
            <div className="live-formula">
              tan <sup>θ</sup>/<sub>2</sub>
              <span>=</span>
              <sup>d</sup>/<sub>2b</sub>
            </div>

            <p>{lab.description}</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
<section className="trust-strip">
  <div className="trust-wrap">
    <div className="trust-item">
      <span className="trust-avatars">👩🏻‍🎓👨🏻‍🎓👩🏻‍🏫</span>
      <span><b>2K+</b> happy students</span>
    </div>

    <div className="trust-item">
      <span className="trust-stars">★★★★★</span>
      <span><b>4.8/5</b> rating</span>
    </div>

    <div className="trust-item">
      <span className="trust-icon">♙</span>
      Verified expert mentors
    </div>

    <div className="trust-item">
      <span className="trust-icon">✓</span>
      A safe place to learn
    </div>
  </div>
</section>

{/* MOVING TEXT */}
<div className="trust-marquee">
  <div className="trust-marquee-track">
    {[1, 2].map((group) => (
      <div className="trust-marquee-group" key={group}>
        {[
          "CBSE",
          "ICSE",
          "IB",
          "State Boards",
          "Classes 6–12",
          "Coding",
          "Data Science",
          "Design",
          "Communication",
        ].map((item) => (
          <span className="trust-marquee-item" key={item}>
            <b>★</b> {item}
          </span>
        ))}
      </div>
    ))}
  </div>
</div>


    </main>
  );
}

export default Live;
