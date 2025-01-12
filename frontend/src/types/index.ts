export type LinkType = {
  text: string;
  href: string;
};

export type CardProps = {
  date: string;
  href?: string;
  title: string;
  description: string;
  certificate?: boolean;
  tags?: string[];
};
