import Image from "next/image";
import profilePic from "/public/profileimgnew1.png";

export default function Home() {
  return (
    <section className="carousel">
      <div className="carousel-left">
        <h1>Hello, I’m <span className="highlight">Devrath</span></h1>
        <p>Full Stack Developer passionate about creating seamless web solutions using modern tech like React, MongoDB, and Next.js, focused on user-centric design and efficient backend systems.</p>
        <a href="/projects" className="btn">See My Work</a>
      </div>
      <div className="carousel-right">
        <Image
          src={profilePic}
          alt="Profile"
          width={350}
          height={350}
          className="profile-img"
        />
      </div>
    </section>
  );
}
