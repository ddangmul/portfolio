export const Header: React.FC = () => {
  return (
    <header
      className="w-full fixed top-0 border-b-2  px-4 md:px-6 lg:px-10 xl:px-60 h-16 border-b-[#3f3f3f] flex justify-between items-center text-xl font-medium z-50 backdrop-blur-sm 
      bg-white/70 text-center"
    >
      <a href="/#about" className="hover:cursor-pointer">
        About
      </a>
      <a href="/#home" className="hover:cursor-pointer">
        Home
      </a>
      <a href="/#projects" className="hover:cursor-pointer">
        Projects
      </a>
    </header>
  );
};
