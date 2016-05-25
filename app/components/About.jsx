var React = require('react');

var About = React.createClass({
  render : function () {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application built using React</p>
        <p>Here are some of the tools I used</p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a> - This was the Javascript framework used.
          </li>
          <li>
            <a href='http://openweathermap.org'>OpenWeatherMap</a> - This was the API I used for weather data.
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
