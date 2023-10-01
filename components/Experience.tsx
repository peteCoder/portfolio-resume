import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="KoolTech"
          subTitle="Backend Developer 2022 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="TSLNigeria"
          subTitle="Full stack Developer 2022 - 2023"
          icon={<SiReactivex />}
        />

        <ExperienceCard
          title="Fiverr"
          subTitle="Frontend Developer 2022 - 2023"
          icon={<SiFiverr />}
        />

        <ExperienceCard
          title="Freelancer"
          subTitle="Web Developer 2020 - 2021"
          icon={<SiFreelancer />}
        />
      </div>
    </div>
  );
};

export default Experience;
