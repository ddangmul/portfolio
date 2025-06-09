"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Project } from "@/lib/type";
import Image from "next/image";

export default function Experience({ project }: { project: Project }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const toggleCode = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };
  return (
    <section id="problem-solving" className="mb-4 scroll-mt-40 md:scroll-mt-32">
      <p className="text-lg font-bold">기술적 경험 및 문제 해결 사례</p>
      {project.contents.map((content, index) => (
        <details key={index} className="border rounded-md p-4 my-2">
          <summary className="font-semibold cursor-pointer">
            {content.title} –{" "}
            <span className="text-sm text-muted-foreground">
              {content.subtitle}
            </span>
          </summary>
          <ul className="space-y-1 mt-3">
            {content.content.map((section, idx) => {
              const sectionKey = `${content.title}-${idx}`;
              const isOpen = openSections[sectionKey] || false;

              return (
                <li key={idx}>
                  <div className="flex gap-2 items-center">
                    <strong>{section.label}</strong>
                    {section.code && (
                      <button
                        type="button"
                        onClick={() => toggleCode(sectionKey)}
                        className="flex items-center text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors px-2 py-1 rounded-sm border border-gray-300"
                      >
                        {isOpen ? "코드 숨기기" : "코드 보기"}
                      </button>
                    )}
                  </div>
                  <p>{section.text}</p>
                  {isOpen && section.code && (
                    <SyntaxHighlighter
                      language="javascript"
                      style={oneDark}
                      className="text-xs mt-2"
                    >
                      {String(section.code)}
                    </SyntaxHighlighter>
                  )}
                  {section.images && (
                    <ul className="flex gap-8 overflow-x-auto py-4 justify-center">
                      {section.images.map((image) => (
                        <li
                          key={image}
                          className="flex-shrink-0 w-60 h-40 relative"
                        >
                          <Image
                            src={image}
                            alt={image}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap gap-2 pt-3">
            <strong>사용 기술</strong>
            {content.stack.map((tech) => (
              <span
                key={tech}
                className="bg-[#eaeaea] px-2 py-0.5 rounded-sm text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </details>
      ))}
    </section>
  );
}
