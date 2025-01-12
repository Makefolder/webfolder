import { For, JSXElement, type Component } from 'solid-js';

type CardProps = {
  date: string;
  href?: string;
  title: string;
  description: string;
  tags?: string[];
};

const CardWrapper: Component<{ children: JSXElement; href?: string }> = ({
  children,
  href,
}) => {
  if (href) {
    return (
      <a href={href} class="block">
        {children}
      </a>
    );
  }
  return <div class="cursor-default">{children}</div>;
};

const Card: Component<CardProps> = (props) => {
  return (
    <CardWrapper href={props.href}>
      <div class="p-[1.8rem] flex justify-between items-start gap-[0.8rem] rounded-[0.6rem] overflow-hidden border-[1px] border-transparent hover:bg-card-bg hover:border-card-stroke">
        <div class="uppercase text-dark-white">{props.date}</div>
        <div class="max-w-[30rem] flex-1">
          <div class="font-medium text-white">{props.title}</div>
          <p class="mt-[1rem] mb-[2.1rem]">{props.description}</p>
          {props.tags && (
            <div class="flex items-center gap-[0.8rem] flex-wrap">
              <For each={props.tags}>
                {(tag) => (
                  <button class="rounded-full overflow-hidden border-accent border-[1px]">
                    <div class="text-accent font-light text-[1.4rem] py-[0.2rem] px-[0.8rem] ">
                      {tag}
                    </div>
                  </button>
                )}
              </For>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
