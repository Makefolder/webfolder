import PageConsts from './lib/consts';
import LeftPart from './ui-kit/LeftPart';
import RightPart from './ui-kit/RightPart';

import ellipse from './assets/Ellipse.svg';

export default function App() {
  const { name, subtitle, slogan, navLinks, socials, aboutMe, sections } =
    PageConsts;
  return (
    <div>
      <div class="bg-noise"></div>
{/*       <div class="fixed -top-[10rem] -right-[20rem] -z-10">
        <img src={ellipse} alt="ellipse" />
      </div> */}
      <main class="flex justify-between flex-col items-center lg:flex-row lg:items-start min-h-screen max-w-[1174px] mx-auto px-[10px]">
        <LeftPart
          name={name}
          subtitle={subtitle}
          slogan={slogan}
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
