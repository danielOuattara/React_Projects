import React from "react";

import { connect } from "react-redux";

import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

import React, { Component } from "react";

class AppClass extends Component {
  render() {
    return (
      <>
        {this.props.login ? (
          <div className="loading">
            <h1>Loading data, please...</h1>
          </div>
        ) : (
          <main>
            <Navbar />
            <CartContainer />
          </main>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(AppClass);
