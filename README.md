## Cloning the current code in Cloud9

Go to your Cloud9 dashboard and do "Create New Workspace".  
Choose "Clone From URL".  
Enter as the URL: `git@github.com:yaleinteractive/networks-demo.git`

A project called `networks-demo` will be created in your workspace. Edit it. It will have all the latest files from this GitHub repo.

Alternatively, you can just create an empty new workspace in Cloud9 (choose "Custom" as the workspace template), or even use an existing workspace.
Create new files in the Cloud9 workspace, view code in GitHub, and just copy and paste code.

This GitHub repo will be updated each week with the code from our class. You can clone it each time to get the latest updates into a new project in your Cloud9 dashboard.

## Viewing the code for past labs

In [GitHub](https://github.com/yaleinteractive/networks-demo), pull down the "Branch" or "Tag" menu.
Go to "Tags" and click the tag for the lab you want to view. This will show you the code as of that tag.

## Running this project

### 1_conditions.js

In Cloud9, double click `1_conditions.js` and then click "Run". View the output in the console.
This code displays different messages depending on the second, using `if` conditions with various
logical operators.

### 2_loop.js

In Cloud9, double click `2_loop.js` and then click "Run". View the output in the console.
This code uses a `while` loop to display a number of `*`'s, depending on the current number of seconds.

### 3_server.js

In Cloud9, double click `3_server.js` and then click "Run". Once you see `Server started` in the console, 
click the preview link at the top of the console, or copy and paste it into a browser. View the results
in the web browser, and also in the server console.

You need to restart the server when you make a change to the file (and save the file!).

This code displays `Ring ring!` in the server console every time it gets a web (HTTP) request, and it tells
the web browser to display `Hello??`. Make sure you see both.

### 4_server_with_router.js

In Cloud9, double click `4_server_with_router.js` and then click "Run". Once you see `Server started` in the console, 
click the preview link at the top of the console, or copy and paste it into a browser. View the results
in the web browser, and also in the server console.

You need to restart the server when you make a change to the file (and save the file!).

Then in the browser visit `/clock`, `/color`, any number like `/12`, `/breathe`, and any other URL.

This code displays `Ring ring!` in the server console every time it gets a web (HTTP) request, and it tells
the web browser to display different things depending on what URL is requested.

## Next steps

Go through these files in order and make sure you understand each line! Starting with the simpler
programs, edit them to try different small variations. Don't be afraid to break them, but when you do,
be sure you can fix them. Go back to GitHub to look at the original code if necessary.
