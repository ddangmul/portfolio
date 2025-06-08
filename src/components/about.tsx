export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 md:scroll-mt-24 mt-20 px-4 md:px-6 lg:px-10 xl:px-60 mb-20"
    >
      <h2 className="text-3xl font-semibold mb-8">About Me</h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          사용자를 최우선으로 생각하며 지속적으로 성장하는 프론트엔드
          개발자입니다. React와 TypeScript 등 최신 기술을 기반으로 웹 개발
          역량을 쌓아왔으며, 공식 문서와 온라인 강의를 적극 활용하여 자발적으로
          학습해왔습니다.
        </p>

        <p>
          비전공자임에도 불구하고 프론트엔드 개발을 선택한 이유는, 사용자와의
          직접적인 상호작용과 피드백을 통해 서비스를 지속적으로 개선해 나갈 수
          있다는 점에 큰 매력을 느꼈기 때문입니다.
        </p>

        <p>
          대학교에서는 미디어커뮤니케이션을 전공하며 영상 제작에 집중했고, 재학
          중 프리랜서 영상 편집가로 활동하며 기획, 제작, 피드백 반영에 이르는 전
          과정을 경험했습니다. 이를 통해 시각적 완성도뿐 아니라 사용자 니즈 파악
          및 일정 관리 능력을 자연스럽게 키울 수 있었습니다. 그러나 영상
          콘텐츠가 일방향적으로 소비된다는 한계를 느꼈고, 사용자와의 보다 깊이
          있는 상호작용이 가능한 웹 개발에 매력을 느껴 본격적으로 프론트엔드
          개발을 학습하게 되었습니다.
        </p>

        <p>
          앞으로는 다양한 이해관계자들과 원활히 소통하고, 성능 최적화와 사용자
          중심 설계를 통해 더 나은 경험을 제공하는 프론트엔드 개발자로
          성장하고자 합니다.
        </p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 border-l-4 border-gray-600 pl-4">
          강점
        </h3>
        <ul className="space-y-6 text-gray-700 text-lg leading-relaxed list-disc list-inside">
          <li>
            <strong>자기 주도적 학습과 문제 해결 역량</strong>
            <p className="mt-1 ml-4 text-gray-600">
              익숙하지 않았던 개념과 오류를 반복 학습과 실습을 통해 스스로
              해결하며 개발 역량을 꾸준히 키워왔습니다. 단순 구현을 넘어 사용자
              편의성을 고려한 기능 개선에 집중합니다.
            </p>
          </li>

          <li>
            <strong>사용자 중심의 사고방식</strong>
            <p className="mt-1 ml-4 text-gray-600">
              사용자의 관점에서 불편함을 최소화하고, 직관적인 UI/UX를 설계하기
              위해 기획 단계부터 흐름을 설계하고 반복적으로 개선해 나갑니다.
            </p>
          </li>

          <li>
            <strong>원활한 협업과 커뮤니케이션 능력</strong>
            <p className="mt-1 ml-4 text-gray-600">
              영상 제작 동아리 활동을 통해 팀 프로젝트를 기획·운영하며 역할
              분담, 일정 조율, 피드백 조정을 경험했습니다. 이러한 경험이 개발
              협업 환경에서도 큰 강점이 될 것이라 생각합니다.
            </p>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 border-l-4 border-gray-600 pl-4">
          인적사항
        </h3>
        <dl className="text-gray-700 text-lg leading-relaxed space-y-4">
          <div className="flex">
            <dt className="w-24 font-semibold">학력</dt>
            <dd>
              부경대학교 미디어커뮤니케이션학부 언론정보전공 (2022년도 졸업)
            </dd>
          </div>
          <div className="flex">
            <dt className="w-24 font-semibold">연락처</dt>
            <dd>
              <a
                href="tel:+821012345678"
                className="text-gray-700 hover:underline"
              >
                010-2963-7765
              </a>
            </dd>
          </div>
          <div className="flex">
            <dt className="w-24 font-semibold">이메일</dt>
            <dd>
              <a
                href="mailto:example@example.com"
                className="text-gray-700 hover:underline"
              >
                ddangmul.j@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex">
            <dt className="w-24 font-semibold">GitHub</dt>
            <dd>
              <a
                href="https://github.com/ddangmul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                https://github.com/ddangmul
              </a>
            </dd>
          </div>
          <div className="flex">
            <dt className="w-24 font-semibold">Blog</dt>
            <dd>
              <a
                href="https://velog.io/@groundwater/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                https://velog.io/@groundwater/posts
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </section>
  );
};
