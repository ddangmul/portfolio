import { projects } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, Github } from "lucide-react";
import { StickyNav } from "@/components/sticky-nav";
import Experience from "@/components/experience";

interface pageProps {
  params: Promise<{
    project: string;
  }>;
}

export default async function ProjectDetailPage({ params }: pageProps) {
  const projectTitle = (await params).project;
  const project = projects.find((project) => project.title === projectTitle);

  if (!project) return notFound();

  return (
    <main>
      <StickyNav />
      <div className="px-4 md:px-10 lg:px-20 xl:px-60 flex flex-col gap-10 mt-20 md:mt-38 lg:mt-24">
        {/* 프로젝트 개요 */}
        <section
          id="overview"
          className="md:mb-4 md:flex md:justify-between md:items-center scroll-mt-40"
        >
          <div>
            <h1
              className={`text-5xl mb-2 ${
                project.title === "HyangNang" ? "font-serif" : "font-bold"
              }`}
            >
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="md:flex gap-4 hidden lg:hidden ">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3f3f3f] text-white rounded-sm shadow hover:bg-[#252525] transition"
            >
              <ExternalLink size={16} />
              Live Site
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffffff] rounded-sm drop-shadow hover:bg-[#f2f2f2]  transition"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col basis-1/2 gap-2">
            <div>
              {project.period?.map(({ label, value }) => (
                <p key={label} className="flex flex-justify">
                  <strong className="mr-4">{label}</strong>
                  {value}
                </p>
              ))}
            </div>
            <div>
              <strong className="block">개요</strong>
              <p className="mt-2">{project.overview}</p>
            </div>
            <div className="flex gap-4 mt-4 md:hidden lg:flex">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3f3f3f] text-white rounded-sm shadow hover:bg-[#252525] transition"
              >
                <ExternalLink size={16} />
                Live Site
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffffff] rounded-sm drop-shadow hover:bg-[#f2f2f2]  transition"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
          <div className="lg:basis-1/2 relative aspect-video">
            <Image
              src={project.image}
              alt={`${project.title} main image`}
              fill
              className="object-contain object-top rounded-md"
            />
          </div>
        </section>

        {/* 기술 스택 */}
        <section id="tech-stack" className="mb-4 scroll-mt-40 md:scroll-mt-32">
          <p className="text-lg font-bold mb-2">사용 기술 스택</p>
          <table className="w-full table-auto text-sm">
            <tbody>
              {project?.techStack.map(({ label, value }) => (
                <tr key={label} className="border-b border-gray-200">
                  <td className="font-semibold py-1 pr-4 align-top w-32">
                    {label}
                  </td>
                  <td className="py-1">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 주요 기능 */}
        <section id="features" className="mb-4 scroll-mt-40 md:scroll-mt-32">
          <p className="text-lg font-bold">주요 기능</p>
          <ul className="list-disc list-inside mt-4 space-y-1">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        {/* 문제 해결 경험 */}
        <Experience project={project} />
        {/* 반응형 디자인 */}
        <section
          id="responsive-design"
          className="min-h-[950px] scroll-mt-40 md:scroll-mt-32 mb-10"
        >
          <h2 className="text-lg font-bold mb-4">반응형 디자인</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* 모바일 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <p className="font-medium text-sm mb-2">Mobile</p>
              <video
                src={project?.vedio.mobile}
                autoPlay
                muted
                loop
                playsInline
                className="w-[220px] rounded-md border"
              />
            </div>

            {/* 태블릿 */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <p className="font-medium text-sm mb-2">Tablet</p>
              <video
                src={project?.vedio.pad}
                autoPlay
                muted
                loop
                playsInline
                className="w-[340px] rounded-md border"
              />
            </div>

            {/* PC */}
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 md:col-span-2 xl:col-auto">
              <p className="font-medium text-sm mb-2">PC</p>
              <video
                src={project?.vedio.pc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-[500px] rounded-md border"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
