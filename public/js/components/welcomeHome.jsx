var PublicPosts = require('./publicPosts.jsx')


var welcomeHome = React.createClass({
  getInitialState: function() {
    return {
      dummyPosts: [
        {
          message: "React is great!"
        }, {
          message: "React is ok!"
        }, {
          message: "React is rubbish!"
        }
      ]
    };
  },
  render: function() {
    return (
      <div className="welcome">
        <h1>Welcome to your public home feed</h1>
        <PublicPosts posts={this.state.dummyPosts}  />
      </div>
    )

  }

});

module.exports = welcomeHome;
