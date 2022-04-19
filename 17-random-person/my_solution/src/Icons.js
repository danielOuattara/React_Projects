import React from "react";
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
    className: "icon",
    "data-label": "name",
  },
  {
    id: 2,
    icon: <FaEnvelopeOpen />,
    className: "icon",
    "data-label": "email",
  },
  {
    id: 3,
    icon: <FaCalendarTimes />,
    className: "icon",
    "data-label": "age",
  },
  {
    id: 4,
    icon: <FaMap />,
    className: "icon",
    "data-label": "street",
  },
  {
    id: 5,
    icon: <FaPhone />,
    className: "icon",
    "data-label": "phone",
  },
  {
    id: 6,
    icon: <FaLock />,
    className: "icon",
    "data-label": "password",
  },
];

export default iconsListData;
