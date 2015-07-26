
if (Meteor.isClient) {

  Template.contact.events({
    'click #send': function (event){

      var info = $("#info").val();
      var message = $("#message").val();

        Meteor.call('sendEmail',
            'birons89@gmail.com',
            'birons89@gmail.com',
            'Message from ' + info,
            message
        );
        $("#info").val("");
        $("#message").val("");
        toastr.success('Message Sent', 'Thanks!');
    }
  });
}