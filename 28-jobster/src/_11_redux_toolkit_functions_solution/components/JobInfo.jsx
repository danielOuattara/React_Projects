import { JobInfoWrapper } from "../../assets/styles";

export default function JobInfo(props) {
  return (
    <JobInfoWrapper>
      <span className="icon">{props.icon}</span>
      <span className="text">{props.text}</span>
    </JobInfoWrapper>
  );
}
