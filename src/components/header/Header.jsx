function Header() {
  return (
    <nav className="flex flex-col md:flex-row text-xl justify-between items-center px-4 py-4 bg-[#13161B] sticky top-0 z-50 space-y-2 md:space-y-0">
      <div className="font-[700] cursor-pointer text-center md:text-left">
        <span className="text-blue-400">Robin </span>Singh
      </div>

      <div>
        <a
          href="/pdf/resume.pdf"
          download
          className="font-[700] cursor-pointer text-white no-underline hover:text-blue-400 visited:text-white"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Header