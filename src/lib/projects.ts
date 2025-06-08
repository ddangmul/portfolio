import { Project } from "./type";

export const projects: Project[] = [
  {
    title: "HyangNang",
    description: "프래그런스 온라인 쇼핑몰 웹 애플리케이션",
    overview:
      "이 프로젝트는 Next.js, TypeScript 기반의 온라인 쇼핑몰 웹 애플리케이션으로, 상품 탐색부터 주문 및 결제까지의 전 과정을 구현했습니다. 소셜 로그인(OAuth), 결제 연동(TossPayments), DB설계(Prisma), SSR 최적화 등 실제 서비스를 위한 기술 스택과 구조를 경험할 수 있었습니다.",
    period: [
      { label: "기간", value: "2025.03 - 2025.05" },
      { label: "기여도", value: "개인 프로젝트 (100%)" },
    ],
    techStack: [
      { label: "프레임워크", value: "Next.js (App Router)" },
      { label: "라이브러리", value: "React (with Context API, Hooks)" },
      { label: "언어", value: "TypeScript" },
      {
        label: "스타일링",
        value: "Tailwind CSS, Styled-components, Framer Motion",
      },
      { label: "인증", value: "OAuth (카카오, 구글)" },
      { label: "결제", value: "Toss Payments API" },
      {
        label: "데이터베이스",
        value: "SQLite3 (스키마 설계 및 초기 데이터 구성)",
      },
      { label: "API 통신", value: "Fetch API" },
      { label: "테스트", value: "Jest" },
      { label: "배포", value: "Vercel" },
    ],
    liveUrl: "https://online-shop-navy-two.vercel.app/",
    repoUrl: "https://github.com/ddangmul/new-mall-project",
    image: "/hyangnang.png",
    vedio: {
      mobile: "/hyangnang/mobile.mp4",
      pad: "/hyangnang/pad.mp4",
      pc: "/hyangnang/pc.mp4",
    },
    mainFeatures: [
      "OAuth 소셜 로그인 (NextAuth + Kakao/Google)",
      "장바구니 및 주문/결제 기능 구현",
      "SQLite3 기반 DB 설계 및 연동",
    ],
    features: [
      "상품 목록 페이지 및 상품 상세 페이지 구현",
      "장바구니 기능 및 수량/삭제 처리",
      "간단한 주문 흐름 및 확인 페이지",
      "토스페이먼츠 결제 연동 (결제창 생성, 응답 처리, 완료 후 리디렉션)",
      "SQLite3 기반 상품/주문 DB 설계 및 직접 관리",
      "카카오/구글 OAuth 소셜 로그인 기능 구현",
      "SSR을 적용한 초기 렌더링 최적화 (상품 목록 페이지)",
      "반응형 UI 및 사용자 친화적 인터페이스 제공",
    ],
    contents: [
      {
        title: "소셜 로그인 세션 복원 오류 해결 경험",
        subtitle:
          "소셜 로그인 사용자에게도 끊김 없는 UX를 제공하기 위한 인증 흐름 개선 프로젝트",
        content: [
          {
            label: "프로젝트 배경",
            text: `NextAuth 기반으로 소셜 로그인을 구현했지만, 사용자가 주소를 저장할 때 userId가 전달되지 않아 API 호출에 실패하는 문제가 있었습니다.`,
          },
          {
            label: "문제 분석",
            text: `NextAuth의 세션 복원 시 user 객체가 초기 상태로 비어 있어 token.id 값이 세팅되지 않는 것이 원인이었습니다.`,
          },
          {
            label: "해결 과정",
            text: `JWT 콜백 단계에서 token.email로 사용자를 DB에서 조회하여 token.id를 수동 설정하였고, 인증 흐름 전체를 다시 점검하여 로그인 직후뿐 아니라 세션 유지 중에도 사용자 정보가 안정적으로 유지되도록 처리했습니다.`,
          },
          {
            label: "성과 및 배운 점",
            text: `소셜 로그인 사용자도 문제없이 주소 저장이 가능해졌고, 인증 시스템의 구조와 세션 흐름을 깊이 이해하게 되었습니다.`,
          },
        ],
        stack: ["Next.js", "NextAuth", "Prisma", "OAuth", "JWT"],
      },
      {
        title: "주소 등록 기능 리팩토링 – Context API 도입",
        subtitle: "유지보수성과 확장성을 고려해 상태 관리 구조를 재설계한 경험",
        content: [
          {
            label: "프로젝트 배경",
            text: `주소 등록 페이지에서 상태 관리, 유효성 검사, API 호출 등이 모두 하나의 컴포넌트에 집중되어 있었습니다.`,
          },
          {
            label: "개선 목표",
            text: `역할 분리와 관심사 분리를 통해 코드 구조를 명확하게 만들고, 상태 재사용성을 높이고자 했습니다.`,
          },
          {
            label: "구현 내용",
            text: `Context API 기반 AddressProvider를 도입해 상태를 분리하고, 유효성 검사 로직도 훅으로 추출하여 테스트 가능하게 개선했습니다.`,
          },
          {
            label: "성과 및 인사이트",
            text: `컴포넌트 가독성과 유지보수성이 크게 향상되었고, 사용자 입장에서 더 빠르고 오류 없는 입력 경험을 제공할 수 있게 되었습니다.`,
          },
        ],
        stack: ["React", "Next.js", "Context API", "TypeScript", "SQLite3"],
      },
      {
        title: "배포 환경 OAuth/DB 오류 해결 (.env 설정 문제)",
        subtitle:
          "환경 설정 실수로 인한 배포 오류를 디버깅하고, 재현 가능한 설정 가이드를 만든 경험",
        content: [
          {
            label: "문제 상황",
            text: `Vercel에 배포된 프로젝트에서 OAuth 로그인이 작동하지 않고, DB 요청도 500 에러를 반환하는 문제가 있었습니다.`,
          },
          {
            label: "원인 분석",
            text: `로컬에서는 .env 파일이 설정돼 있었지만, Vercel에는 환경 변수가 누락되어 있었습니다.`,
          },
          {
            label: "해결 과정",
            text: `Vercel 대시보드에서 환경 변수를 추가하고, .env.example 템플릿을 작성해 재현 가능한 환경 구성을 만들었습니다.`,
          },
          {
            label: "성과 및 개선점",
            text: `OAuth 인증 및 DB 연동이 안정적으로 작동했고, 환경 설정 자동화의 중요성을 체감할 수 있었습니다.`,
          },
        ],
        stack: ["Vercel", "Next.js", "Prisma", "OAuth", ".env"],
      },
      {
        title: "Prisma 마이그레이션 오류 해결 및 DB 버전 관리 자동화",
        subtitle:
          "마이그레이션 실패 원인을 파악하고 재현 가능한 DB 상태를 관리하는 경험",
        content: [
          {
            label: "문제 발생",
            text: `Prisma 스키마 변경 후 migrate dev 명령이 실패하고 데이터베이스가 꼬이는 문제가 발생했습니다.`,
          },
          {
            label: "학습 및 해결",
            text: `Prisma 명령어들의 차이점을 학습하고, 마이그레이션 충돌 방지를 위한 규칙을 수립하며 자동화 스크립트를 구성했습니다.`,
          },
          {
            label: "성과",
            text: `프로젝트의 DB 변경 이력을 명확히 관리하고, 모든 환경에서 일관된 스키마 동기화를 실현했습니다.`,
          },
        ],
        stack: ["Prisma", "SQLite", "Next.js"],
      },
    ],
  },
  {
    title: "REELPICK",
    description: "개인 맞춤형 영화 추천 웹 애플리케이션",
    overview:
      "이 프로젝트는 Next.js App Router와 TMDB API를 기반으로, 사용자의 영화 취향 태그를 분석하여 개인화된 추천 영화를 제공하는 웹 애플리케이션입니다. 태그 기반 필터링, 영화 상세 정보, 즐겨찾기 기능 등을 포함하며, 반응형 UI 및 직관적인 UX를 통해 사용자 중심의 콘텐츠 탐색 경험을 구현했습니다.",
    period: [
      { label: "기간", value: "2025.05" },
      { label: "기여도", value: "개인 프로젝트 (100%)" },
    ],
    techStack: [
      { label: "프레임워크", value: "Next.js (App Router)" },
      { label: "라이브러리", value: "React (Hooks)" },
      { label: "언어", value: "TypeScript" },
      { label: "스타일링", value: "Tailwind CSS" },
      { label: "API 통신", value: "TMDB API, Fetch API" },
      { label: "배포", value: "Vercel" },
    ],
    liveUrl: "https://movie-recommendation-app-navy.vercel.app/",
    repoUrl: "https://github.com/ddangmul/movie-recommendation-app",
    image: "/reelpick.png",
    vedio: {
      mobile: "/reelpick/reelpick-mobile.mp4",
      pad: "/reelpick/reelpick-pad.mp4",
      pc: "/reelpick/reelpick-pc.mp4",
    },
    mainFeatures: [
      "사용자 선호 태그 기반 영화 추천 기능",
      "TMDB API 연동으로 실시간 영화 정보 제공",
      "즐겨찾기 및 태그 관리 기능 구현",
    ],
    features: [
      "영화 검색 및 실시간 추천 기능 구현",
      "태그 선택 기반의 개인화된 영화 목록 제공",
      "각 영화의 상세 정보 페이지 구성 (장르, 출연진, 줄거리 등)",
      "즐겨찾기 등록/해제 기능 (로컬 스토리지 저장)",
      "반응형 디자인으로 다양한 디바이스에서 최적화된 UI 제공",
      "에러 핸들링 및 로딩 상태 표시로 안정적인 사용자 경험 보장",
    ],
    contents: [
      {
        title: "TMDB API 연동 및 데이터 가공 최적화",
        subtitle: "API 응답 데이터 필터링과 사용자 친화적 구조 설계",
        content: [
          {
            label: "프로젝트 배경",
            text: `TMDB API는 다양한 언어와 포맷의 데이터를 제공하지만, 사용자에게는 핵심 정보만 깔끔하게 전달할 필요가 있었습니다.`,
          },
          {
            label: "해결 과정",
            text: `필요한 필드를 중심으로 API 응답을 재구성하고, 타입 정의와 예외 처리를 통해 안정적인 데이터 흐름을 설계했습니다.`,
          },
          {
            label: "성과",
            text: `사용자 입장에서 필요한 정보만 빠르게 확인할 수 있는 UI/UX를 구현할 수 있었습니다.`,
          },
        ],
        stack: ["TMDB API", "Fetch", "TypeScript", "Next.js"],
      },
      {
        title: "태그 기반 영화 추천 시스템 설계",
        subtitle:
          "사용자 입력에 따라 추천 결과가 실시간으로 갱신되는 로직 구현",
        content: [
          {
            label: "개선 목표",
            text: `사용자의 취향을 반영해 보다 개인화된 추천 결과를 제공하고자 했습니다.`,
          },
          {
            label: "구현 내용",
            text: `사용자가 별점 평가한 콘텐츠를 기반으로 선호도가 높은 태그를 선별한 후, 태그 선택에 따라 API 쿼리를 동적으로 구성하고 태그 일치도에 따라 추천 콘텐츠를 정렬하도록 구현했습니다.`,
          },
          {
            label: "성과",
            text: `사용자 맞춤 추천 기능이 도입되어 영화 탐색 경험의 만족도가 향상되었습니다.`,
          },
        ],
        stack: ["React", "Next.js", "Tailwind", "Fetch"],
      },
      {
        title: "출연진 이미지 데이터 누락 문제 해결",
        subtitle: "이미지 없는 인물 데이터로 인한 UI 깨짐 문제 방지",
        content: [
          {
            label: "문제 상황",
            text: `TMDB API에서 출연진 정보를 가져올 때 일부 인물의 이미지가 없어 기본 '엑스' 이미지가 표시되면서 UI 레이아웃이 깨지는 현상이 발생했습니다.`,
          },
          {
            label: "해결 과정",
            text: `이미지 데이터가 없는 경우를 대비해 디폴트 이미지를 추가하고, 이미지가 없을 때 디폴트 이미지가 렌더링되도록 처리하여 UI 안정성을 확보했습니다.`,
          },
          {
            label: "성과",
            text: `UI 레이아웃 깨짐 현상이 사라지고, 사용자에게 일관되고 깔끔한 화면을 제공할 수 있게 되었습니다.`,
          },
        ],
        stack: ["TMDB API", "React", "Next.js"],
      },
    ],
  },
];
