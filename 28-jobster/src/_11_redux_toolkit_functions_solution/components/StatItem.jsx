import { StatItemWrapper } from "./../../assets/styles";

export default function StatItem(props) {
  return (
    <StatItemWrapper color={props.color} bcg={props.bcg}>
      <header>
        <span className="count">{props.count}</span>
        <span className="icon">{props.icon}</span>
      </header>
      <h5 className="title">{props.title}</h5>
    </StatItemWrapper>
  );
}
