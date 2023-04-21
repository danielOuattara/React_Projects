import { useGitHubContext } from "../context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
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
      <Wrapper className="section-center">
        {itemsToShow.map((item) => (
          <article key={item.id} className="item">
            <span className={item.color}>{item.icon}</span>
            <div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          </article>
        ))}
      </Wrapper>
    </section>
  );
}

//---------------------------------------------------
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;
