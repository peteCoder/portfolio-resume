import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Python" link="" />
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput title="Redux Toolkit" link="" />

        <SkillsInput title="Django" link="https://www.djangoproject.com/" />
        <SkillsInput
          title="Flask"
          link="https://flask.palletsprojects.com/en/3.0.x/"
        />

        <SkillsInput title="MySQL" link="https://www.mysql.com/" />
        <SkillsInput title="PostgreSQL" link="https://www.postgresql.org/" />
        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput title="Sanity.io" link="https://www.sanity.io/" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput
          title="Atom"
          link="https://github.blog/2022-06-08-sunsetting-atom/"
        />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Canva" link="https://www.canva.com/" />

        <SkillsInput title="Vercel" link="https://vercel.com/" />
        <SkillsInput title="netlify" link="https://www.netlify.com/" />
        <SkillsInput title="Heroku" link="https://www.heroku.com/" />
        <SkillsInput title="Render" link="https://www.render.com/" />
      </div>
    </div>
  );
};

export default Skills;
