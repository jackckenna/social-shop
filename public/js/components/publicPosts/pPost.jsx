var PublicPosts = require('../publicPosts.jsx');


var pPost = React.createClass({
  deletedTweet: function(){
    this.props.handleDelete(this.props.id);
  },
  render: function() {

    if(this.props.isPublic){
      var message = this.props.message
    }

    return (
      <div className="post">
        <div className="message">
          {message}
        </div>
      </div>
    )
  }
});

module.exports = pPost;
