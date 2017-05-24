[] Create basic module
    [x] Make app.module.js
    [x] Create main app module
    [] Add script and link (reset, BS) dependencies
    [] Add app to html

[] Setup UI Router with clean URLs
    [] Add ui.router dependency
    [] Make app.config.js
    [] Get boilerplate
    [] Set '/' to home where all posts are shown
    [] Add component to html
    [] Add navbar above
    [] Add script dependencies

[] User can view posts
    [] Create component for view
    [] Create controller for view
    [] Add script dependencies
    [] Create template
    [] Get posts array
    [] Use repeat to iterate through posts array
    [] Attach appropriate keys to text Fields  
    [] Properly pluralize the comments
    [] Order the posts by votes
    [] Have date shown be how long ago the post was made
        [] npm install moment and angular-moment
        [] add to html
        [] add as dependency on controller

[] Toggle new post form page
    [] Create sref on button click
    [] Create state to form
    [] Create component for add
    [] Create controller for add
    [] Create template for add


[] User can create posts
    [] Add submit on form calling an add post function
    [] Use data binding to build post object
    [] Write add post function to push to posts database
    [] Add validation to not allow create post if any field is left blank
    [] Have create take you back to list

[] User can upvote and downvote but not below 0
    [] Attach functions to arrows
    [] Write functions

[] Allow users to filter by title
    [] Add model to filter inputs
    [] Add filter to posts

[] Allow sorting of posts
    [] Fill out drop down box
    [] Set default to votes descending
    [] Allow to sort by date and title
    [] Create filter on filter box

[ ] Allow users to toggle comments
    [] Have comments show when clicking on the link
    [] Have previous comments close when clicking new
    [] Have comments switch to hide
    [] Optional: hide comment input until comments is clicked
    [] Users can add comment
        [] create comment object with data binding
    [] Add function on form to add comment
    [] Write add function

[] Allow user to edit posts
    [] Create edit link
    [] Add edit in cofig
    [] Create edit component
    [] Get post information on id
    [] Fill in add form
    [] Create edit function
