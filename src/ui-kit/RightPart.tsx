import { For, type Component } from 'solid-js';
import type { Section as TSection } from '@/types';
import AboutMe from './AboutMe';
import Section from './Section';

type RightPartProps = {
  aboutMe: string[];
  sections: TSection[];
};

const RightPart: Component<RightPartProps> = ({ aboutMe, sections }) => (
  <div class="flex flex-col gap-[3rem] mb-[140px]">
    <AboutMe text={aboutMe} />
    <For each={sections}>
      {(section) => (
        <Section id={section.id} title={section.title} cards={section.cards} />
      )}
    </For>
  </div>
);

export default RightPart;
