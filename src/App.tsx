import LeftPart from './ui-kit/LeftPart';
import RightPart from './ui-kit/RightPart';
import PageConsts from './consts';
import { Show } from 'solid-js';

export default function App() {
  const { name, subtitle, navLinks, socials, aboutMe, sections } = PageConsts;
  const isNoiseEnabled =
    (import.meta.env.VITE_BG_NOISE_ENABLED as string).toLowerCase() === 'true';
  return (
    <div>
      <Show when={isNoiseEnabled}>
        <div class="bg-noise"></div>
      </Show>
      <main class="flex justify-between flex-col items-center lg:flex-row lg:items-start min-h-screen max-w-[1174px] mx-auto px-[10px]">
        <LeftPart
          name={name}
          subtitle={subtitle}
          links={navLinks}
          socials={socials}
        />
        <div class="mt-[140px] max-w-[490px] flex-1">
          <RightPart aboutMe={aboutMe} sections={sections} />
        </div>
      </main>
    </div>
  );
}
