import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  // Featured Projects
  {
    id: 1,
    image: card1,
    category: "VIDEO PROJECT",
    title: "Top 10 largest country in the World",
    description:
      "Created an engaging YouTube video showcasing the top 10 travel destinations with smooth transitions and animations.",
    link: "https://drive.google.com/file/d/10siDDD-C1pN6LxsW8zSJ3XiBOkPDCp5o/view?usp=sharing",
  },
  {
    id: 2,
    image: card2,
    category: "VIDEO PROJECT",
    title: "Fitness Animation Video",
    description:
      "Developed a visually appealing fitness animation video to demonstrate workouts and routines.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "ANIMATION",
    title: "Animation Video Project",
    description:
      "Produced an animated short video focusing on storytelling and motion graphics.",
    link: "https://drive.google.com/file/d/1JyuA7wMZWnfvPayDSyO_1gG7ugQUW5PY/view?usp=sharing",
  },
  // Graphic Design Project (combined logo, poster, thumbnail)
  {
    id: 4,
    image: card4,
    category: "GRAPHIC DESIGN",
    title: "Logo, Poster & Thumbnail Design",
    description:
      "Created a complete set of graphic design work including logos, posters, and YouTube thumbnails to enhance branding and visual appeal.",
    link: "https://docs.google.com/spreadsheets/d/1Pr-esqPW447rgFY9XmUkJt-4MR025nY2tAlrm8u_wKw/edit?usp=sharing",
  },
  // MS Word & Excel Projects
  {
    id: 5,
    image: card5,
    category: "MS WORD",
    title: "Document Project",
    description: "Completed a professional MS Word project for documentation purposes.",
    link: "https://drive.google.com/file/d/1hAEPeoE0WkhaQ-5ryAckMPmAc_TosDye/view?usp=sharing",
  },
  {
    id: 6,
    image: card6,
    category: "MS EXCEL",
    title: "Spreadsheet Project",
    description: "Created an organized MS Excel project for data analysis and reporting.",
    link: "https://docs.google.com/spreadsheets/d/10FwVAeg0RJ2cdzabZ7w1Osy7HMuDH2sx/edit?usp=drive_web&ouid=113067109740616901314&rtpof=true",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, including videos, graphic designs,
            and professional documentation projects.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects data={data} key={data.id} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
