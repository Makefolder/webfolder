import { createSignal, For, type Component } from 'solid-js';
import type { LinkType } from '@/types';
import Navbar from './Navbar';

type LeftPartProps = {
  name: string;
  subtitle: string;
  links: LinkType[];
  socials: {
    icon: string;
    href: string;
  }[];
};

const LeftPart: Component<LeftPartProps> = ({
  name,
  subtitle,
  links,
  socials,
}) => {
  const [active, setActive] = createSignal(links[0]);
  return (
    <div class="lg:sticky top-0 left-0 h-screen flex flex-col justify-between py-12 sm:py-[140px]">
      <div>
        <h1 class="text-[5rem] sm:text-[4.8rem] leading-[5rem] sm:leading-[4.4rem]">
          {name}
        </h1>
        <h2>{subtitle}</h2>
      </div>
      <Navbar links={links} active={active} setActive={setActive} />
      <div class="flex items-center gap-[3.2rem] justify-center lg:justify-start">
        <For each={socials} fallback={<div></div>}>
          {(social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              class="opacity-40 hover:opacity-100 w-[4.2rem] h-[4.2rem] sm:w-[3.4rem] sm:h-[3.4rem]"
            >
              <img
                src={social.icon}
                alt={social.href}
                class="object-contain w-full h-full"
              />
            </a>
          )}
        </For>
      </div>
    </div>
  );
};

export default LeftPart;
