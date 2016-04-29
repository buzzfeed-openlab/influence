import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({user, dispatch}) => {
	const logout = () => dispatch(logOut());

    return (
      <nav className={cx('navigation')} role="navigation">
          <Link className={cx('item')} activeClassName={cx('active')} to="/team">Team</Link>
          <Link className={cx('item')} activeClassName={cx('active')} to="/feed">Feed</Link>
          <Link className={cx('item')} activeClassName={cx('active')} to="/upcoming">Upcoming</Link>
          { user.authenticated && <Link onClick={logout} className={cx('item')} to="/">Logout</Link> }
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
