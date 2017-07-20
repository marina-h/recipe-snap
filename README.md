# Recipe Snap

## About
A React Native mobile app that can search for recipes based on ingredients detected in food photos (either from your camera roll or directly from your camera) and lets you save/dismiss them through them in a Tinder-like swipe UI.

Created for the Grace Hopper Program at Fullstack Academy's 4-day Stackathon. See [this video](https://www.youtube.com/watch?v=7tiQ34W5pU8) for a short 4 min presentation of the app!

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app) and uses both [Clarifai's image recognition API (using the Food model)](https://clarifai.com/) and [Edamam's recipe search API](https://developer.edamam.com/edamam-recipe-api).

### Chooing a photo from the camera roll
<p align="center">
  <img src="https://media.giphy.com/media/aBicAH7wlPWO4/giphy.gif">
</p>

### Choosing ingredients and swiping through recipes
<p align="center">
  <img src="https://media.giphy.com/media/12hVJaNldTdJK0/giphy.gif">
</p>

## How to run locally
Clone and/or fork this repo and choose an option from below:

`npm start` - Runs your app in development mode. You can use the Expo app on your phone to scan the QR code to run it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

`npm run ios` - Just like npm start, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.
