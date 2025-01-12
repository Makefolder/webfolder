import { type Component, For } from 'solid-js';

type AboutMeProps = {
  text: string[];
};

const AboutMe: Component<AboutMeProps> = ({ text }) => {
  return (
    <div>
      <h3>About Me</h3>
      <For each={text} fallback={<p>Empty section &#58;&#40;</p>}>
        {(item) => <p>{item}</p>}
      </For>
    </div>
  );
};

export default AboutMe;
