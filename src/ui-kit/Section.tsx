import { type Component, createMemo, createSignal, For, Show } from 'solid-js';
import type { Section as TSection } from '@/types';
import { filterCards } from '@/lib';
import CardTag from './CardTag';
import Card from './Card';

const Section: Component<TSection> = ({ id, title, cards }) => {
  const [tags, setTags] = createSignal<string[]>([]);
  const filteredCards = createMemo(() => filterCards(tags(), cards)());

  return (
    <section id={id}>
      <h2 class={`${tags().length === 0 && 'mb-[2.8rem]'}`}>{title}</h2>
      <Show when={tags().length > 0}>
        <div class="mt-[1.4rem] mb-[2.8rem] flex items-center flex-wrap gap-[0.8rem]">
          <For each={tags()}>
            {(tag) => (
              <CardTag
                tag={tag}
                active={true}
                onClick={() => {
                  setTags((prevTags) =>
                    prevTags.filter((prevTag) => prevTag !== tag)
                  );
                }}
              />
            )}
          </For>
        </div>
      </Show>
      <For each={filteredCards()}>
        {(card) => (
          <Card
            date={card.date}
            title={card.title}
            description={card.description}
            tags={card.tags}
            href={card.href}
            certificate={card.certificate}
            setTags={setTags}
          />
        )}
      </For>
    </section>
  );
};

export default Section;
