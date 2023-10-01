import Image from "next/image";
interface Props {
  title: string;
  link: string;
  img: string;
}

const ProjectCard = ({ title, link, img }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-80 h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group ">
        <Image className="object-cover" src={img} alt="Amazonclone" fill />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
