import { For, type Component } from 'solid-js';
import type { Section } from '@/types';
import AboutMe from './AboutMe';
import Card from './Card';

type RightPartProps = {
  aboutMe: string[];
  sections: Section[];
};

const RightPart: Component<RightPartProps> = ({ aboutMe, sections }) => {
  return (
    <div class="flex flex-col gap-[3rem] mb-[140px]">
      <AboutMe text={aboutMe} />
      <For each={sections}>
        {(section) => (
          <section id={section.id}>
            <h2 class="mb-[2.8rem]">{section.title}</h2>
            <For each={section.cards}>
              {(card) => (
                <Card
                  date={card.date}
                  title={card.title}
                  description={card.description}
                  tags={card.tags}
                  href={card.href}
                  certificate={card.certificate}
                />
              )}
            </For>
          </section>
        )}
      </For>
    </div>
  );
};

export default RightPart;
