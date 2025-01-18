export interface IAboutMe {
  paragraphs: string[];
}

export type Section = {
  title: string;
  id: string;
  cards: CardProp[];
};

export type LinkType = {
  text: string;
  href: string;
};

export type CardProp = {
  date: string;
  href?: string;
  title: string;
  description: string;
  certificate?: boolean;
  tags: string[];
};
