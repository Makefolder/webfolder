import { handleIntersection, scrollToSection } from '@/lib';
import type { LinkType } from '@/types';
import {
  Accessor,
  For,
  onCleanup,
  onMount,
  Setter,
  type Component,
} from 'solid-js';

type NavbarProps = {
  links: LinkType[];
  active: Accessor<LinkType>;
  setActive: Setter<LinkType>;
};

const Navbar: Component<NavbarProps> = ({ links, active, setActive }) => {
  const isActive = (link: LinkType) => link.href === active().href;

  onMount(() => {
    const observer = new IntersectionObserver(
      (e) => handleIntersection(e, setActive, links),
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    onCleanup(() => observer.disconnect());
  });

  return (
    <nav class="flex flex-col gap-[0.5rem]">
      <For each={links} fallback={<div>Empty navbar &#58;&#40;</div>}>
        {(link) => (
          <div
            class={`flex items-center ${
              isActive(link) ? 'gap-[0.8rem]' : 'gap-0'
            }`}
          >
            <div
              class={`${
                isActive(link) ? 'w-[4rem]' : 'w-0'
              } h-[0.3rem] bg-white transition-all`}
            ></div>
            <a
              href={link.href}
              class={`${
                isActive(link) ? 'text-white' : 'text-dark-white'
              } text-[2rem]`}
              onClick={(e) => {
                setActive(link);
                scrollToSection(e, link.href);
              }}
            >
              {link.text}
            </a>
          </div>
        )}
      </For>
    </nav>
  );
};

export default Navbar;
