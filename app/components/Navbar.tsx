import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div
        className="prose prose-xl mx-auto flex justify-between 
      flex-col sm:flex-row"
      >
        <h1
          className="text-3xl font-bold text-white grid 
        place-content-center mb-2 md:mb-0"
        >
          <Link
            href="/"
            className="text-white/70 uppercase no-underline hover:text-white"
          >
            Ajil
          </Link>
        </h1>
        <div
          className="flex flex-row justify-center sm:justify-evenly align-middle 
        gap-4 text-white text-2xl lg:text-3xl items-center"
        >
          <Link
            className="text-white/70 hover:text-white"
            href="https://github.com/ajilJagadeesh7"
          >
            <FaGithub />{" "}
          </Link>
          <Link
            className="text-white/70 hover:text-white"
            href="https://www.linkedin.com/in/ajil-jagadeesh-07"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/70 hover:text-white"
            href="https://www.instagram.com/ajil.dev07/"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </nav>
  );
}
