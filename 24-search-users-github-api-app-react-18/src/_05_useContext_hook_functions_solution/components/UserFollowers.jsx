import { useGitHubContext } from "../context";
import { UserFollowersWrapper } from "./wrappers";

//---------------------------------------------------

export default function Followers() {
  const { followers } = useGitHubContext();
  return (
    <UserFollowersWrapper>
      <div className="followers">
        {followers?.map((person) => (
          <a
            key={person.id}
            href={person.html_url}
            style={{
              backgroundColor: "rgb(237, 240, 243)",
              borderRadius: "5px",
              color: "grey",
            }}
          >
            <article>
              <img src={person.avatar_url} alt={person.name} />
              <div>
                <h4>{person.login}</h4>
                {person.html_url}
              </div>
            </article>
          </a>
        ))}
      </div>
    </UserFollowersWrapper>
  );
}
