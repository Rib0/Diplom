import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from './auth';
import AdminPannel from './AdminPannel/index.js';

class Admin extends Component {

  render () {
    const { user } = this.props;

    return (
      !user || !user.isadmin ? 
      <Auth /> :
      <AdminPannel />
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(Admin);