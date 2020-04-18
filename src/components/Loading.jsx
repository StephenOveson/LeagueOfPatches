import React from 'react';

export default function Loading(props) {
  if (!props.ready)
    return (<div style={{ width: '100%', height: '520px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%' }}>
        <div className="d-flex justify-content-center" style={{ top: '50%', left: '50%' }}>
          <div className="spinner-border" style={{ width: '10rem', height: '10rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>)
  else
    return (<>{props.children}</>)
}