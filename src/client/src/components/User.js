import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getUsers } from '../APIs/userAPIs';

const User = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>All users</h2>
      <h5 style={{ textAlign: 'center' }}>users and their age</h5>
      {
        isLoading ?
          (<h3>is loading...</h3>) :
          (
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Usersame</th>
                  <th scope='col'>Age</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => {
                    return (
                      <tr key={nanoid()}>
                        <td>
                          {user.username}
                        </td>
                        <td>
                          {user.age}
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          )
      }
    </div>
  );
};


export default User;