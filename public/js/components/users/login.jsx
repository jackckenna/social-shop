var LoginForm = React.createClass({
  getInitialState: function() {
   return {
     email: '',
     password: ''
   };
 },
 registerUser: function(e){
   //console.log(this.state)
   axios.post('/login', this.state)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 },
  render: function() {
    return (
      <div className="login-register">
          <lable>Email</lable>
          <input value={this.state.email} onChange={this.updateInputValue.bind(this, 'email')} type="text" name="email" id="login"/><br/>
          <lable>Password</lable>
          <input value={this.state.password} onChange={this.updateInputValue.bind(this, 'password')} type="password" name="password" id="password"/><br/>
          <input type="submit" value="Submit"/>
      </div>
    )
  },
  updateInputValue: function(name, e) {

    var change = {};
    change[name] = e.target.value;
    this.setState(change);

   }


});

module.exports = LoginForm;
