import React, { Component } from 'react';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import Button from './../../components/Button';
import { dropdownUserType } from '../../utils/constant';
import { Siswa1Image, Siswa2Image } from '../../configs/images';

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    userType: "",
  }

  _handleChangeInput = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  _handleSubmit = () => {
    const { actions } = this.props;
    actions.login(this.state);
  }

  _handleSelectDropdown = (item) => {
    this.setState({
      userType: item.name.toLowerCase()
    })
  }

  render() {
    const { userType } = this.state;

    return (
      <div className="login-container">
        <div className="login-form-wrapper">
          <div className="welcome-wording">
            {/* <p>LOGIN</p> */}
            {/* <p>Sistem Informasi SMK Pelita Depok</p> */}
          </div>
          <p className="title">Login</p>
          <div className="form">
            <Input 
              label="Email"
              placeholder="Masukan email anda..."
              onChange={this._handleChangeInput}
              name="email"
            />
            <Input 
              label="Password"
              placeholder="Masukan password anda..."
              onChange={this._handleChangeInput}
              name="password"
              type="password"
            />

            <div className="dropdown-section">
              <Dropdown value={userType} data={dropdownUserType} onChange={this._handleSelectDropdown} />
            </div>

            <Button label="Login" onClick={this._handleSubmit} width={"100%"} />
          </div>
        </div>
        <div className="siswa1">
          <img src={Siswa1Image} alt="" />
        </div>
        <div className="siswa2">
          <img src={Siswa2Image} alt="" />
        </div>
      </div>
    )
  }
}
