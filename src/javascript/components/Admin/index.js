import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from './auth';
import AdminPannel from './AdminPannel';
import ErrorBoundary from 'javascript/components/ErrorBoundary';

class Admin extends Component {
  render() {
    const { user } = this.props;

    return <ErrorBoundary>{!user || !user.isadmin ? <Auth /> : <AdminPannel />}</ErrorBoundary>;
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Admin);
