# Movie Gallery App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

1. React Bootstrap
2. Redux

## Project Description

1. Project has been split into three main components 1. Navbar Component 2. Display/Grid Component 3. Movie Details Component.

2. Redux is used to pass data between the Navbar Component and the Display/Grid Component

3. Initially upon loading the application and clicking on `Movie Details` in the navbar, no details are displayed. For the details to be shown, navigate back to the home page by clicking on the `Gallery` icon. Once on the home page, click on any movie image and you will then be redirected to the movie details page which should now display the details of the movie. 

4. To filter the movies, click on the `Search By` button on the navbar. Choose between `Genre` or `Year` and click on the desired choice. The selected choice should be visible as it would have replaced orginal `Search By` wording. Use the search bar on the right to filter the movies, the grid of movies should be automatically filtered based on the query. Queries are case-sensitive.

5. In the event any alert is shown when loading the grid/display, try refreshing the page.


