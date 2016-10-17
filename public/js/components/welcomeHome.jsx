var PublicPosts = require('./publicPosts.jsx')


var welcomeHome = React.createClass({
  getInitialState: function() {
    return {
      dummyPosts: [
        {
          message: "React is great!",
          isPublic: false,
          author: "uid"
        }, {
          message: "React is ok!",
          isPublic: false,
          author: "uname"
        }, {
          message: "React is rubbish!",
          isPublic: true,
          author: "uname"
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
