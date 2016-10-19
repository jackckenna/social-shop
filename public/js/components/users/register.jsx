var RegisterForm = React.createClass({
  getInitialState: function() {
   return {
     first_name: '',
     last_name: '',
     email: '',
     username: '',
     password: ''
   };
 },
 registerUser: function(e){
   //console.log(this.state)
   axios.post('/user/new', this.state)
  .then(function (response) {
    console.log(response.status);
  })
  .catch(function (error) {
    console.log(error);
  });
 },
render: function() {
    return (
      <div className="login-register">
          <label >First Name</label><br/>
          <input value={this.state.first_name} onChange={this.updateInputValue.bind(this, 'first_name')} type="text" name="first_name" /><br/>
          <label >Second Name</label><br/>
          <input value={this.state.second_name} onChange={this.updateInputValue.bind(this, 'last_name')} type="text" name="last_name" /><br/>
          <label >Email</label><br/>
          <input value={this.state.email} onChange={this.updateInputValue.bind(this, 'email')} type="text" name="email" /><br/>
          <label>User Name</label><br/>
          <input value={this.state.user_name} onChange={this.updateInputValue.bind(this, 'username')} type="text" name="username" /><br/>
          <label>Password</label><br/>
          <input value={this.state.password} onChange={this.updateInputValue.bind(this, 'password')} type="text" name="password" /><br/>
          <input onClick={this.registerUser} type="submit" value="Submit"/>
      </div>
    )
  },
  updateInputValue: function(name, e) {

    var change = {};
    change[name] = e.target.value;
    this.setState(change);

   }

});

module.exports = RegisterForm;
