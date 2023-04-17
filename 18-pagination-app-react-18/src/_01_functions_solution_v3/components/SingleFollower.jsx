import { Link } from "react-router-dom";

export default function Follower({ avatar_url, html_url, login, id }) {
  return (
    <Link to={`/followers/${login}`}>
      <article className="card">
        <img src={avatar_url} alt={login} />
        <h4>{login}</h4>
        <p className="btn">view profile</p>
      </article>
    </Link>
  );
}
