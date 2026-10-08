
import { images, smallimage } from "../../assets/image/image.js";
import "./Teacher.css";


function Teacher() {
  return (
    <main className="teacher-page">
      <div className="teacher-dots"></div>

      <section className="teacher-hero">

        {/* LEFT TEXT */}
        <div className="teacher-left">

          <div className="teacher-badge">
            <span>★</span>
            Our teachers  hidus
          </div>

          <h1>
            Guidance from 
            <br />
            people who <span>care</span>
            <br />
            <span>about progress.</span>
          </h1>

          <p>
            Experienced educators and teachers help learners
            <br />
            understand, improve and move forward with confidence.
          </p>

        </div>

        {/* RIGHT BOX */}
        <div className="teacher-right">

          <div className="teacher-video-card">

            {/* TOP BAR */}
            <div className="teacher-top-bar">

              <div className="teacher-live">
                <span></span>
                LIVE
              </div>

              <strong>Quadratic Equations · Class 10</strong>

              <div className="teacher-count">
                👥 32
              </div>

            </div>

            {/* IMAGE */}
            <div className="teacher-image-box">

              <img src={images} alt="job image"
              />

              {/* RATING */}
              <div className="teacher-rating">
                ★ &nbsp; 4.9 rating
              </div>

              {/* SMALL VIDEO */}
              <div className="teacher-small-video">
                <img
  src={smallimage}
  alt="Teacher preview"
/>
                
            
              </div>

            </div>

            {/* CONTROLS */}
            <div className="teacher-controls">
              <button>◒</button>
              <button>▣</button>
              <button className="hand">✋</button>
              <button className="call">☎</button>
            </div>

          </div>

          {/* CHAT BOX */}
          <div className="teacher-chat">

            <div className="chat-heading">
              <span>▣</span>
              Class chat
            </div>

            <div className="raised-hand">
              <span>✋</span>
              <strong>Riya raised a hand</strong>
            </div>

            <div className="question-box">
              <small>Riya</small>
              <p>
                Why does this graph cut the x-axis twice?
              </p>
            </div>

            <div className="answer-box">
              <small>Teacher</small>
              <p>
                Its discriminant b² − 4ac is positive,
                so the equation has two real roots.
              </p>
            </div>

          </div>

        </div>
      </section>
 <section className="teacher-list-section">
      {/* SUBJECT BUTTONS */}
      <div className="teacher-subjects">
        <button className="active">All subjects</button>
        <button>Science</button>
        <button>Maths</button>
        <button>Coding</button>
        <button>English</button>
      </div>

  <div className="teacher-cards">

    {/* CARD 1 */}
    <div className="teacher-card">
      <div className="teacher-card-image teacher-card-physics">
        <span className="teacher-subject-badge">⚡ Physics</span>
        <div className="teacher-initials">PS</div>
      </div>

      <h3>Ms. Priya Sharma</h3>
      <p>Physics Teacher</p>

      <div className="teacher-card-bottom">
        <span className="teacher-rating-small">★ 4.9</span>
        <span className="teacher-verified">✓ Verified</span>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="teacher-card">
      <div className="teacher-card-image teacher-card-maths">
        <span className="teacher-subject-badge">Σ Maths</span>
        <div className="teacher-initials">RV</div>
      </div>

      <h3>Mr. Rahul Verma</h3>
      <p>Maths Teacher</p>

      <div className="teacher-card-bottom">
        <span className="teacher-rating-small">★ 4.8</span>
        <span className="teacher-verified">✓ Verified</span>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="teacher-card">
      <div className="teacher-card-image teacher-card-chemistry">
        <span className="teacher-subject-badge">⚗ Chemistry</span>
        <div className="teacher-initials">SI</div>
      </div>

      <h3>Ms. Sneha Iyer</h3>
      <p>Chemistry Teacher</p>

      <div className="teacher-card-bottom">
        <span className="teacher-rating-small">★ 4.9</span>
        <span className="teacher-verified">✓ Verified</span>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="teacher-card">
      <div className="teacher-card-image teacher-card-coding">
        <span className="teacher-subject-badge">&lt;/&gt; Coding</span>
        <div className="teacher-initials">AM</div>
      </div>

      <h3>Mr. Arjun Mehta</h3>
      <p>Coding Teacher</p>

      <div className="teacher-card-bottom">
        <span className="teacher-rating-small">★ 4.8</span>
        <span className="teacher-verified">✓ Verified</span>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="teacher-card">
      <div className="teacher-card-image teacher-card-english">
        <span className="teacher-subject-badge">▣ English</span>
        <div className="teacher-initials">KR</div>
      </div>

      <h3>Ms. Kavya Reddy</h3>
      <p>English Teacher</p>

      <div className="teacher-card-bottom">
        <span className="teacher-rating-small">★ 4.9</span>
        <span className="teacher-verified">✓ Verified</span>
      </div>
    </div>

  </div>

</section>

<section className="teacher-hero">

  {/* LEFT CONTENT */}
  <div className="teacher-left">

    <div className="teacher-badge">
      <span>★</span>
      01 live teaching
    </div>

    <h1>
      Ask questions.
      <br />
      Get guidance.
      <br />
      <span>Keep moving.</span>
    </h1>

    <p>
      Teaching is designed to complement learning —
      <br />
      helping learners clarify doubts, understand
      <br />
      difficult concepts, build confidence and make
      <br />
      better next-step decisions.
    </p>

  </div>


  {/* RIGHT CONTENT */}
  <div className="teacher-guidance">

    <div className="guidance-box guidance-blue">
      <div>
        <h3>1:1 Guidance</h3>
        <p>Focused support around a learner's needs.</p>
      </div>

      <div className="guidance-icon">♟</div>
    </div>


    <div className="guidance-box guidance-yellow">
      <div>
        <h3>Group Interactive Sessions</h3>
        <p>
          Learn collaboratively and hear different questions
          <br />
          and approaches.
        </p>
      </div>

      <div className="guidance-icon">♟</div>
    </div>


    <div className="guidance-box guidance-pink">
      <div>
        <h3>Masterclasses</h3>
        <p>Go deeper into important concepts and skills.</p>
      </div>

      <div className="guidance-icon">♙</div>
    </div>


    <div className="guidance-box guidance-cyan">
      <div>
        <h3>Academic Guidance</h3>
        <p>Explore choices and opportunities with structured guidance.</p>
      </div>

      <div className="guidance-icon">●</div>
    </div>

  </div>

</section>

     
    </main>
  );
}

export default Teacher;


