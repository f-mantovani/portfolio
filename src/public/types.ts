export type Project = {
  _id: string;
  title: string;
  frontendLink?: string;
  backendLink?: string;
  liveAppLink?: string;
  description: string;
  isHighlight: boolean;
  techStack: string[];
  imageUrl?: string;
  cardImage?: string;
};
