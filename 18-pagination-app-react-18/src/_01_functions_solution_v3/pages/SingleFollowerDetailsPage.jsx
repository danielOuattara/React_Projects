import { useLoaderData, Link } from "react-router-dom";

export default function SingleFollowerDetailsPage() {
  const user = useLoaderData();

  return (
    <>
      <article className="card">
        <Link className="btn" to="/">
          {" "}
          Go back
        </Link>
        <img src={user.avatar_url} alt={user.login} />
        <ul style={{ textAlign: "left", margin: "40px" }}>
          {Object.entries(user).map((subArray) => {
            const [key, value] = subArray;
            return (
              <li
                style={{ textAlign: "left", margin: "10px 0 10px 10px" }}
                key={key}
              >
                {" "}
                <b>{key}</b> : {value}
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}

//-----------------------------------------------------------
export const singleFollowerLoader = async ({ params }) => {
  const response = await fetch(
    `https://api.github.com/users/${params.followerLogin}`,
  );
  if (!response.ok) {
    throw new Error("Could not fetch follower infos");
  }
  return response.json();
};
