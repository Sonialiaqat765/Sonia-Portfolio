import person from "../../assets/images/Eg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt="Portrait of Sonia Rani"
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            I am a Professional UI/UX Designer & Multimedia Specialist
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p>
              I create engaging and user-friendly digital experiences as a{" "}
              <span className="bg-highlight">UI/UX Designer</span> and{" "}
              <span className="bg-highlight">Broadcast Specialist</span>. 
              My expertise includes <span className="bg-highlight">Graphic Design</span>,{" "}
              <span className="bg-highlight">Video Editing</span>, and producing professional multimedia content.
            </p>
            <p className="mt-3">
              I have also worked on <span className="bg-highlight">MS Office projects</span> 
              and prepared <span className="bg-highlight">SRS design documents</span>, 
              delivering high-quality results using <span className="bg-highlight">Adobe Photoshop</span>,{" "}
              <span className="bg-highlight">Illustrator</span>, <span className="bg-highlight">Premiere Pro</span>,{" "}
              <span className="bg-highlight">Canva</span>, and <span className="bg-highlight">CapCut</span>.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center gap-4">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="">
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary text-xs xxs:text-[14px] sm:text-[16px]`}
              href="https://drive.google.com/file/d/15jAh2QOUGTihPkMi6_3_6APnCr6q7-vc/view?usp=sharing">
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
