import Link from "next/link";
import MagneticButton from "@/components/magnetic.js";
import React from "react";
import ParallaxBackground from "@/components/ParallaxBackground.js";
import TextChangeAnimation from "@/components/textanimate.js";
import LocalTime from "@/components/time";

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

        <ul className="navbar medium blacktext">
          <li>
            <MagneticButton>
              <p>
                <Link href="/about">About</Link>
              </p>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton>
              <p>
                <Link href="/projects">Projects</Link>
              </p>
            </MagneticButton>
          </li>
          <li>
            <MagneticButton>
              <p>
                <Link href="/contact">Contact</Link>
              </p>
            </MagneticButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}
