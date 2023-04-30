import React from 'react';
import AdminLoginForm from './AdminLoginForm';

class AdminLoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <AdminLoginForm />
        </div>
      </div>
    );
  }
}

export default AdminLoginPage;