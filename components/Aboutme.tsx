import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am a web developer adept in all stages of web development.
          Knowledgeable in user interfaces, testing and debugging processes.
          Bringing forth expertise in design, installation, testing and
          maintenance of web systems. Equipped with diverse and promising skill
          set. Proficient in an assortment of technologies, including Python,
          JavaScript, Django, React and MySQL. Able to effectively self-manage
          during independent projects, as well as collaborate in a team setting.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
