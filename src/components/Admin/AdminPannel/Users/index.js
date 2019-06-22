import React, { PureComponent, Fragment } from 'react';
import { getUsers } from '../../../../api/user';

const THEADS = [
  'id',
  'name',
  'email',
  'tel'
]

export default class User extends PureComponent {

  state = {
    user: '',
    users: []
  }

  componentDidMount () {
    getUsers()
      .then(users => this.setState({ users }));
  }

  onChange = e => this.setState({ user: e.target.value });

  render () {
    const { user, users } = this.state;

    return (
      <Fragment>
        <input value={user} onChange={this.onChange} className='admin__search' placeholder='Поиск по Email' />
        <table className='admin__content admin__content--user'>
          <thead>
            <tr>
              {THEADS.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              !!~user.email.indexOf(this.state.user) &&
              <tr key={user.id}>
                {Object.entries(user).map(([key, value]) => (
                  <td key={key}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}