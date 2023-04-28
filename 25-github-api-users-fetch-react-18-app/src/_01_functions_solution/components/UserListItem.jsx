export default function UserListItem({ person }) {
  return (
    <li>
      <img src={person.avatar_url} alt={person.login} />
      <div>
        <h4>{person.login}</h4>
        <a href={person.html_url} target="_blank" rel="noreferrer">
          Link to {person.login}
        </a>
      </div>
    </li>
  );
}
