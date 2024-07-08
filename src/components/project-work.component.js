import pay2win from "../assets/pay-2-win.png";
import everythingbutwater from "../assets/everything-but-water.png";
import pwc from "../assets/pwc-2.png";
import cosmicInsight from "../assets/cosmic-insight-lol.png";
import npmjs from "../assets/reveling-text-npmjs.png";

import { faArrowAltCircleRight } from "@fortawesome/pro-duotone-svg-icons";
import tw from "tailwind-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectWork = tw.div`flex flex-row bg-primary-dark py-4`;
const ProjectWorkItem = tw.div`flex flex-1 flex-col cursor-pointer mr-4 items-center text-white`;
const ProjectWorkItemTitle = tw.div`text-center flex items-center justify-center`;

export default function ProjectSummary() {
  return (
    <ProjectWork>
      <ProjectWorkItem
        onClick={() =>
          window.open(
            "https://www.pwc.com/us/en/services/consulting/deals/digital-deals/junction.html",
            "_blank",
            "noopener, noreferrer"
          )
        }
      >
        <div className="w-48">
          <img className="w-full h-[120px]" alt="PwC Junction" src={pwc} />
        </div>
        <ProjectWorkItemTitle>
          <span className="inline-block mr-2">PwC Junction</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ProjectWorkItemTitle>
        <ProjectWorkItemTitle>React Typescript C# Jenkins</ProjectWorkItemTitle>
      </ProjectWorkItem>
      <ProjectWorkItem
        onClick={() =>
          window.open(
            "https://ashy-cliff-0e2dc6b10.5.azurestaticapps.net",
            "_blank",
            "noopener, noreferrer"
          )
        }
      >
        <div className="w-48 h-[120px] object-fill relative">
          <img
            className="w-full h-full"
            alt="Cosmic Insight LoL"
            src={cosmicInsight}
          />
          <span className="absolute bottom-0 w-full text-center bg-slate-400/40">
            (In Progress)
          </span>
        </div>
        <ProjectWorkItemTitle>
          <span className="inline-block mr-2">
            Cosmic Insight LoL <br />
          </span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ProjectWorkItemTitle>
        <ProjectWorkItemTitle>React Typescript C# Azure</ProjectWorkItemTitle>
      </ProjectWorkItem>
      <ProjectWorkItem
        onClick={() =>
          window.open("https://www.p2win.gg", "_blank", "noopener, noreferrer")
        }
      >
        <div className="w-48 h-[120px] object-fill relative">
          <img className="w-full h-full" alt="Pay-2-Win" src={pay2win} />
          <span className="absolute bottom-0 w-full text-center bg-slate-400/40">
            (In Progress)
          </span>
        </div>
        <ProjectWorkItemTitle>
          <span className="inline-block mr-2">Pay 2 Win</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ProjectWorkItemTitle>
        <ProjectWorkItemTitle>React Typescript Node.js</ProjectWorkItemTitle>
      </ProjectWorkItem>
      <ProjectWorkItem
        onClick={() =>
          window.open(
            "https://www.npmjs.com/package/@viewtech-labs/revealing-text",
            "_blank",
            "noopener, noreferrer"
          )
        }
      >
        <div className="w-48">
          <img className="w-full" alt="Revealing Text NPMJs" src={npmjs} />
        </div>
        <ProjectWorkItemTitle>
          <span className="inline-block mr-2">Revealing Text NPMjs</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ProjectWorkItemTitle>
        <ProjectWorkItemTitle>React Typescript</ProjectWorkItemTitle>
      </ProjectWorkItem>
      <ProjectWorkItem
        onClick={() =>
          window.open(
            "https://www.everythingbutwater.com",
            "_blank",
            "noopener, noreferrer"
          )
        }
      >
        <div className="w-48">
          <img
            className="w-full max-h-[120px]"
            alt="Everything But Water"
            src={everythingbutwater}
          />
        </div>
        <ProjectWorkItemTitle>
          <span className="inline-block mr-2">Everything But Water</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ProjectWorkItemTitle>
        <ProjectWorkItemTitle>jQuery KnockoutJs C#</ProjectWorkItemTitle>
      </ProjectWorkItem>
    </ProjectWork>
  );
}
