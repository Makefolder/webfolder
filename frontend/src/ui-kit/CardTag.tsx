import type { Component } from 'solid-js';

type CardTagProps = {
  tag: string;
};

const CardTag: Component<CardTagProps> = ({ tag }) => {
  return (
    <button class="rounded-full overflow-hidden text-accent border-accent border-[1px] hover:text-black hover:bg-accent">
      <div class="font-light text-[1.4rem] py-[0.1rem] px-[0.8rem] ">{tag}</div>
    </button>
  );
};

export default CardTag;
