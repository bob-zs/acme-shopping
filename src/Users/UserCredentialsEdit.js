import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { updateUserCredential } from "../store/auth";

class UserCredentialsEdit extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
    };
    this.update = this.update.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  async update(e) {
    e.preventDefault();
    const information = {
      username: this.state.username,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      isGuest: false,
    };
    try {
      await this.props.update(information);
      document.getElementById("credentials-form").style.width = '0';
      document.getElementById("main-app").style.marginRight = '0';
      alert('Your Username / Password has been updated!');

    } catch (ex) {
      console.error(ex);
    }
  }
  validatePassword() {
    return (
      this.state.password.length > 0 &&
      this.state.passwordConfirm.length > 0 &&
      this.state.password === this.state.passwordConfirm
    );
  }
  closeForm(){
    document.getElementById("credentials-form").style.width = '0';
    document.getElementById("main-app").style.marginRight = '0';
  };
  render() {
    const { username, password, passwordConfirm } = this.state;
    const { update, validatePassword, closeForm} = this;
    return (
      <section className='side' id="credentials-form">
        <button className="closebtn" onClick={() => closeForm()}>&times;</button>
        <h2>Update Credentials </h2>
        <form onSubmit={update}>
          <label>
            New Username:<br />
            <input
              type="username"
              name="username"
              value={username}
              onChange={(ev) => this.setState({ username: ev.target.value })}
              required
            />
          </label>
          <label>
            New Password:<br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(ev) => this.setState({ password: ev.target.value })}
            />
          </label>
          <label>
            Password Confirmation:<br />
            <input
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(ev) =>
                this.setState({ passwordConfirm: ev.target.value })
              }
              required
            />
          </label>
          <button disabled={!validatePassword()} type="submit" className='update-btn'>
            Update Credentials
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatch = (dispatch) => {
  return {
    update: (auth) => dispatch(updateUserCredential(auth)),
  };
};

export default connect(mapStateToProps, mapDispatch)(UserCredentialsEdit);
