import React from 'react'
import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
export default function Navigate() {


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class MyComponents extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
  return (
    <div>
      
    </div>
  )
}
