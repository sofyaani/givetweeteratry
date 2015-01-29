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

You will generally *not* edit `app.js`. Instead, edit `routes/index.js`.

Templates go in the `views` folder. Templates use the Handlebars templating language. You will likely want to edit `index.hbs`.

## Next steps

Modify `routes/index.js` to make your own HTML output based on the time.

Put HTML templates in the `views` folder. These can include embedded variables passed from your router.
(Technically the templates use the Moustache templating syntax for the embedded variables.)

Put static files such as images in the `public` folder. These will be served without any processing.

