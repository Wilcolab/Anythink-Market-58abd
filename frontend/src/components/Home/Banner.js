 import React from "react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import {
  APPLY_TITLE_FILTER,
  SET_PAGE
} from "../../constants/actionTypes";
import agent from "../../agent";

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchTitle: (title, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, pager, payload }),
  onGetAll: (page, payload) => dispatch({ type: SET_PAGE, page, payload }),
});

const Banner = (props) => {
  const onHandleChange = (searchTerm) => {
    if(searchTerm.length > 3) {
      console.log(searchTerm);
      props.onSearchTitle(
        searchTerm,
        (page) => agent.Items.byTitle(searchTerm, page),
        agent.Items.byTitle(searchTerm)
      )
    }
    if(searchTerm.length === 0) {
      props.onGetAll(0, agent.Items.all(0));
    }
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input id="search-box" type="search" onChange={(e) => onHandleChange(e.currentTarget.value)}></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
