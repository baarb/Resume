
Router.configure({
    layoutTemplate: 'master' //master.html
});

//---------------------------------------------

Router.route('/contact', {
    template: 'contact' //contact.html
});

Router.route('/', {
    template: 'resume' //resume.html
});

