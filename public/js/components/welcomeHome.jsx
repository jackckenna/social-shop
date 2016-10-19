var PublicPosts = require('./publicPosts.jsx');
var PostStore = require('../stores/postStore.js');
var GroupChat = require('./chat/groupChat.jsx');
var Login = require('./users/login.jsx');
var NavigationStore = require('../stores/navStore.js');


var welcomeHome = React.createClass({
  getInitialState: function() {
    return {
      publicPosts: [],
    }
  },
  componentDidMount: function() {
    var data;
    axios.get('/posts')
        .then(function(response) {
          data = response.data.publicPosts;
          console.log(data);
          this.setState({ publicPosts: data });
        }.bind(this));
    console.log(this.state.publicPosts);
  },
  render: function() {
    return (
      <div className="welcome">
        <PublicPosts posts={this.state.publicPosts}  />
        <GroupChat />
      </div>
    )
  }

});

module.exports = welcomeHome;
