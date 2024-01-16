import tw from "tailwind-styled-components";
import styled from "styled-components";
import { jobs } from "../../utility/job.library";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEarthAmerica,
} from "@fortawesome/pro-duotone-svg-icons";
import arrowRight from "../../assets/6446272.png";
import { transform } from "../../utility/template.utility";
const ResumeContainerStyled = tw.section`bg-regal-blue px-8 pt-2 flex flex-wrap justify-between font-bit background relative h-[calc(100vh-234px)] flex overflow-hidden`;
const JobContainerStyled = tw.div`w-[660px] h-[calc(100vh-250px)] overflow-y-auto pr-2
[&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-track]:bg-slate-700
dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`;
const JobDetailStyled = tw.div`w-[600px] text-white`;
const JobCardStyled = tw.div`w-[600px] h-[200px]  border-blue-50 border-2 bg-regal-blue rounded-sm text-white overflow-hidden flex-1 mr-2 p-4 cursor-pointer flex flex-col`;
const CastleStyled = tw.div`w-[351px] h-[200px] bg-castle bg-cover bg-no-repeat absolute right-0 bottom-0`;

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

const generateJobCard = (job, onClickHandler) => {
  return (
    <JobCardStyled onClick={() => onClickHandler(job)}>
      <div className="flex-1">
        <div className="font-bold text-2xl">
          {job.position} <span>@ {job.company}</span>
        </div>
        <JobSubDetails job={job} />
        <div>{job.summary}</div>
      </div>
      <div className="text-right">Click For More &gt;</div>
    </JobCardStyled>
  );
};

export const Resume = () => {
  const [jobDetail, setJobDetail] = useState(null);

  const onClickHandler = (job) => {
    setJobDetail(job);
  };

  return (
    <ResumeContainerStyled>
      <JobContainerStyled>
        {jobs.map((job) => {
          return (
            <div className="flex items-center mb-4">
              {generateJobCard(job, onClickHandler)}
              <span className="inline-block h-full flex items-center w-6 h-6">
                {`${job.position}-${job.company}` ===
                `${jobDetail.position}-${jobDetail.company}` ? (
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
            className="[&>ul]:list-disc [&>ul]:ml-8 [&>ul]:mb-8 [&>p]:mb-8"
            dangerouslySetInnerHTML={{
              __html: transform(jobDetail.description),
            }}
          ></div>
        </JobDetailStyled>
      ) : null}

      {/* <CastleStyled /> */}
    </ResumeContainerStyled>
  );
};

export default Resume;
