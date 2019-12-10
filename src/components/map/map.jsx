import React from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import {offerLocationPropTypes} from "../cities-list/cities-list";
import {areLocationsEquals} from "../../utils";
import {connect} from "react-redux";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._currentCityLocation = props.currentCityLocation;
    this._map = null;
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._highlightIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 40]
    });
    this._pins = [];
    this._highlightMarker = null;

    this._renderPins = this._renderPins.bind(this);
  }

  componentDidMount() {
    const {
      latitude,
      longitude,
      zoom
    } = this._currentCityLocation;

    const cityCoordinates = [latitude, longitude]; // Amsterdam

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
    const {
      currentCityLocation
    } = this.props;

    if (!areLocationsEquals(currentCityLocation, this._currentCityLocation)) {
      this._map.flyTo([currentCityLocation.latitude, currentCityLocation.longitude], currentCityLocation.zoom, {
        animate: false,
      });
      this._pins.forEach((marker) => marker.remove());
      this._renderPins();
      this._currentCityLocation = currentCityLocation;
    }

    this._renderHighlight();
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

  _renderHighlight() {
    const {
      activeOfferLocation,
    } = this.props;

    if (this._highlightMarker) {
      this._highlightMarker.remove();
      this._highlightMarker = null;
    }

    if (activeOfferLocation) {
      const {
        latitude,
        longitude
      } = activeOfferLocation;

      this._highlightMarker = leaflet.marker([latitude, longitude], {icon: this._highlightIcon});
      this._highlightMarker.addTo(this._map);
    }
  }
}

Map.propTypes = {
  offersLocations: PropTypes.arrayOf(offerLocationPropTypes).isRequired,
  currentCityLocation: PropTypes.object, // @todo fix it
  activeOfferLocation: PropTypes.object // @todo fix it
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOfferLocation: state.activeOfferLocation
});

export {Map};

export default connect(mapStateToProps)(Map);
