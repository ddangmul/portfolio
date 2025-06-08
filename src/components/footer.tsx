const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="w-full bottom-0 bg-[#1f1f1f] py-10 px-4 md:px-10 lg:px-20 xl:px-60"
    >
      <div className="grid lg:grid-cols-2 text-lg text-[#eeeeee]">
        <div className="flex gap-4">
          <strong>연락처</strong>
          <a href="tel:+821029637765" className="hover:text-white">
            010-2963-7765
          </a>
        </div>
        <div className="flex gap-4">
          <strong>GitHub</strong>
          <a
            href="https://github.com/ddangmul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            https://github.com/ddangmul
          </a>
        </div>
        <div className="flex gap-4">
          <strong>이메일</strong>
          <a href="mailto:example@example.com" className="hover:text-white">
            ddangmul.j@gmail.com
          </a>
        </div>
        <div className="flex gap-4">
          <strong>Blog</strong>
          <a
            href="https://velog.io/@groundwater/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            https://velog.io/@groundwater/posts
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
