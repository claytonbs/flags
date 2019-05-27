import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Btn from "./Btn";
import Spinner from "./Spinner";
import "./RankingForm.scss";

const RankingForm = props => {
  const [newEntry, setNewEntry] = useState({
    firstName: "",
    lastName: "",
    points: props.game.points
  });
  const [sendingForm, setSendingForm] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setSendingForm(true);
    try {
      await axios.post("https://flags-api.herokuapp.com/api", newEntry);

      props.formSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  const showform = () => {
    if (props.formSubmitted) {
      return (
        <div className="form-container-thanks">
          <h2 className="form-thanks">Thank you, {newEntry.firstName} </h2>
          <NavLink to="/ranking">
            <i
              onClick={() => {
                props.hideRankingForm();
                props.onNewGame();
              }}
            >
              <Btn content="Show ranking" />
            </i>
          </NavLink>
        </div>
      );
    }

    return (
      <div className="form-container">
        <h2 className="form-title">Please enter your name</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <input
              className="form-group__input"
              placeholder="First name"
              id="first-name"
              autoComplete="off"
              value={newEntry.firstName}
              onChange={event => {
                setNewEntry({ ...newEntry, firstName: event.target.value });
              }}
              required
            />
            <label className="form-group__label" htmlFor="first-name">
              First Name
            </label>
          </div>
          <div className="form-group">
            <input
              className="form-group__input"
              placeholder="Last name"
              autoComplete="off"
              value={newEntry.lasttName}
              onChange={event => {
                setNewEntry({ ...newEntry, lastName: event.target.value });
              }}
              required
            />
            <label className="form-group__label" htmlFor="last-name">
              Last Name
            </label>
          </div>
          {sendingForm ? (
            <Spinner message="Sending..." />
          ) : (
            <Btn align="left" content="Enter for the history!" />
          )}
        </form>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div onClick={props.hideRankingForm} className="ranking-patch" />
      <section className="ranking-form">
        <div onClick={props.hideRankingForm} className="close-btn">
          X
        </div>
        {showform()}
      </section>
    </React.Fragment>
  );
};

export default RankingForm;
