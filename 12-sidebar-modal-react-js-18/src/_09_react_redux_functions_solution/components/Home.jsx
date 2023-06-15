import { FaBars } from "react-icons/fa";
import { connect } from "react-redux";
import { toggleModal, toggleSidebar } from "../redux/sidebar/sidebarActions";

function Home(props) {
  console.log(props);
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => props.handleToggleSidebar()}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => props.handleToggleModal()}>
        show modal NOW
      </button>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSidebar() {
      return dispatch(toggleSidebar());
    },

    handleToggleModal() {
      return dispatch(toggleModal());
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
