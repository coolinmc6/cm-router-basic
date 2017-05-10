# README

- The goal of this app is to create a very basic app using React Router.  I want to show basic page navigation and
some nested routes

- The "exact path" means that it will ONLY show up on that path.  So, if you have a parent component like 'App', and you
want there to be a header, you could include header (or if it's a separate Header component) directly in the App
component.  However if you want an indexRoute that on the "/" path displays a certain component, like a 'Home'
component, you add the `exact path="/" component={Home}`.