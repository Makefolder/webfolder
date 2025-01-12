import { CardProps, LinkType } from '@/types';
import { createMemo, Setter } from 'solid-js';

export const scrollToSection = (
  e: MouseEvent,
  href: string,
  offset: number = -140
): void => {
  e.preventDefault();
  const section = document.querySelector(href);

  if (section) {
    const sectionTop: number =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop + offset,
      behavior: 'smooth',
    });
  }
};

export const filterCards = (tags: string[], cards: CardProps[]) => {
  return createMemo(() =>
    cards.filter((project) =>
      tags.every((tag) =>
        project.tags?.some((projectTag) => projectTag === tag)
      )
    )
  );
};

export const handleIntersection = (
  entries: IntersectionObserverEntry[],
  setActive: Setter<LinkType>,
  links: LinkType[]
) => {
  const visibleSections = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

  if (visibleSections.length > 0) {
    const closestSection = visibleSections[0].target as HTMLElement;
    setActive(
      links.find((link) => link.href === `#${closestSection.id}`) ?? links[0]
    );
  }
};
