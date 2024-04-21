import Link from "next/link";
import MagneticButton from "@/components/magnetic.js";
import React from "react";
import ParallaxBackground from "@/components/ParallaxBackground.js";
import TextChangeAnimation from "@/components/textanimate.js";
import LocalTime from "@/components/time.js";
import { bg_boxes } from "@/components/box.js";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "Overused Grotesk" }}>
      {/* Position > Deco 1..2..3 > animation */}
      {/* Nav Starts */}

      <nav className="nav">
        <div className="icon">
          <MagneticButton>
            <Link href="../">
              <Image src="favicon.ico" alt="Worakrit" />
            </Link>
          </MagneticButton>
        </div>

        <ul className="navbar blacktext medium">
          <li>
            <MagneticButton>
              <p className="dot">
                <Link href="/about">About</Link>
              </p>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton>
              <p className="dot">
                <Link href="/projects">Projects</Link>
              </p>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton>
              <p className="dot">
                <Link href="/contact">Contact</Link>
              </p>
            </MagneticButton>
          </li>
        </ul>
      </nav>

      {/* Main Starts */}
      <main className="landing">
        <div className="landing-container">
          <div className="landing-content blacktext">
            <div className="greeting">
              <h2 className="medium textchange">
                <TextChangeAnimation />
                <span>! I'm</span>
              </h2>
            </div>
            <h1 className="name h0 extrabold">Worakrit</h1>
            <MagneticButton>
              <p className="contact">
                <Link href="/contact">Get in touch</Link>
              </p>
            </MagneticButton>
          </div>
          {/* <span className="star4 spin-ani"><Image src="star4.svg"/></span>
            <span className="star9 spin-ani"><Image src="star9.svg"/></span>  */}
        </div>
        <ParallaxBackground />
      </main>

      {/* About me starts */}
      <section className="description" loading="lazy">
        <div className="description-container">
          <div className="medium description-content reveal">
            <h4>
              <span>
                Passionate problem-solver, designer, and idea generator with a
                drive to take them to the next level.
              </span>
            </h4>
          </div>
          <div className="btn-pop fade about">
            <MagneticButton>
              <p>
                <Link href="/about">About me</Link>
              </p>
            </MagneticButton>
          </div>
        </div>
        {/* 
          <div className="nextlevel">
            <span><Image className="lvl4" src="nextlevel.svg"/></span>
            <span><Image className="lvl3" src="nextlevel.svg"/></span>
            <span><Image className="lvl2" src="nextlevel.svg"/></span>
            <span><Image className="lvl1" src="nextlevel.svg"/></span>
          </div>

          <span><Image className="jigsaw" src="jigsaw.svg"/></span>  */}
      </section>

      {/* Expertises starts */}
      {/* <section className="expertises" loading="lazy">
        <h3 className="semibold">Expertises</h3>
        <div className="medium">
          <h4>Web Development</h4>
          <h4>Web Design</h4>
          <h4>Chatbot Development</h4>
          <h4>Cloud Computing</h4>
        </div>
      </section> */}

      {/* Projects starts */}

      <section className="project-wrapper" loading="lazy">
        <h3 className="semibold">
          <Link className="title" href="/project">
            PROJECTS
          </Link>
        </h3>

        <div className="project-container">
          <div className="project">
            <a href="https://github.com/uzimpp/TCAS-Engineering-Bot">
              <div
                className="cover-container"
                style={{ backgroundImage: `url("/tcas-bg.png")` }}
              >
                <Image
                  className="cover"
                  src="tcas-cover.png"
                  alt="TCAS Engineering-Bot"
                />
              </div>

              <div className="project-content">
                <h5 className="medium heading">TCAS Engineering-Bot</h5>
                <p className="tag chatbot">Chatbot</p>
              </div>
            </a>
          </div>

          <div className="project">
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
              <div
                className="cover-container"
                style={{ backgroundImage: `url("/myweb-bg.png")` }}
              >
                <Image
                  className="cover"
                  src="myweb-cover.png"
                  alt="TCAS Engineering-Bot"
                />
              </div>
              <div className="project-content">
                <h5 className="medium heading">Personal Website</h5>
                <p className="tag chatbot">Website</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Collab starts */}
      <div className="collab blacktext " loading="lazy">
        <div className="highlight-circle">
          <div className="collab-content">
            <h4 className="semibold">Interested in</h4>
            <h3 className="bold">Collaboration?</h3>
            <MagneticButton>
              <p className="contact">
                <Link href="/contact">Get in touch</Link>
              </p>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Footer Starts */}
      <footer className="footer" loading="lazy">
        <div className="footer-content">
          <div className="copyright">
            <h5 className="bold">© 2024 Worakrit</h5>
          </div>

          <div className="local-time">
            <p className="semibold">Local time</p>
            <span className="time">
              <LocalTime />
            </span>
          </div>

          <div className="socials">
            <p className="semibold">Socials</p>
            <ul className="socials-container">
              <li>
                <p>
                  <a href="https://www.instagram.com/ssoq.b/?igshid=MmIzYWVlNDQ5Yg%3D%3D">
                    Instagram
                  </a>
                </p>
              </li>
              {/* <li>
                <p>
                  <a href="">Linkedin</a>
                </p>
              </li> */}
              <li>
                <p>
                  <a href="https://bento.me/worakrit">Bento</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://github.com/uzimpp">GitHub</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="return">
          <MagneticButton>
            <Image src="Back to top.svg" />
          </MagneticButton>
        </div>
      </footer>
    </div>
  );
}
