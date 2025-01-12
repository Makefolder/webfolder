import { For, type Component } from 'solid-js';
import type { LinkType } from '@/types';
import Navbar from './Navbar';

type LeftPartProps = {
  name: string;
  subtitle: string;
  slogan?: string;
  links: LinkType[];
  socials: {
    icon: string;
    href: string;
  }[];
};

const LeftPart: Component<LeftPartProps> = ({
  name,
  subtitle,
  slogan,
  links,
  socials,
}) => {
  return (
    <div class="sticky top-0 left-0 h-screen flex flex-col justify-between py-[140px]">
      <div>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
        {slogan && <h3>{slogan}</h3>}
      </div>
      <Navbar links={links} active={links[0]} />
      <div class="flex items-center gap-[3.2rem]">
        <For each={socials} fallback={<div></div>}>
          {(social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              class="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img src={social.icon} alt={social.href} />
            </a>
          )}
        </For>
      </div>
    </div>
  );
};

export default LeftPart;
