import tw from "tailwind-styled-components";
import { jobs } from "../../utility/job.library";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDiamondExclamation,
  faEarthAmerica,
} from "@fortawesome/pro-duotone-svg-icons";
import arrowRight from "../../assets/6446272.png";
import { transform } from "../../utility/template.utility";
import ProjectSummary from "../../components/project-work.component";

const ResumeContainerStyled = tw.section`bg-primary-dark px-8 pt-2 flex-wrap font-futara background relative h-[calc(100vh-262px)] flex overflow-hidden`;
const JobContainerStyled = tw.div`w-[660px] h-[calc(100vh-262px)] overflow-y-auto pr-2
[&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-track]:bg-slate-700
dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`;
const JobDetailStyled = tw.div`w-[600px] text-white ml-8 mt-4`;
const JobEmptyStyled = tw.div`flex-1 w-full text-white ml-8 mt-[200px] text-2xl`;
const JobCardStyled = tw.div`w-[600px] bg-primary-lighter/5 shadow-lg rounded-sm text-white overflow-hidden flex-1 mr-2 p-4 cursor-pointer flex flex-col ${(
  props
) => (props.active ? "bg-primary-lighter/10" : "")}`;
const IdentifyStyled = tw.span`text-gray-400 inline-block`;

const JobSubDetails = ({ job }) => {
  return (
    <>
      <div className="text-xl text-gray-400 mb-4 pl-2 flex justify-between">
        <span className="">
          <FontAwesomeIcon icon={faCalendarDays} /> {job.dates}{" "}
        </span>
        <span className="">
          <FontAwesomeIcon icon={faEarthAmerica} /> {job.location}{" "}
        </span>
      </div>
      {job.term ? (
        <div className="text-md">
          <IdentifyStyled>Terms:&nbsp;</IdentifyStyled>
          {job.term}
        </div>
      ) : null}
      {job.stack ? (
        <div className="text-md">
          <IdentifyStyled>Stack:&nbsp;</IdentifyStyled>
          {job.stack}
        </div>
      ) : null}
      {job.libraries ? (
        <div className="text-md mb-2">
          <IdentifyStyled>Libraries:&nbsp;</IdentifyStyled>
          {job.libraries}
        </div>
      ) : null}
    </>
  );
};

const generateJobCard = (job, onClickHandler, index, active) => {
  return (
    <JobCardStyled active={active} onClick={() => onClickHandler(job, index)}>
      <div className="flex-1">
        <div className="font-bold text-2xl">
          {job.position} <span>@ {job.company}</span>
        </div>
        <JobSubDetails job={job} />
        <div className="text-md">{job.summary}</div>
      </div>
      <div className="text-right">Click For More &gt;</div>
    </JobCardStyled>
  );
};

export const Resume = () => {
  const [jobDetail, setJobDetail] = useState(null);

  const onClickHandler = (job, index) => {
    setJobDetail({ ...job, index });
  };

  return (
    <>
      <ProjectSummary />
      <ResumeContainerStyled>
        <JobContainerStyled>
          {jobs.map((job, index) => {
            return (
              <div className="flex items-center mb-4">
                {generateJobCard(
                  job,
                  onClickHandler,
                  index,
                  `${job.position}-${job.company}` ===
                    `${jobDetail?.position}-${jobDetail?.company}`
                )}
                <span className="inline-block h-full flex items-center w-6 h-6">
                  {`${job.position}-${job.company}` ===
                  `${jobDetail?.position}-${jobDetail?.company}` ? (
                    <img
                      className="animate-bounce-left w-full"
                      src={arrowRight}
                    />
                  ) : null}
                </span>
              </div>
            );
          })}
        </JobContainerStyled>
        {jobDetail ? (
          <JobDetailStyled>
            <div className="font-bold text-2xl">
              {jobDetail.position} <span>@ {jobDetail.company}</span>
            </div>
            <JobSubDetails job={jobDetail} />
            <div
              className="[&>ul]:list-disc [&>ul]:ml-8 [&>ul]:mb-8 [&>p]:mb-8 text-xl"
              dangerouslySetInnerHTML={{
                __html: transform(jobDetail.description),
              }}
            ></div>
          </JobDetailStyled>
        ) : (
          <JobEmptyStyled>
            <div className="text-center">
              <span className="block">
                <FontAwesomeIcon
                  className="h-16 w-16"
                  icon={faDiamondExclamation}
                />
              </span>
              No Job Selected
            </div>
          </JobEmptyStyled>
        )}
      </ResumeContainerStyled>
    </>
  );
};

export default Resume;
