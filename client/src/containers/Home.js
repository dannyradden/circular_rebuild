import React, { Component } from "react";
// import { connect } from 'react-redux';
import PropTypes from "prop-types";
import HeroCTA from "../components/HeroCTA";
// import ApartmentMap from "../components/CampaignsMap";

// import { fetchApartmentsRequest } from "../redux/actions/apartments";
// import { openMap, closeMap } from "../redux/actions/googleMap";

// class Home extends Component {
const Home = () => {
  // componentWillMount() {
  //   this.props.fetchApartmentsRequest();
  // }

  // render() {
  // const { apartments: { apartments }, googleMap: { isOpen } } = this.props;
  return (
    <div>
      <HeroCTA />
      {/* <HeroCTA openMap={this.props.openMap} /> */}
      {/* <ApartmentMap
        isOpen={isOpen}
        markers={apartments}
        closeMap={this.props.closeMap}
      /> */}
    </div>
  );
  // }
};

Home.propTypes = {
  // fetchApartmentsRequest: PropTypes.func.isRequired,
  // apartments: PropTypes.shape({
  //   apartments: PropTypes.array.isRequired
  // }).isRequired,
  // googleMap: PropTypes.shape({
  //   isOpen: PropTypes.bool.isRequired
  // }).isRequired,
  // openMap: PropTypes.func.isRequired,
  // closeMap: PropTypes.func.isRequired
};

export default Home;
