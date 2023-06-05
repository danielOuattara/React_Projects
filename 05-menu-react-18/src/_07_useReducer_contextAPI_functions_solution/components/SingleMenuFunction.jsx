export default function SingleMenuFunction(props) {
  return (
    <article key={props.id} className="menu-item">
      <img className="photo" src={props.img} alt={props.title} />
      <div className="item-info">
        <header>
          <h4 className="title">{props.title}</h4>
          <h4 className="price">${props.price}</h4>
        </header>
        <p className="item-text">{props.desc}</p>
      </div>
    </article>
  );
}
