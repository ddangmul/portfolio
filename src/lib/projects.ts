import { Project } from "./type";

export const projects: Project[] = [
  {
    title: "HyangNang",
    description: "프래그런스 온라인 쇼핑몰 웹 애플리케이션",
    overview:
      "이 프로젝트는 Next.js, TypeScript 기반의 온라인 쇼핑몰 웹 애플리케이션으로, 상품 탐색부터 주문 및 결제까지의 전 과정을 구현했습니다. 소셜 로그인(OAuth), 결제 연동(TossPayments), DB설계(Prisma), SSR 최적화 등 실제 서비스를 위한 기술 스택과 문제 해결을 경험할 수 있었습니다.",
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
        value:
          "(개발 단계) SQLite3로 스키마 설계 및 데이터 구성 / (배포 단계) PostgreSQL로 전환",
      },
      { label: "API 통신", value: "Fetch API를 활용한 RESTful API 구현" },
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
          "소셜 로그인 사용자에게도 끊김 없는 UX를 제공하기 위한 인증 흐름 개선",
        content: [
          {
            label: "문제 상황",
            text: `NextAuth 기반으로 소셜 로그인을 구현했지만, 사용자가 주소를 저장할 때 userId가 전달되지 않아 API 호출에 실패하는 문제가 있었습니다.`,
          },
          {
            label: "원인 분석",
            text: `NextAuth의 세션 복원 시 jwt()에서 전달되는 user 객체가 비어 있어 token.id 값이 세팅되지 않는 것이 원인이었습니다.`,
            code: `  async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username ?? null;
        token.birthdate = user.birthdate ?? null;
        token.mobile = user.mobile ?? null;
      }

      if (account?.provider === "google" && account?.access_token) {
        token.accessToken = account.access_token; // 구글의 accessToken을 JWT에 추가
      }

      return token;
    },`,
          },
          {
            label: "해결 과정",
            text: `JWT 콜백 단계에서 token.email로 사용자를 DB에서 조회하여 token.id를 수동 설정하는 코드를 추가하고, 인증 흐름 전체를 다시 점검하여 로그인 직후뿐 아니라 세션 유지 중에도 사용자 정보가 안정적으로 유지되도록 처리했습니다.`,
            code: `   // 재로그인 시 user = undefined -> id 저장 안됨 등 문제 보완
      if (!token.id && token.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: token.email },
        });
        if (existingUser) {
          token.id = existingUser.id;
        }
      }
`,
          },
          {
            label: "성과 및 배운 점",
            text: `소셜 로그인 사용자도 문제없이 주소 저장이 가능해졌고, 인증 시스템의 구조와 세션 흐름을 깊이 이해하게 되었습니다.`,
          },
        ],
        stack: ["Next.js", "NextAuth", "Prisma", "OAuth", "JWT"],
      },
      {
        title: "주소 등록 기능 Context API로 리팩토링",
        subtitle: "유지보수성과 확장성을 고려해 상태 관리 구조를 재설계한 경험",
        content: [
          {
            label: "문제 상황",
            text: `주소 등록 페이지에서 상태 관리, 유효성 검사, API 호출 등이 모두 하나의 컴포넌트에 집중되어 있었습니다.`,
          },
          {
            label: "개선 목표",
            text: `역할 분리를 통해 코드 구조를 명확하게 만들고, 상태 재사용성을 높이고자 했습니다.`,
          },
          {
            label: "구현 내용",
            text: `Context API 기반 AddressProvider를 도입해 상태를 분리하고, 유효성 검사 로직도 커스텀 훅으로 추출하여 테스트 가능하게 개선했습니다.`,
            code: `
// address-context.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Address } from "@/assets/types/types";
import { AddressInput } from "../assets/types/types";
import { useSession } from "next-auth/react";

interface AddressContextType {
  addresses: Address[];
  fetchAddresses: () => Promise<void>;
  addAddress: (addressData: AddressInput) => Promise<void>;
  deleteAddress: (addresses: number[]) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();

  const fetchAddresses = async () => {
    setLoading(true);
    setError(null);
    try {
      if (status === "authenticated") {
        const res = await fetch("/api/address");
        const data = await res.json();
        if (data.success) {
          setAddresses(data.addresses);
        } else {
          throw new Error(data.message || "배송지 조회 실패");
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addAddress = async (addressData: AddressInput) => {
    setLoading(true);
    try {
      if (!session.user) {
        return;
      }
      setError(null);
      const res = await fetch("/api/address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "배송지 추가 실패");

      await fetchAddresses();
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteAddress = async (checkedIds: number[]) => {
    try {
      if (!session.user) {
        return;
      }

      if (checkedIds.length === 0) {
        setError(null);
        throw new Error("삭제할 주소를 선택해주세요.");
      }

      const res = await fetch("/api/delete-multiple", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: checkedIds }),
      });

      const result = await res.json();
      await fetchAddresses();
      if (!res.ok) {
        throw new Error(result.message || "주소 삭제 실패");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("주소 삭제 중 오류:", error);
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    if (status === "authenticated") fetchAddresses();
  }, [status]);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        fetchAddresses,
        addAddress,
        deleteAddress,
        loading,
        error,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

// validation.ts
export const validateNewAddress = (newAddress) => {
  const {
    addressname,
    postcode,
    address,
    addressMobile1,
    addressMobile2,
    addressMobile3,
  } = newAddress;

  if (!addressname.trim()) {
    toast.info("이름을 입력해주세요.");
    return false;
  }

  if (!postcode.trim()) {
     toast.info("우편번호를 입력해주세요.");
    return false;
  }

  if (!address.trim()) {
     toast.info("기본주소를 입력해주세요.");
    return false;
  }

  const { result } = validateMobileNumber(
    addressMobile1,
    addressMobile2,
    addressMobile3
  );

  console.log(result);

  if (!result) {
     toast.info("휴대폰 번호 형식이 올바르지 않습니다.");
    return false;
  }

  return true;
};

`,
          },
          {
            label: "성과 및 배운 점",
            text: `Context API를 통해 전역 상태를 효율적으로 관리하며 유연한 구조를 설계할 수 있었습니다. 컴포넌트 가독성과 유지보수성이 향상되었고, 커스텀 훅 분리로 유효성 검사의 테스트 가능성을 높일 수 있었습니다.`,
          },
        ],
        stack: ["React", "Next.js", "Context API", "TypeScript", "SQLite3"],
      },
      {
        title: "배포 환경 OAuth/DB 오류 해결 (.env 설정 문제)",
        subtitle: "환경 변수 설정 실수로 인한 배포 오류를 디버깅한 경험",
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
            text: `Vercel 대시보드에서 배포 서버 주소로 변경한 환경 변수를 추가하고, NEXT_PUBLIC_GOOGLE_REDIRECT_URI를 Vercel 환경 변수에 등록하기 전에 OAuth 콘솔에서 Authorized redirect URI에 Vercel URL을 등록했습니다.`,
          },
          {
            label: "성과 및 배운 점",
            text: `OAuth 인증 및 DB 연동이 안정적으로 작동했고, 환경 설정 자동화의 중요성을 체감할 수 있었습니다.`,
          },
        ],
        stack: ["Vercel", "Next.js", "Prisma", "OAuth", ".env"],
      },
      {
        title: "NextAuth 타입 확장으로 사용자 정보 활용 문제 해결",
        subtitle:
          "useSession에서 사용자 커스텀 필드를 안전하게 사용하는 방법 체득",
        content: [
          {
            label: "문제 상황",
            text: `NextAuth를 통해 로그인한 사용자 정보를 useSession()으로 가져올 때, 사용자 ID, 생년월일, 전화번호 등 커스텀 필드가 타입 미정으로 간주되어 TypeScript 에러가 발생했습니다.`,
          },
          {
            label: "원인 분석",
            text: `NextAuth의 기본 Session 타입은 email, name 정도만 포함돼 있어, 사용자 정의 필드는 타입 정의를 따로 확장하지 않으면 타입 추론이 되지 않았습니다.`,
          },
          {
            label: "해결 과정",
            text: `types 폴더에 next-auth.d.ts 파일을 생성하고 'next-auth' 모듈을 확장해 User, Session, JWT 타입에 필요한 커스텀 필드를 정의했습니다. 그리고 tsconfig.json 파일의 types에 'next-auth'가 들어가 있는지 점검했습니다. 이후 useSession()을 사용할 때, 타입 오류 없이 안전하게 사용자 데이터를 활용할 수 있었습니다.`,
            code: `import { Address } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {

  interface User {
    id: string;
    username: string;
    birthdate: string;
    mobile: string;
    provider: string;
  }

  interface Session {
    user: {
      id: string;
      username: string;
      birthdate: string;
      mobile: string;
      accessToken?: string;
      provider: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    email?: string | null;
    username?: string | null;
    birthdate?: string | null;
    mobile?: string | null;
    provider?: string;
  }
}
`,
          },
          {
            label: "성과 및 배운 점",
            text: `NextAuth의 타입을 확장한 덕분에 로그인 후 세션에서 사용자 이름, 생년월일 등 커스텀 정보를 안정적으로 활용할 수 있었고, 타입 안정성을 바탕으로 개발 생산성과 유지보수성이 향상되었습니다. 타입 확장의 필요성과 이점을 체감한 경험이었습니다.`,
          },
        ],
        stack: ["Next.js", "NextAuth", "TypeScript", "JWT", "Session"],
      },
    ],
  },
  {
    title: "REELPICK",
    description: "개인 맞춤형 영화 추천 웹 애플리케이션",
    overview:
      "이 프로젝트는 Next.js App Router와 TMDB API를 기반으로, 사용자의 영화 취향 태그를 분석하여 개인화된 추천 영화를 제공하는 웹 애플리케이션입니다. 태그 기반 필터링, 영화 상세 정보, 즐겨찾기 및 평가하기 기능 등을 포함하며, 반응형 UI 및 직관적인 UX를 통해 사용자 중심의 콘텐츠 탐색 경험을 구현했습니다. 실시간으로 변화하는 외부 데이터를 받아와 가공하는 구조를 경험했습니다.",
    period: [
      { label: "기간", value: "2025.05" },
      { label: "기여도", value: "개인 프로젝트 (100%)" },
    ],
    techStack: [
      { label: "프레임워크", value: "Next.js (App Router)" },
      { label: "라이브러리", value: "React (Hooks)" },
      { label: "언어", value: "TypeScript" },
      { label: "스타일링", value: "Tailwind CSS" },
      { label: "상태관리", value: "Zustand" },
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
      "즐겨찾기 등록/해제 및 별점 평가 기능 (로컬 스토리지 저장)",
      "반응형 디자인으로 다양한 디바이스에서 최적화된 UI 제공",
      "에러 핸들링으로 안정적인 사용자 경험 보장",
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
            code: `
 // src/utils/api.ts
// 공통 fetch 함수
async function fetchFromTMDB<T>(url: string, options: RequestInit = {}) {
  const headers: Record<string, string> = {
    accept: "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (TMDB_BEARER_TOKEN) {
    headers["Authorization"] = 'Bearer \${TMDB_BEARER_TOKEN}';
  }

  const res = await fetch(url, {
    method: "GET",
    headers,
    ...options,
  });

  if (!res.ok) throw new Error('TMDB fetch error: \${res.status}');
  return res.json() as Promise<T>;
}

// 컨텐츠 필터링 로직
function filterValidContent(results: TMDBContent[]) {
  return results.filter(
    (item) =>
      (item.title || item.name) &&
      item.backdrop_path &&
      item.poster_path &&
      item.overview &&
      item.vote_average &&
      item.vote_average !== 0
  );
}
`,
          },
          {
            label: "성과 및 배운 점",
            text: `다양한 API 쿼리 함수를 작성하며 외부 API 통신과 비동기 데이터 처리에 대한 이해를 높일 수 있었습니다. 사용자 입장에서 필요한 정보만 빠르게 확인할 수 있는 UI/UX를 구현할 수 있었습니다.`,
          },
        ],
        stack: ["TMDB API", "Fetch", "TypeScript", "Next.js", "Tailwind"],
      },
      {
        title: "사용자 맞춤형 영화 추천 시스템 설계",
        subtitle: "사용자 선호 장르 일치도에 따라 콘텐츠 실시간 갱신 로직 구현",
        content: [
          {
            label: "개선 목표",
            text: `사용자의 취향을 반영해 보다 개인화된 추천 결과를 제공하고자 했습니다.`,
          },
          {
            label: "구현 내용",
            text: `사용자가 별점 평가한 콘텐츠를 기반으로 선호도가 높은 장르를 선별해 API 쿼리를 동적으로 구성해 맞춤형 추천 콘텐츠를 정렬하도록 구현했습니다.`,
            code: `
// 평가한 콘텐츠 중 점수가 높은 장르 id 선별 
function getTopGenres(contents: TMDBContent[], topN = 3): number[] {
  const genreCountMap: Record<number, number> = {};

  contents.forEach((content) => {
    content.genres?.forEach((genre) => {
      genreCountMap[Number(genre.id)] =
        (genreCountMap[Number(genre.id)] || 0) + 1;
    });
  });

  const sortedGenres = Object.entries(genreCountMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, topN)
    .map(([id]) => Number(id));

  return sortedGenres;
}

// PersonalizedRecommendations.tsx : 선호도 높은 장르들로 API 쿼리 동적 구성
  useEffect(() => {
    if (ratedContents.length === 0) return;

    const fetchData = async () => {
      try {
        const genres = getTopGenres(ratedContents).map((genre) =>
          String(genre)
        );
        if (genres.length === 0) {
          setRecommendations([]);
          return;
        }

        const data = await fetchRecommendationsByGenreIds(genres, "movie");
        if (data) {
          setRecommendations(data);
        } else {
          setRecommendations([]);
        }
        setError(null);
      } catch (e) {
        setError("맞춤 컨텐츠 가져오기 실패");
      }
    };

    fetchData();
  }, [ratedContents]);
`,
          },
          {
            label: "성과 및 배운 점",
            text: `평가 내역을 기반으로 선호도를 추리고 API 쿼리를 동적으로 구성하면서 사용자 맞춤형 컨텐츠 제공을 위한 설계를 경험할 수 있었습니다.`,
          },
        ],
        stack: ["React", "Next.js", "Fetch", "TMDB API"],
      },
      {
        title: "태그 기반 영화 추천 시스템 설계",
        subtitle:
          "사용자 맞춤 태그를 제공하여 선택한 태그를 기반으로 콘텐츠 추천 설계 경험",
        content: [
          {
            label: "개선 목표",
            text: `사용자의 취향을 반영하면서도, 사용자가 직접 추천 태그를 선택할 수 있도록 하고자 했습니다.`,
          },
          {
            label: "구현 내용",
            text: `사용자가 콘텐츠를 평가하거나 저장할 때마다 장르 정보를 저장하는 헬퍼 함수를 통해 맞춤 태그를 생성했습니다. 생성된 맞춤 태그와 사용자가 선택한 태그는 Context API를 활용해 전역 상태로 관리하였고, 이를 기반으로 데이터를 가져올 수 있도록 API를 동적으로 구성했습니다.`,
            code: `
// helper.ts
export function saveGenres(
  content: TMDBContent,
  savedTags: string[],
  setSavedTags: (tags: string[]) => void
) {
  try {
    // 맞춤태그용 장르 저장
    const genres = content.genres?.map((genre: Genre) => genre.name) || [];
    if (genres.length) {
      // 중복저장 방지 Set
      const mergedTags = Array.from(new Set([...savedTags, ...genres]));
      setSavedTags(mergedTags);
    }
  } catch (err) {
    console.log("TMDB 장르 태그 불러오기 실패", err);
  }
}

// useTagStore.tsx
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type TagState = {
  savedTags: string[];
  selectedTags: string[];
  setSavedTags: (tagg: string[]) => void;
  setSelectedTags: (tags: string[]) => void;
};

export const useTagStore = create<TagState>()(
  persist(
    (set) => ({
      savedTags: [],
      selectedTags: [],
      setSavedTags: (tags) => set({ savedTags: tags }),
      setSelectedTags: (tags) => set({ selectedTags: tags }),
    }),
    { name: "TAGS" }
  )
);

// RecommendationsPage
      <div className="mt-10">
        {selectedTags.length <= 0 && <PersonalizedRecommendations />}
        <TagResults tags={selectedTags} category={mediaType} />
      </div>
      <TagSelectorModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSelectTags={(selected) => setSelectedTags(selected)}
        initialTags={[]}
      />

// TagResults.tsx : selectedTags로 API 동적 구성
useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchContentsByTags(tags, category);
        setContents(data);
        setError(null);
      } catch (err) {
        setError("태그에 해당하는 콘텐츠 불러오기 실패");
      } finally {
        setLoading(false);
      }
    };

    if (tags.length) fetchData();
  }, [tags, category]);
`,
          },
          {
            label: "성과 및 배운 점",
            text: `사용자 행동 데이터를 기반으로 동적으로 API를 구성한 경험을 통해, 사용자 맞춤형 UX를 위한 데이터 흐름과 상태 관리의 중요성을 체감했습니다. 사용자 입장에서 직관적인 추천 경험을 설계하는 시각을 기를 수 있었습니다.`,
          },
        ],
        stack: ["React", "Zustand", "Next.js", "Fetch", "TMDB API"],
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
            text: `이미지 데이터가 없는 경우를 대비해 디폴트 이미지를 저장하고, 이미지가 없을 때 디폴트 이미지가 렌더링되도록 처리하여 UI 안정성을 확보했습니다.`,
            images: ["/default-img.png", "/default-img-result.png"],
          },
          {
            label: "성과 및 배운 점",
            text: `UI 레이아웃 깨짐 현상이 사라지고, 사용자에게 일관되고 깔끔한 화면을 제공할 수 있게 되었습니다.`,
          },
        ],
        stack: ["TMDB API", "React", "Next.js", "Tailwind"],
      },
    ],
  },
];
