import { useGitHubContext } from "../context";
import { UseCardWrapper } from "../wrappers";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
//------------------------------------------------------------------

export default function UserCard() {
  const { gitHubUser } = useGitHubContext();
  return (
    <UseCardWrapper>
      <header>
        <img src={gitHubUser.avatar_url} alt={gitHubUser.name} />
        <div>
          <h4>{gitHubUser.name}</h4>
          <p>@{gitHubUser.twitter_username || ""}</p>
        </div>
        <a href={gitHubUser.html_url || ""} target="_blank" rel="noreferrer">
          follow
        </a>
      </header>
      <p className="bio">{gitHubUser.bio || ""}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness> {gitHubUser.company || ""}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {gitHubUser.location || ""}
        </p>
        <a href={`${gitHubUser.blog}`}>
          <MdLink></MdLink>
          {gitHubUser.blog}
        </a>
      </div>
    </UseCardWrapper>
  );
}

