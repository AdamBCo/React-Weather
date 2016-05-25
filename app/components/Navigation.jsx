var React = require('react');
var {Link, IndexLink} = require('react-router')

var Navigation = (props) => {
  return (
    <div>
      <h2>Navigation Component</h2>
      <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/examples" activeClassName="active">Examples</Link>
    </div>
  );
};

module.exports = Navigation;
