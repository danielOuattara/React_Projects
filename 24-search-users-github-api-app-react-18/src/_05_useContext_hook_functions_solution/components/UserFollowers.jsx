import { useGitHubContext } from "../context";
import { UserFollowersWrapper } from "./wrappers";

//---------------------------------------------------

export default function Followers() {
  const { followers } = useGitHubContext();
  return (
    <UserFollowersWrapper>
      <div className="followers">
        {followers?.map((person) => (
          <article key={person.id}>
            <img src={person.avatar_url} alt={person.name} />
            <div>
              <h4>{person.login}</h4>
              <a href={person.html_url}>{person.html_url}</a>
            </div>
          </article>
        ))}
      </div>
    </UserFollowersWrapper>
  );
}
