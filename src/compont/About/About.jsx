import "./About.css";
import { earth, logo } from "../../assets/image/image.js";
import { Radio } from "lucide-react";
import{Cable} from "lucide-react";
import{MirrorRound } from "lucide-react";
import{ChartSpline } from "lucide-react";
function About() {
  return (
    <main className="about-page">
      <div className="about-dots"></div>

      <section className="about-hero">
        {/* LEFT CONTENT */}
        <div className="about-left">
          <div className="about-badge">
            <span>★</span>
            About LiveMentorHub
          </div>

          <h1>
            More than
            <br />
            a platform.
            <br />
            <span>A partner in</span>
            <br />
            <span>your growth.</span>
          </h1>

          <p>
            LiveMentorHub is an Indian education and mentorship
            <br />
            platform established in 2026 with a simple belief: learning
            <br />
            becomes more powerful when great content is combined
            <br />
            with great guidance.
          </p>
        </div>

        {/* RIGHT EARTH IMAGE */}
        <div className="about-right">
          <div className="about-globe">
            <img
              src={earth}
              alt="Earth map showing Dubai, Delhi and Hyderabad"
              className="earth-image"
            />
          </div>

          <div className="about-network">
            <span>🌐</span>
            Global network
          </div>

          <div className="about-established">
            <span>▦</span>
            Established 2026
          </div>
          {/* Dubai */}

          
<div className="globe-location location-dubai">
  <span></span>
  Dubai
</div>

{/* Delhi */}
<div className="globe-location location-delhi">
  <span></span>
  Delhi
</div>

{/* Hyderabad */}
<div className="globe-location location-hyderabad">
  <span></span>
  Hyderabad · HQ
</div>
        </div>
      </section>
      <section className="about-story">
        <div className="story-logo">


          <img src={logo} alt="LiveMentorHub Logo" />


        </div>

        <div className="story-content">
          <div className="about-badge">
            <span>★</span> 01 Our story
          </div>

          <h2>
            Learning should
            <br />
            <span>feel connected.</span>
          </h2>

          <p>
            We bring together structured learning, live classes, expert
            mentorship, doubt solving and progress tracking in one
            connected experience — helping learners know not only what to
            learn, but also who can help and what to do next.
          </p>

          <div className="story-divider"></div>

          <div className="about-badge">
            <span>★</span> 02 Our belief
          </div>

          <h3>
            Great learning is not only about content. It is about{" "}
            <span>the right guidance, the right structure</span> and the
            confidence to keep moving.
          </h3>
        </div>
      </section>

            {/* WHAT WE BRING TOGETHER */}
      <section className="about-features">
        <div className="features-container">
          <div className="features-label">
            <span>★</span> 03&nbsp; What we bring together
          </div>

          <h2>
            Four things, <span>one experience.</span>
          </h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon cyan">
                <Cable size={16} color="#10183f" />
              </div>
              <h3>Structured Learning</h3>
              <p>
                Clear learning paths that make the next step easier to
                understand.
              </p>
            </div>

           <div className="feature-card">
  <div className="feature-icon blue">
    <Radio size={16} color="white" />
  </div>

  <h3>Live Learning</h3>
  <p>
    Interactive classes where learners can ask questions and
    learn in real time.
  </p>
</div>
            <div className="feature-card">
              <div className="feature-icon yellow">
                <MirrorRound size={16} />
              </div>

           

              <h3>Expert Mentorship</h3>
              <p>
                People who can guide, clarify and support progress.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon cyan">
                <ChartSpline size={16} />
              </div>
              <h3>Progress Tracking</h3>
              <p>
                Tools and information that help learners see where they
                are and what to do next.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* OUR VISION FOR THE FUTURE */}
      <section className="about-vision">
        <div className="vision-container">
          <div className="vision-badge">
            <span>★</span>
            04&nbsp; Our vision for the future
          </div>

          <h2>
            A trusted technology infrastructure
            <br />
            where learners learn, educators
            <br />
            teach, professionals mentor,
            <br />
            institutions grow — <span>and</span>
            <br />
            <span>organizations discover talent.</span>
          </h2>

          <div className="vision-flow">
            <div className="vision-step">Education</div>
            <span className="vision-arrow">➜</span>
            <div className="vision-step">Skills</div>
            <span className="vision-arrow">➜</span>
            <div className="vision-step">Mentorship</div>
            <span className="vision-arrow">➜</span>
            <div className="vision-step">Career Guidance</div>
            <span className="vision-arrow">➜</span>
            <div className="vision-step">Job Readiness</div>
            <span className="vision-arrow">➜</span>
            <div className="vision-step">Recruitment</div>
            <span className="vision-arrow">➜</span>
         <div className="vision-step">Employment</div>
          </div>

          <p className="vision-description">
            Learning today. Opportunities tomorrow. A connected ecosystem
            <br />
            for the future.
          </p>
        </div>
      </section>

            {/* GLOBAL OFFICES */}
      <section className="about-offices">
        <div className="offices-container">
          <div className="offices-badge">
            <span>★</span> 05&nbsp; Global offices
          </div>

          <h2>
            The LiveMentorHub <span>global network.</span>
          </h2>

          <div className="offices-grid">
            <div className="office-card office-dubai">
              <span className="office-country">UAE</span>
              <h3>Dubai</h3>
              <p>Port Saeed, Dubai</p>
              <div className="office-phone">
                <span>☎</span> +971 582 548 362
              </div>
            </div>

            <div className="office-card office-hyderabad">
              <span className="office-country">INDIA</span>
              <h3>Hyderabad</h3>
              <p>Uppal, Hyderabad</p>
              <div className="office-phone">
                <span>☎</span> +91 8019167891
              </div>
            </div>

            <div className="office-card office-delhi">
              <span className="office-country">INDIA</span>
              <h3>Delhi</h3>
              <p>Nehru Place, Delhi</p>
              <div className="office-phone">
                <span>☎</span> +91 8019167892
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;