# Table of contents
* [General info](#general-info)
* [Used Stack](#used-stack)
* [Development decisions](#development-decisions)
* [Folder Structure](#folder-structure)
* [Setup](#setup)
* [Demo](#demo)
* [Future Enhancement](#future-enhancement)

# General Info 

Allows the users to search the `users` or `repositories` or `issues` on GitHub. 
Using Github New Api https://docs.github.com/en/rest

The App search users, repos, issues and cache search query in the localstorage with the result using redux and redux persist.

When user start typing and characters exceded 3 characters it the app will start changing the url 
to the category and keyword and then the Home page will hydrate the data from Url and start checking 
if the data already has been searched for before will recall it from localstorage provided by redux 
persist, if not will fire axios call to call github Api and return the data then List component will
take the data and category to decide to render which component.

# Used Stack
Created by `Create React App` with Typescript
  - React.js
  - TypeScript
  - Redux and redux-persist
  - React Router
  - Styled Components


# Development decisions

was thinking to implement Redux saga to listen to state change and fire the dispatch but it wasn't in 
the requirements.

<b>Why create react app</b>
create react app prepare everything to start modern single page with react 
and save a lot of time in setup the build configuration.

<b>Styled components</b>
has full theming support by exporting a <ThemeProvider> wrapper component. 
This component provides a theme to all React components underneath itself via the context API.
Which make it easy to add themes colors and fonts to provide for the needed component.

<b>Components</b>
Separting the components so it will be easy to be reuseable with less logic possible
while sometimes we need to write some logic.

<b>Service</b>
to Seperate the concern of coding by creating service which responsible only to fetch the data
and then the component will manage the request.

<b>User Profile</b>
doesn't have location or enough information to show as per the new API implementation.
so I went with only showing the name, image and follow link aslo I used the same user Profile 
in repos and issues but with a flag to change the layout.

<b>404</b>
Error Page if the path provided is not the right one

<b>Edge Cases</b>
All edge cases has been covered 
- long text
- empty keyword data will not recall the api will fetch it from localstorage
- deleting the keyword 
- etc..


# Folder Structure 

```
/src
  ├── __tests__       # For now it contains only App test
  ├── @types          # All Types used throught the app
  ├── assets          # Contains Logo and icons
  ├── constansts      # Global constats
  ├── components      # All Components 
  │   ├── UserProfile
  │   ├── Card
  │   ├── CardDetails
  │   ├── Header
  │   ├── Hooks
  │   ├── List
  │   ├── ListItem
  │   ├── Loader
  │   ├── Search
  │   ├── SearchInput
  │   ├── SelectInput
  ├── pages           # Containe ( Home, 404 ) pages
  │   ├── Home 
  │   ├── Error/404
  ├── service         # Service logic to connect to Github API
  ├── store           # Redux store setup ( actions, reduces )
  │   ├── actions
  │   ├── reducers 
  │   ├── store 
  ├── utils           # Utilites for hold helper functions
```

# Setup

Install dependencies:

```sh
yarn
```


Run App 
<i>to run localy you need to create `.env` file first and add Git_Token variables </i>

```sh
yarn start
```

Run Tests 

```sh
yarn test
```


# Demo
https://github-searcher-typescript.vercel.app/


# Future Enhancement

- Write more unit test
- Write Cypress test
- UI enhancment
- Performance enhanching ( Speed Index and Time to Interactive, dns-prefetch )
- Clear Localstorage after specific time
