import type { Component } from 'solid-js';

import crossIcon from '@/assets/cross.svg';

type CardTagProps = {
  tag: string;
  active?: boolean;
  onClick?: (e: MouseEvent) => void;
};

const CardTag: Component<CardTagProps> = ({ tag, active, onClick }) => {
  if (active) {
    return (
      <button
        type="button"
        class="rounded-full overflow-hidden text-black border-accent bg-accent border-[1px] hover:opacity-80"
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e);
        }}
      >
        <div class="flex items-center gap-[0.4rem] py-[0.1rem] px-[0.8rem]">
          <div>
            <img src={crossIcon} alt="cross" />
          </div>
          <div class="font-light text-[1.4rem]">{tag}</div>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      class="rounded-full overflow-hidden text-accent border-accent border-[1px] hover:text-black hover:bg-accent"
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
    >
      <div class="font-light text-[1.4rem] py-[0.1rem] px-[0.8rem] ">{tag}</div>
    </button>
  );
};

export default CardTag;
