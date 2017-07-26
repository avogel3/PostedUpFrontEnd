import Ember from "ember";
export default Ember.Controller.extend({
  actions: {
    submit: function() {
      //console.log("submit");
      //console.log(this.getProperties("email", "password"));

      let url = "http://localhost:3000/api/users/sign_in";
      let credentials = JSON.stringify(this.getProperties("email", "password"));
      let requestOptions = {
        method: "POST",
        contentType: "application/json",
        data: credentials,
        dataType: "json",
        url
      };
      return Ember.$
        .ajax(requestOptions)
        .then(response => {
          debugger;
        })
        .catch(error => {
          debugger;
        });
    }
  }
});
