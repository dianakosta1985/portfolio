export interface PageProps {
  id: string;
  title: string;
  subTitle?: string;
  // Postgres returns the column lowercased
  subtitle?: string;
  description: string;
}
