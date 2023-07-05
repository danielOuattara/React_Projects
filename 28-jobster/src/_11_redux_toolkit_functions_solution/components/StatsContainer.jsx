import { StatItem } from "./index";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { StatsContainerWrapper } from "../../assets/styles";
import { useSelector } from "react-redux";

export default function StatsContainer() {
  const { stats } = useSelector((store) => store.allJobsState);

  const defaultStatsItems = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <StatsContainerWrapper>
      {defaultStatsItems.map((item, index) => (
        <StatItem key={item.title} {...item} />
      ))}
    </StatsContainerWrapper>
  );
}
