import "./Resources.css";
// import { images } from "../../assets/image/image.js";
import { box } from "../../assets/image/image.js";

function Resources() {
  return (
    <main className="resource-page">

      <div className="resource-dots"></div>

      <section className="resource-hero">

        {/* ================= LEFT ================= */}
        <div className="resource-left">

          <div className="resource-badge">
            <span>★</span>
            Resources
          </div>

          <h1>
            Everything
            <br />
            you need to
            <br />
            <span>learn, practise</span>
            <br />
            <span>and grow.</span>
          </h1>

          <p>
            Access high-quality study materials, notes, previous year
            <br />
            papers, test series, e-books, videos and more from educators
            <br />
            and learning partners.
          </p>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="resource-right">

          {/* NOTES */}
          <div className="resource-notes resource-box">

            <div className="resource-box-title">
              <span>▣</span>
              Notes
            </div>

            <div className="notes-paper">

              <strong>Light: Reflection and<br />Refraction</strong>

              <div className="note-line">
                Mirror formula
              </div>

              <div className="formula">
                ¹/u + ¹/v = ¹/f
              </div>

              <div className="note-line">
                Magnification m = −v/u
              </div>

              <div className="note-line">
                Refractive index n = c/v
              </div>

              <div className="note-line">
                Power of a lens P = 1/f
              </div>

              <div className="lens-diagram">
                <span>F</span>
                <i></i>
              </div>

            </div>

          </div>


          {/* VIDEO */}
          <div className="resource-video resource-box">

            <div className="resource-box-title">
              <span>▶</span>
              Videos
            </div>

            <div className="video-image">
       <img src={box} alt="Learning video" />

              <div className="video-play">
                ▶
              </div>
            </div>

          </div>


          {/* TEST SERIES */}
          <div className="resource-test resource-box">

            <div className="resource-box-title test-heading">
              <span>▣</span>
              Test Series

              <small>◉ 12/30</small>
            </div>

            <h4>Which gas turns lime water milky?</h4>

            <div className="test-option">
              <b>A</b>
              Oxygen
            </div>

            <div className="test-option correct">
              <b>✓</b>
              Carbon dioxide
            </div>

            <div className="test-option">
              <b>C</b>
              Nitrogen
            </div>

            <div className="test-option">
              <b>D</b>
              Hydrogen
            </div>

          </div>


          {/* PREVIOUS PAPERS */}
          <div className="resource-papers resource-box">

            <div className="resource-box-title">
              <span>▣</span>
              Previous Papers
            </div>

            <div className="paper-item">
              <span>▣</span>
              <strong>Class 10 Science<br />2025</strong>
              <b>↓</b>
            </div>

            <div className="paper-item">
              <span>▣</span>
              <strong>Class 10 Science<br />2024</strong>
              <b>↓</b>
            </div>

          </div>


          {/* E-BOOKS */}
          <div className="resource-books resource-box">

            <div className="resource-box-title">
              <span>▣</span>
              E-Books
            </div>

            <div className="books">

              <div className="book book-maths">
                Maths
              </div>

              <div className="book book-science">
                Science
              </div>

              <div className="book book-english">
                English
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Resources;