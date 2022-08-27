import React from 'react';

const TestComponent = () => {
  return (
    <>
      <div className="colorbox-selector selectbox-detail">
        <h4>Color</h4>
        <ul className="colorbox-list">
          <li style={{ background: '#94003C' }}></li>
          <li style={{ background: '#AC607F' }}></li>
          <li style={{ background: '#E4D7DC' }} className="active"></li>
          <li style={{ background: '#A89CA1' }}></li>
          <li style={{ background: '#FD798C' }}></li>
          <li style={{ background: '#FEBFCD' }}></li>
          <li style={{ background: '#FE6695' }}></li>
        </ul>
      </div>

      <div className="sizebox-selector selectbox-detail">
        <h4>Size Chart</h4>
        <h5>Top</h5>
        <ul className="sizebox-list">
          <li>XS</li>
          <li>S</li>
          <li className="active">M</li>
          <li>L</li>
          <li>XL</li>
          <li>XXL</li>
        </ul>
      </div>
    </>
  );
}

export default TestComponent;
