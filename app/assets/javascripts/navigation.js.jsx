'use strict';
var Navigation = React.createClass({
  render: function () {
    return (
      <nav>
      <p onClick={this.homeClicked} className="btun btn-primary" <p>Home</p>
      <p onClick={this.homeClicked} className="btun btn-primary"<p>Posts</p>
      </nav>
      );
  },
  homeClicked: function() {
    window.location.href = '/';
  }
});
