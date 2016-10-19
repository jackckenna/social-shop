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
        <div className="title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="message">
          {message}
        </div>
        <div className="author">
          {this.props.author}
        </div>
      </div>
    )
  }
});

module.exports = pPost;
