import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to build something{" "}
          <span className="text-purple">amazing?</span>
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and discuss AI/ML, software development,
          projects, and new opportunities.
        </p>

        <a href="mailto:st1736773@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Shreya Tiwari
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <a
            href="https://github.com/st1736773-tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img
                src="/git.svg"
                alt="GitHub"
                width={20}
                height={20}
              />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-tiwari-274a89380"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img
                src="/link.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;