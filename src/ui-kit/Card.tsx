import type { Component, JSXElement, Setter } from 'solid-js';
import { For, Show } from 'solid-js';

import certIcon from '@/assets/certificate.svg';
import linkArrow from '@/assets/link-arrow.svg';
import CardTag from './CardTag';
import { CardProp as ICardProp } from '@/types';

type CardProps = {
  date: ICardProp['date'];
  href?: string;
  title: string;
  tags: string[];
  description: string;
  certificate?: boolean;
  setTags: Setter<string[]>;
};

const CardWrapper: Component<{ children: JSXElement; href?: string }> = ({
  children,
  href,
}) =>
  href ? (
    <a href={href} class="block" target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <div class="cursor-default">{children}</div>
  );

const getDate = (date: ICardProp['date']) => {
  if (date.end) {
    if (date.start.getFullYear() === date.end.getFullYear())
      return date.end.getFullYear();
    return `${date.start.getFullYear()} - ${date.end.getFullYear()}`;
  }
  return `${date.start.getFullYear()} – Present`;
};

const CardContainer: Component<{
  children: JSXElement;
  date: ICardProp['date'];
}> = ({ children, date }) => (
  <div class="p-[1.8rem] flex justify-between items-start gap-[0.8rem] rounded-[0.6rem] overflow-hidden border-[1px] border-transparent hover:bg-card-bg hover:border-card-stroke">
    <div class="uppercase text-dark-white hidden sm:block">{getDate(date)}</div>
    {children}
  </div>
);

const CardHead: Component<{
  title: string;
  certificate?: boolean;
  href?: string;
}> = ({ title, certificate, href }) => {
  return (
    <div class="flex items-center gap-[0.8rem] font-medium text-white">
      <div>{title}</div>
      <Show when={certificate}>
        <div>
          <img src={certIcon} alt="certificate" />
        </div>
      </Show>
      <Show when={href}>
        <div>
          <img src={linkArrow} alt="link" />
        </div>
      </Show>
    </div>
  );
};

const CardTags: Component<{ tags: string[]; setter: Setter<string[]> }> = ({
  tags,
  setter,
}) => (
  <div class="flex items-center gap-[0.8rem] flex-wrap">
    <For each={tags}>
      {(tag) => (
        <CardTag
          tag={tag}
          onClick={(e) => {
            e.stopPropagation();
            setter((prevTags) => {
              if (prevTags.includes(tag)) {
                return prevTags;
              }
              return [...prevTags, tag];
            });
          }}
        />
      )}
    </For>
  </div>
);

const Card: Component<CardProps> = ({
  date,
  title,
  description,
  href,
  tags,
  certificate,
  setTags,
}) => (
  <CardWrapper href={href}>
    <CardContainer date={date}>
      <div class="max-w-full sm:max-w-[31rem] flex-1">
        <CardHead title={title} certificate={certificate} href={href} />
        <p class={`text-pretty mt-[1rem] ${tags.length > 0 && 'mb-[2.1rem]'}`}>
          {description}
        </p>
        <Show when={tags.length > 0}>
          <CardTags tags={tags} setter={setTags} />
        </Show>
      </div>
    </CardContainer>
  </CardWrapper>
);

export default Card;
