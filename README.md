# Annotator Front End
Data annotation is an important activity used to generate the training data and metadata required for machine learning tasks.  Here I have created a simple text annotation tool that allows a user to create and maange text annotations for user-inpuuted text snippets.
![Picture of signin page](images/signin.png?raw=true "Sign In Page")

### View the App
You can view the app by navigating to the following url https://gracious-wescoff-b9c656.netlify.app/

### Prerequisites
The Annotator frontend requires:
* Node v12+
* NPM v7+

### Installation
Install the dependencies and start a server with the following commands(from the root directory of the project).
```sh
$ npm install 
$ npm start
```

### Features

#### Responiveness
The frontend is full responsive and can even work on mobile devices.  Additionally, the frontend also provides feedback on if a user has preformed an action by either showing a loading icon, success message or failure message so that they can know what went wrong

#### Authentication
In order for a user to actuall use the app they need to sign in.  This was done by using JWT as a means of authenticating the user and this token is stored in memory currently.

#### Semantic HTML / Accessibility
HTML was kept as semantic as possible given the timeframe so that the site was as accessible as possible.  The site even works on IE11!

#### Reuseable Componenets
Many of the components created are reusable and I ended up creating a style system with componenets to control page layout, determine actions etc.  This led to quick development once they were all developed and are easily modifiable with proptypes to expose any errors.

### Development 
Since the Annotator API is required to get anywhere in the application please ensure that this porition of the project is running; you can also login with email: logan@coldiron.ca and password: password.  Additionally if in development your api is not running on port 8000 please change the base url variable in src/utils/api.  If all is successful you should be able to view.  

### Pictures of Front end
### Home Page
![Picture of home page](images/home.png?raw=true "Home Page")
### Tags Page
![Picture of tags page](images/tags.png?raw=true "Tags Page")
### Snippets Page
![Picture of snippets page](images/snippets.png?raw=true "Snippets Page")
### Edit Snippet Page
![Picture of edit snippet page](images/edit_snippet.png?raw=true "Edit Snippet Page")
### Annotate Page
![Picture of annotate page](images/annotate_new.png?raw=true "Annotate Snippet Page")
