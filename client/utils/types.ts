export interface PageProps {
  id: string;
  title: string;
  subTitle?: string;
  description: string;
}

export interface CardProps {
  id: number;
  name: string;
  passed: boolean;
  isFlipped: boolean;
  order: string;
  image: string;
}
