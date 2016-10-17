var PublicPosts = require('../publicPosts.jsx');


var pPost = React.createClass({
  deletedTweet: function(){
    this.props.handleDelete(this.props.id);
  },
  render: function() {
    return (
      <div className="post">
        <div className="message">
          {this.props.message}
        </div>
        <input type="button" value="Delete Tweet" onClick={this.deletedTweet}/>
      </div>
    )
  }
});

module.exports = pPost;
