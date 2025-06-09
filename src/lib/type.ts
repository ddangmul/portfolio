export interface Project {
  title: string;
  description: string;
  overview: string;
  period: { label: string; value: string }[];
  techStack: { label: string; value: string }[];
  liveUrl: string;
  repoUrl: string;
  image: string;
  vedio: { mobile: string; pad: string; pc: string };
  mainFeatures: string[];
  features: string[];
  contents: {
    title: string;
    subtitle: string;
    content: {
      label: string;
      text: string;
      code?: string;
      images?: string[];
    }[];
    stack: string[];
  }[];
}
