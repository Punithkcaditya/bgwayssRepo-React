import React, { useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';

let latLng = {};

function Location(props) {
  const { isGeolocationAvailable, isGeolocationEnabled, coords, getLatLng } = useGeolocated();

  useEffect(() => {
    setLatlong(coords);
  }, [coords]);

  const setLatlong = (data) => {
    if (data) {
      latLng = {
        lat: data.latitude,
        lng: data.longitude
      };
      getLatLng && getLatLng(latLng);
    }
  };

  return !isGeolocationAvailable ? (
    <div></div>
  ) : !isGeolocationEnabled ? (
    <div></div>
  ) : coords ? (
    <table>
      <tbody>{setLatlong(coords)}</tbody>
    </table>
  ) : (
    <div>&hellip;</div>
  );
}

export default Location;
