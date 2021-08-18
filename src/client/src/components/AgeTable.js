import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';

const AgeTable = ({ ageDemographic, isLoading }) => {

  return (
    <Fragment>
      {
        isLoading ?
          <h3>is loading...</h3> :
          (
            ageDemographic.length > 0 ?
              (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Age</th>
                      <th scopr="col">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ageDemographic.map(demo => {
                        return (
                          <tr key={nanoid()}>
                            <td>{demo.age}</td>
                            <td>{demo.count}</td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              ) :
              null
          )
      }
    </Fragment>
  );

};

export default AgeTable;
