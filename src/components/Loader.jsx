import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh', 
    }}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
