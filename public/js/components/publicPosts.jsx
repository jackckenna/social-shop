var PubPost = require('./publicPosts/pPost.jsx')

var publicPosts = React.createClass({
  render: function() {
    var deleteFunction = this.props.handleDelete
    var list = this.props.posts.map( function(post, i) {
      return (
          <PubPost key={i} message={post.message} isPublic={post.isPublic} id={i} />
      )
    });
    return (
      <div className="posts">
        {list}
      </div>
    )
  }

});

module.exports = publicPosts;
