var PubPost = require('./publicPosts/pPost.jsx')

var publicPosts = React.createClass({
  render: function() {
    var deleteFunction = this.props.handleDelete
    var list = this.props.posts.map( function(post, i) {
      return (
          <PubPost key={i} message={post.message} id={i} />
      )
    });
    return (
      <div className="posts">
        <input type="button" value="Delete all tweets" onClick={this.props.deleteAll} />
        {list}
      </div>
    )
  }

});

module.exports = publicPosts;
