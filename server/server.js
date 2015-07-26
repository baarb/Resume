//run meteor deploy barbirons.meteor.com --settings server/settings.json

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    //process.env.MAIL_URL = MAIL_SECRET;
    Meteor.methods({
        sendEmail: function (to, from, subject, text) {
            check([to, from, subject, text], [String]);

            // Let other method calls from the same client start running,
            // without waiting for the email sending to complete.
            this.unblock();

            Email.send({
                to: to,
                from: from,
                subject: subject,
                text: text
            });
        }
    });
  });
}