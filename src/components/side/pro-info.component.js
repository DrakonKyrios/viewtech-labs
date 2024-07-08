import tw from "tailwind-styled-components";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FunFact from "./fun-fact.component";

const ProfileAddress = tw.div`text-center flex justify-between`;
const ProfileLinks = tw.div`text-center flex justify-center grid grid-cols-8 gap-8 `;

export default function ProInfo() {
  return (
    <section className="mx-4 py-4 border-b-2 border-primary-lighter/20">
      <ProfileAddress>
        <div className="font-futura-medium">Residence:</div>
        <div>USA</div>
      </ProfileAddress>
      <ProfileAddress>
        <div className="font-futura-medium">Location:</div>
        <div>Newark, DE</div>
      </ProfileAddress>
      <FunFact />
      <ProfileLinks>
        <a
          className="inline-block col-start-4 text-primary-lighter"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DrakonKyrios?tab=repositories"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a
          className="inline-block text-primary-lighter"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DrakonKyrios?tab=repositories"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </ProfileLinks>
    </section>
  );
}
