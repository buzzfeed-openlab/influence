import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from 'actions/users';
import styles from 'css/components/login';
import hourGlassSvg from 'images/hourglass.svg';

import ReactBootstrap, {
  Row,
  Col,
  Button,
} from 'react-bootstrap';

const cx = classNames.bind(styles);

class LoginOrRegister extends Component {
  /*
   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
   * properties on the constructor
   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
   */
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }

  onLoginSubmit() {
    const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    dispatch(manualLogin({
      email,
      password
    }));
  }

  onRegisterSubmit() {
    const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    dispatch(signUp({
      email,
      password
    }));
  }

  renderEmailHeader() {
    return (
      <div className={cx('header')}>
        <h1 className={cx('heading')}>login or register via email</h1>
      </div>
    );
  }

  renderEmailButtons() {
    return (
      <div>
        <Button bsStyle="primary" block onClick={this.onLoginSubmit}>login</Button>
        <Button block onClick={this.onRegisterSubmit}>register</Button>
      </div>
    );
  }

  renderSocialHeader() {
    return (
      <div className={cx('header')}>
        <h1 className={cx('heading')}>or</h1>
      </div>
    );
  }

  renderSocialButtons() {
    return (
      <div>
        <Button bsStyle="success" block href="/auth/google">login with google</Button>
      </div>
    );
  }

  render() {
    const { isWaiting, message } = this.props.user;

    return (
      <div className={cx('login', {
        waiting: isWaiting
      })}>
        <div>
          <Row>
            <Col md={12}>
              { this.renderEmailHeader() }
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <img className={cx('loading')} src={hourGlassSvg} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input className={cx('input')}
                type="email"
                ref="email"
                placeholder="email" />
              <input className={cx('input')}
                type="password"
                ref="password"
                placeholder="password" />
              <p className={cx('message', {
                'message-show': message && message.length > 0
                })}>{message}</p>
              { this.renderEmailButtons() }
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              { this.renderSocialHeader() }
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              { this.renderSocialButtons() }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

LoginOrRegister.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps)(LoginOrRegister);
