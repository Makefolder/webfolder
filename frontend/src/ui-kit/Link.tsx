import type { Component, JSXElement } from 'solid-js';

type LinkProps = {
  href: string;
  children: JSXElement;
  class?: string;
};

const Link: Component<LinkProps> = ({ href, children, class: linkStyles }) => (
  <a href={href} class={linkStyles}>
    {children}
  </a>
);

export default Link;
