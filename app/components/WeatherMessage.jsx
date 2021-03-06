var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">The temperature is {temp} degrees in {location}</h3>
  );
};

module.exports = WeatherMessage;
