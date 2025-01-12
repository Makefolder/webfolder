import { type Component, For } from 'solid-js';

type AboutMeProps = {
  text: string[];
};

const AboutMe: Component<AboutMeProps> = ({ text }) => {
  return (
    <section id="about-me">
      <h2>About me</h2>
      <For each={text} fallback={<p>Empty section &#58;&#40;</p>}>
        {(item) => <p class="block mt-[1rem] text-justify">{item}</p>}
      </For>
    </section>
  );
};

export default AboutMe;
