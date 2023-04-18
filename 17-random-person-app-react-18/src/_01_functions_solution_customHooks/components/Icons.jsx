import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const iconsListData = [
  {
    id: 1,
    icon: <FaUser />,
    "data-label": "name",
  },
  {
    id: 2,
    icon: <FaEnvelopeOpen />,
    "data-label": "email",
  },
  {
    id: 3,
    icon: <FaCalendarTimes />,
    "data-label": "age",
  },
  {
    id: 4,
    icon: <FaMap />,
    "data-label": "street",
  },
  {
    id: 5,
    icon: <FaPhone />,
    "data-label": "phone",
  },
  {
    id: 6,
    icon: <FaLock />,
    "data-label": "password",
  },
];

export default iconsListData;
