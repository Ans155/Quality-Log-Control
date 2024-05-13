import React from 'react';

const LogList = ({ logs }) => {
  return (
    <div>
      <h2>Log List</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <p>{log.level}</p>
            <p>{log.log_string}</p>
            <p>{log.timestamp}</p>
            {/* <p>{log.metadata.source}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogList;
