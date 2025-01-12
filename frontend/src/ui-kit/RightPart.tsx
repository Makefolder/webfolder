import type { CardProps } from '@/types';
import { For, type Component } from 'solid-js';
import Card from './Card';

type RightPartProps = {
  aboutMe: string[];
  cardData: CardProps[];
};

const RightPart: Component<RightPartProps> = ({ aboutMe, cardData }) => {
  return (
    <div class="flex flex-col gap-[3rem]">
      <section>
        <h2>About me</h2>
        <For each={aboutMe} fallback={<p>Empty section &#58;&#40;</p>}>
          {(item) => <p class="block mt-[1rem]">{item}</p>}
        </For>
      </section>
      <section>
        <h2 class="mb-[2.8rem]">Education</h2>
        <For each={cardData}>
          {(card) => (
            <Card
              date={card.date}
              title={card.title}
              description={card.description}
              tags={card.tags}
            />
          )}
        </For>
      </section>
    </div>
  );
};

export default RightPart;
