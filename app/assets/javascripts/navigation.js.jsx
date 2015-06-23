'use strict';
var Navigation = React.createClass({
  render: function () {
    return (
      <nav>
      <p onClick={this.homeClicked} className="btn btn-primary">Home</p>
      <p onClick={this.homeClicked} className="btn btn-primary">Posts</p>
      </nav>
      );
  },
  homeClicked: function () {
    window.location.href = '/';
  },
  postsClicked: function () {
    this.navigate('/posts');
  },

  navigate: function(url) {
    window.location.href = url;
  }

});
