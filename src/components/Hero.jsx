import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src={logo} alt="sumz_logo" className="lg:w-28" />
          <p className="font-bold text-xl tracking-wide">
            Min
            <span className="font-extrabol text-orange-400 tracking-wide">
              web
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            className="md:text-slate-400 md:font-semibold hidden lg:flex md:hover:text-slate-500 text-black transition-colors hover:text-neutral-100"
            href="https://grandiose-literature-b18.notion.site/React-Redux-API-Vite-2423a2e895344ccfa6661ae6019f5aaf?pvs=4"
            target="_blank"
            rel="noreferrer"
          >
            Changelog
          </a>
          <button
            type="button"
            onClick={() => window.open("#", "_blank")}
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2n"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
            Login with Twitter
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Condense Texts using <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Enhance Efficiency: Unlock the Power of Minweb, the AI-Powered Article
        Summarizer, to Condense Lengthy Texts into Relevant and Succinct
        Summaries – Empowering your Information Access!
      </h2>
    </header>
  );
};

export default Hero;