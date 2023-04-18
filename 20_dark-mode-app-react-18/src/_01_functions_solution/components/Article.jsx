import moment from "moment";

export default function Article(props) {
  return (
    <article className="post">
      <h2>{props.title}</h2>
      <div className="post-info">
        <span>{moment(props.date).format("MM dddd Do YYYY")}</span>
        <span>{props.length} minutes read</span>
      </div>
      <p>{props.snippet}</p>
    </article>
  );
}
