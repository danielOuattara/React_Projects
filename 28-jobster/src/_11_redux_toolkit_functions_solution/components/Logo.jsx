import logo from "./../assets/images/logo.svg";

export default function Logo(props) {
  return (
    <img
      src={logo}
      alt="logo"
      className={props.className ? props.className : "logo"}
    />
  );
}
