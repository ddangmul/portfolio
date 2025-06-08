"use client";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="h-screen flex flex-col justify-center items-center text-center px-4 relative"
    id="home"
  >
    <h1 className="text-3xl md:text-4xl font-bold">정은경</h1>

    <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
      Frontend Developer
    </p>

    <p className="mt-4 text-base md:text-lg max-w-xl text-[#333]">
      기능과 사용자 경험을 함께 고민하며, <br />
      프로젝트를 통해 성장하고자 하는 개발자입니다.
    </p>

    <a
      href="#projects"
      aria-label="프로젝트 섹션으로 이동"
      className="mt-8 px-6 py-2 text-lg bg-[#ffffff] text-[#424442] border border-[#f8f8f8] drop-shadow rounded-lg hover:bg-[#f8f8f8] hover:border-[#f8f8f8] transition-colors font-semibold"
    >
      프로젝트 보기
    </a>

    <a
      href="#projects"
      className="absolute bottom-6 animate-bounce text-muted-foreground"
    >
      <ChevronDown size={28} />
    </a>
  </motion.section>
);

export default Hero;
