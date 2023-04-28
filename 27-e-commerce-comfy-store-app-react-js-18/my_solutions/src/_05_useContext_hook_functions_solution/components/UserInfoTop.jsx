import { useGitHubContext } from "../context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { UserInfosTopWrapper } from "./../wrappers";
//---------------------------------------------------

export default function UserInfo() {
  const { gitHubUser } = useGitHubContext();
  const itemsToShow = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: gitHubUser.public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: gitHubUser.followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: gitHubUser.following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: gitHubUser.public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section">
      <UserInfosTopWrapper className="section-center">
        {itemsToShow.map((item) => (
          <article key={item.id} className="item">
            <span className={item.color}>{item.icon}</span>
            <div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          </article>
        ))}
      </UserInfosTopWrapper>
    </section>
  );
}
