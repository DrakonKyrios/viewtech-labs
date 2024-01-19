import tw from "tailwind-styled-components";
import styled from "styled-components";
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
const ResumeContainerStyled = tw.section`bg-regal-blue px-8 pt-2 flex flex-wrap font-bit background relative h-[calc(100vh-210px)] flex overflow-hidden`;
const JobContainerStyled = tw.div`w-[660px] h-[calc(100vh-230px)] overflow-y-auto pr-2
[&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-track]:bg-slate-700
dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`;
const JobDetailStyled = tw.div`w-[600px] text-white ml-8 mt-4`;
const JobEmptyStyled = tw.div`flex-1 w-full text-white ml-8 mt-[200px] text-2xl`;
const JobCardStyled = tw.div`w-[600px] h-[200px]  border-blue-50 border-2 bg-regal-blue rounded-sm text-white overflow-hidden flex-1 mr-2 p-4 cursor-pointer flex flex-col`;
const CastleStyled = tw.span`w-[351px] h-[200px] bg-castle bg-cover bg-no-repeat absolute right-0 bottom-0`;
const AdventurerStyled = tw.span`w-[24px] h-[54px] bg-adventurer bg-contain bg-no-repeat absolute z-10`;
const Adventurer2Styled = tw.span`w-[24px] h-[54px] bg-adventurer2 bg-contain bg-no-repeat absolute z-20`;
const LevelUpStyled = tw.span`w-[24px] h-[54px] bg-level-up bg-contain bg-no-repeat absolute z-20 animate-bounce`;

const JobSubDetails = ({ job }) => {
  return (
    <div className="text-xl text-gray-400 mb-4 pl-2 flex justify-between">
      <span className="">
        <FontAwesomeIcon icon={faCalendarDays} /> {job.dates}{" "}
      </span>
      <span className="">
        <FontAwesomeIcon icon={faEarthAmerica} /> {job.location}{" "}
      </span>
    </div>
  );
};

const path = [
  [301, 2],
  [274, 6],
  [247, 9],
  [220, 12],
  [193, 15],
  [166, 19],
  [139, 24],
  [119, 40],
  [85, 65],
];
const generateJobCard = (job, onClickHandler, index) => {
  return (
    <JobCardStyled onClick={() => onClickHandler(job, index)}>
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

  const getHeight = (index, length) =>
    54 - (26 * (length - 1 - index)) / (length - 1);

  return (
    <ResumeContainerStyled>
      <JobContainerStyled>
        {jobs.map((job, index) => {
          return (
            <div className="flex items-center mb-4">
              {generateJobCard(job, onClickHandler, index)}
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
      {jobDetail ? (
        <div>
          {path[jobs.length - 1 - jobDetail.index][0] <= 119 ? (
            <AdventurerStyled
              style={{
                right: `${path[jobs.length - 1 - jobDetail.index][0]}px`,
                bottom: `${path[jobs.length - 1 - jobDetail.index][1]}px`,
                height: `${getHeight(jobDetail.index, jobs.length)}px`,
              }}
            />
          ) : (
            <Adventurer2Styled
              style={{
                right: `${path[jobs.length - 1 - jobDetail.index][0]}px`,
                bottom: `${path[jobs.length - 1 - jobDetail.index][1]}px`,
                height: `${getHeight(jobDetail.index, jobs.length)}px`,
              }}
            />
          )}
          {jobDetail.levelUp ? (
            <LevelUpStyled
              style={{
                right: `${path[jobs.length - 1 - jobDetail.index][0] - 10}px`,
                bottom: `${path[jobs.length - 1 - jobDetail.index][1]}px`,
                height: `${getHeight(jobDetail.index, jobs.length) + 60}px`,
                width: `${getHeight(jobDetail.index, jobs.length) + 24}px`,
              }}
            />
          ) : null}
          <CastleStyled />
        </div>
      ) : null}
    </ResumeContainerStyled>
  );
};

export default Resume;
