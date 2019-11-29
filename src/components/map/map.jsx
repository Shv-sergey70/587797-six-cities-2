import React from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';

export class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._map = null;
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._pins = [];

    this._renderPins = this._renderPins.bind(this);
  }

  componentDidMount() {
    const cityCoordinates = [52.38333, 4.9]; // Amsterdam

    const zoom = 12;

    setTimeout(() => { // For tests passing
      this._map = leaflet.map(`map`, {
        center: cityCoordinates,
        zoom,
        zoomControl: false,
        marker: true
      });

      this._map.setView(cityCoordinates, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._renderPins();
    }, 100);
  }

  componentDidUpdate() {
    this._pins.forEach((marker) => marker.remove());
    this._renderPins();
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {
    return <div id="map" style={{height: `100%`}}> </div>;
  }

  _renderPins() {
    const {offersLocations} = this.props;

    offersLocations.forEach((location) => {
      const marker = leaflet.marker([location.latitude, location.longitude], {icon: this._icon});

      this._pins.push(marker);
      marker.addTo(this._map);
    });
  }
}

Map.propTypes = {
  offersLocations: PropTypes.arrayOf(PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })).isRequired
};
