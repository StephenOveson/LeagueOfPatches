import React from 'react';
import image from './loading.png'

export default function Loading(props) {
  if (!props.ready)
    return (<div style={{ width: '100%', height: '520px', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%' }}>
      <img src={image} alt="load" height={500} width={500} style={{ margin: 'auto' }} />
    </div>
  </div>)
  else
  return (<>{props.children}</>)
}