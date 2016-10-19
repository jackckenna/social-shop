var Link = require('react-router').Link;

var Navigation = React.createClass({
  render: function() {
    return (
      <div>
        <div id="navigation">
          <nav className="qa-nav-main">
            <ul id="nav-ul">
                <li id="nav-li"><Link to='/'>Home</Link></li>
                <li id="nav-li"><a href="/chat">Chat</a></li>
                <li className="right-handle"><Link to='/login'>Login</Link></li>
                <li className="right-handle"><Link to='/register'>Register</Link></li>
              </ul>
          </nav>
        </div>
        {this.props.children}
    </div>
    )
  }

});

module.exports = Navigation;
