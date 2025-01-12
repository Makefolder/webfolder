import { For, Show, JSXElement, type Component } from 'solid-js';

import certIcon from '@/assets/certificate.svg';
import linkArrow from '@/assets/link-arrow.svg';

type CardProps = {
  date: string;
  href?: string;
  title: string;
  tags?: string[];
  description: string;
  certificate?: boolean;
};

const CardWrapper: Component<{ children: JSXElement; href?: string }> = ({
  children,
  href,
}) => {
  if (href) {
    return (
      <a href={href} class="block" target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return <div class="cursor-default">{children}</div>;
};

const Card: Component<CardProps> = (props) => {
  const { date, title, description, href, tags, certificate } = props;
  return (
    <CardWrapper href={href}>
      <div class="p-[1.8rem] flex justify-between items-start gap-[0.8rem] rounded-[0.6rem] overflow-hidden border-[1px] border-transparent hover:bg-card-bg hover:border-card-stroke">
        <div class="uppercase text-dark-white">{date}</div>
        <div class="max-w-[30rem] flex-1">
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
          <p class="mt-[1rem] mb-[2.1rem]">{description}</p>
          <Show when={tags}>
            <div class="flex items-center gap-[0.8rem] flex-wrap">
              <For each={tags}>
                {(tag) => (
                  <button class="rounded-full overflow-hidden border-accent border-[1px]">
                    <div class="text-accent font-light text-[1.4rem] py-[0.2rem] px-[0.8rem] ">
                      {tag}
                    </div>
                  </button>
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
