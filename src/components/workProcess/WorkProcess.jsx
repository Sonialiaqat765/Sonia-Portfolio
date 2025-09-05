import WorkSteps from "./WorkSteps";

// Updated steps reflecting your real expertise
const workStepData = [
  {
    id: 1,
    title: "Research",
    description:
      "Understanding client requirements, video content goals, and graphic design needs to plan high-quality multimedia projects.",
    svgPath:
      "M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z", // magnifying glass
  },
  {
    id: 2,
    title: "Analyze",
    description:
      "Evaluating SRS documents, project data, and multimedia content to ensure clear, actionable insights for design and video work.",
    svgPath:
      "M4 4h24v24H4z", // simple chart/analysis placeholder
  },
  {
    id: 3,
    title: "Design",
    description:
      "Creating graphics, videos, and broadcast content using Adobe Photoshop, Illustrator, Premiere Pro, Canva, and CapCut Broadcast.",
    svgPath:
      "M2 16l14-14 14 14-14 14z", // diamond-style design icon
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "Producing final deliverables including MS Office projects, SRS design documents, and professional multimedia content for clients.",
    svgPath:
      "M4 6h24v20H4z", // document icon
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          I specialize in multimedia content creation, combining research, analysis, and design skills 
          to deliver engaging graphics, videos, and professional project documentation.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          From planning and analyzing requirements to designing and delivering final content, 
          I ensure every project meets professional standards and client expectations.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto">
        {workStepData.map((data, index) => (
          <WorkSteps
            data={data}
            style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
              index % 2 === 1 ? "xs:ms-3 xs:mt-6" : "xs:mb-6"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
