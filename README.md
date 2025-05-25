

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

"# netflixgpt" 

  - create-vite+react
  - configuration of Tailwindcss
  - Header
  - Routing of app
  - Login form
  - SignUp form
  - Form validation
  - useRef Hook
  - Create SignUp User Account
  - implement sign in user api
  - create our redux store with userslice
  - implement sign out
  - update Profile
  - BugFix:sign up user displayName and profile picture update
  - BugFix:if the user is not logged in redirect/browser vica versa
  - unsubscribed to the onAuthStateChanged callback
  - Register TMDB API & create an app to get api key and access token
  - get data from TMBD movie list
  - build the MainContainer-{videoTitle,Trailer-autoplay with mute and Background video }

Features
    Login/Sign Up
    Sign In /Sign up Form
      redirect to Browse Page
      Browse (after authentication)
    Header
    Main Movie
        Tailer in Background
        Title & Description
        MovieSuggestions
        MovieLists * N
       NetflixGPT
    Search Bar
    Movie Suggestions


after resetup build Feature like form validati for Login and signup

![Uploading image.png…]()


# start with authentication:

   firebase as backend:
     
   1-npm install firebase
   2-firebase Login
   3-Firebase init
   4-firebase deploy
     --select project which is in firebase

## lets build authentication    

   use of redux Store: 
     npm i -D @reduxjs/toolkit
     npm install react-redux
    
## Build the core of project

# add the constant file to project
  - Add Hardcoded the links into constant

## start build with browse page
  -- try to intgrate the tmdb api
  -- move the movie list to our redux store

## start create our own custom Hook
    useNowPlayingMovies()- custom hook

## start build browse page
   - design the video title
   - 
