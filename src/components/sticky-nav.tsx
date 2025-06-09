/* eslint-disable @next/next/no-html-link-for-pages */
export const StickyNav = () => (
  <nav
    className="sticky top-16 z-40 bg-white/80 shadow-sm backdrop-blur-sm"
    style={{
      left: 0,
      right: 0,
      width: "100%",
    }}
  >
    <div className=" px-4 md:px-6 lg:px-10 xl:px-60 py-3">
      <div className="flex justify-between flex-wrap gap-4 text-sm font-medium">
        <a href="#overview" className="hover:text-[#a1a1a1]">
          프로젝트 개요
        </a>
        <a href="#tech-stack" className="hover:text-[#a1a1a1]">
          기술 스택
        </a>
        <a href="#features" className="hover:text-[#a1a1a1]">
          주요 기능
        </a>
        <a href="#problem-solving" className="hover:text-[#a1a1a1]">
          문제 해결 경험
        </a>
        <a href="#responsive-design" className="hover:text-[#a1a1a1]">
          반응형 디자인
        </a>
      </div>
    </div>
  </nav>
);
