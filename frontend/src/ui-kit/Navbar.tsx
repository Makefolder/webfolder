import type { LinkType } from '@/types';
import { For, type Component } from 'solid-js';

type NavbarProps = {
  links: LinkType[];
  active: LinkType;
};

const Navbar: Component<NavbarProps> = ({ links, active }) => {
  const isActive = (link: LinkType) => link.href === active.href;
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
              } h-[0.3rem] bg-white`}
            ></div>
            <a
              href={link.href}
              class={`${
                isActive(link) ? 'text-white' : 'text-dark-white'
              } text-[2rem]`}
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
