var groupChat = React.createClass({
  render: function() {
    return (
      <div className="chat">
        <ul id="messages"></ul>
        <form action="">
          <input id="m"/><button>Send</button>
        </form>
      </div>
    )
  }
});

module.exports = groupChat;
