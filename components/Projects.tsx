import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={"/img/projects/inventory.png"}
          title="Inventory Mgt. System Demo"
          link="https://inventory-management-system-chba.onrender.com"
        />
        <ProjectCard
          img={"/img/projects/shareme.png"}
          title="ShareMe Socials"
          link="https://peter-shareme-website.netlify.app"
        />
        <ProjectCard
          img={"/img/projects/tslnigeriatvapp.png"}
          title="TSLNigeria TV App"
          link="https://play.google.com/store/apps/details?id=com.tslnigeria.tslnigeriatv"
        />
        <ProjectCard
          img={"/img/projects/tslweb.png"}
          title="TSLNigeria TV Web"
          link="https://streamit-frontend-ten.vercel.app/"
        />
        <ProjectCard
          img={"/img/projects/fitness.png"}
          title="Fitness Website"
          link="https://peter-fitness-website-demo.netlify.app/"
        />
        <ProjectCard
          img={"/img/projects/music-pro.png"}
          title="Music Website"
          link="https://music-pro-eta.vercel.app/"
        />
        <ProjectCard
          img={"/img/projects/crypto.png"}
          title="Crypto Website"
          link="https://cpcrypt.onrender.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
