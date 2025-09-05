import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Video Editing",
    description:
      "I create engaging and professional video content by cutting, trimming, and enhancing footage, adding effects, transitions, and audio to tell a compelling story.",
  },
  {
    id: 2,
    title: "Graphic Designing",
    description:
      "I design visually appealing graphics, logos, and branding materials that communicate ideas effectively and leave a lasting impression.",
  },
  {
    id: 3,
    title: "Data Entry",
    description:
      "I manage and input data accurately and efficiently, ensuring information is organized, up-to-date, and easily accessible for analysis and decision-making.",
  },
  {
    id: 4,
    title: "Frontend Development",
    description:
      "I build responsive and interactive websites using HTML, CSS, and JavaScript, ensuring a seamless user experience across devices.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in video editing, graphic designing, data entry, and frontend development, delivering quality work that meets client needs efficiently.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity, precision, and technical expertise to provide solutions that are visually appealing, accurate, and functional.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role) => (
          <Roles role={role} key={role.id} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
