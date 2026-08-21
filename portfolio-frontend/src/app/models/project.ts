export interface Project {
  id: number;
  title: string;
  summary: string;
  status: string;
  technologies: string[];
  sourceCodeUrl: string | null;
  liveUrl: string | null;
}