export default function Photo(props) {
  return (
    <article className="photo">
      <img src={props.urls.regular} alt={props.alt_description} />
      <div className="photo-info">
        <div>
          <h4>{props.user.name}</h4>
          <p>likes: {props.likes}</p>
          <p>{props.description}</p>
        </div>
        <a href={props.user.portfolio_url}>
          <img
            src={props.user.profile_image.medium}
            alt={props.name}
            className="user-img"
          />
        </a>
      </div>
    </article>
  );
}
