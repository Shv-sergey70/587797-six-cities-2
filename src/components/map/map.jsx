import React from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offersLocations} = this.props;

    const cityCoordinates = [52.38333, 4.9]; // Amsterdam
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(cityCoordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offersLocations.forEach((location) => {
      leaflet
        .marker([location.latitude, location.longitude], {icon})
        .addTo(map);
    });
  }

  render() {
    return <div id="map" style={{height: `100%`}}> </div>;
  }
}

Map.propTypes = {
  offersLocations: PropTypes.arrayOf(PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired
};
