## Cloning this project in Cloud9

Go to your Cloud9 dashboard and do "Create New Workspace".  
Choose "Clone From URL".  
Enter as the URL: `git@github.com:yaleinteractive/networks-demo.git`

A project called `networks-demo` will be created in your workspace. Edit it. It will have all the files from this GitHub repo.

Alternatively, you can just create an empty new workspace (choose "Custom" as the workspace template).
Create new files for `hello.js` and `clock.js` and just copy and paste the code from GitHub.

This GitHub repo will be updated each week with the code from our class. You can clone it each time to get the latest updates into a new project in your Cloud9 dashboard.

## Running this project

In Cloud9, double click `app.js` and then click "Run". Once the server starts, in the console you'll see a preview link.
Click or copy this to access the web server.

Go to /clock in the preview web server to see the clock.

## Editing this project

You will generally *not* edit `app.js`. That file just contains some setup code and configuration options. Instead, edit `routes/index.js`.

Templates go in the `views` folder. Templates use the Handlebars templating language. You will likely want to edit `home.hbs`.

Static files such as images and stylesheets go in the `public` folder.

## Next steps

Modify `routes/index.js` to make two pages:

* A page that changes depending on how many people have viewed it.
* A page that changes depending on what time it is.

You may wish to stop thinking about your design as being literally a clock or about time; 
and begin to think time as being a _design factor_, not the content itself. So what do you
want the content to be? Think about this in relation to your other work.

Modify or add HTML templates in the `views` folder, such as `home.hbs`.
These can include embedded variables passed from your router.
(Technically the templates use the [Handlebars](http://handlebarsjs.com/) templating syntax for the embedded variables.)

Put static files such as images in the `public` folder. These will be served without any processing.
