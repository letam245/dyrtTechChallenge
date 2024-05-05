# The Dyrt Tech Challenge

You just started working for a new agency called "The Dirt" (with an "i"). You're asked to make a basic prototype app whose primary features are one in which the user may search for campgrounds and obtain information about a given campground, and one in which the user may view nearby campgrounds. A prior coworker made some progress on the project but left things several things unfinished and improperly configured. This is based on a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

**Your task is to complete the project by fixing any build or runtime issues with the existing code and by implementing the remaining features as described in the acceptance criteria below. The app should build and run on both iOS and Android.**

## Challenge Overview

We expect candidates to spend a few hours at most on this challenge - enough time to give you a chance to show us your skills but not so much to overwhelm your schedule. We're grateful you're considering joining our team and appreciate you taking the time to complete this challenge.

You may need to consult documentation or online resources to solve these issues.

### Working Requirements

1. Git should be used for version control and descriptive commit messages should be used periodically while working on the project.
2. The app should fuction and appear identically, where possible, for both iOS and Android.
3. The app should use React functional components and hooks.
4. Typescript should be used throughout the project.
5. For styling, the `StyleSheet` API provided by React Native should be used.
6. Add any documentation necessary for running this project in the README.md file of the project.
7. Upon completion the folder for this project should be compressed and emailed back to us.

## Acceptance Criteria

1. Two navigation tabs are always visible at the bottom of the app: a "Home" tab, and a "Search" tab.

    - the home tab has a "Home" icon and the search tab has a "Search" icon.

2. The acceptance criteria for the main screen of the "Home" tab are as follows:

    - the name of the app, "The Dirt" is displayed
    - the text "Welcome to the Dirt" is displayed
    - a "Show Nearby Locations" feature is displayed underneath the name and welcome text.

3. The acceptance criteria for the "Show Nearby Location" feature are as follows:

    - upon loading of this screen, a horizontally scrolling list of campground cards should appear below the button.
    - the campground cards should be rectangular and display the following information: campground name, and a prominently displayed photo.
    - the campgrounds that are populated in this list should be fetched from the **autocomplete endpoint**.
    - the user's current location should be used to supply the latitude and longitude parameters to the **autocomplete endpoint**. The location should be obtained using the `@react-native-community/geolocation` library
    - if the user does not grant location permissions, the text "Location permissions are required to view nearby campgrounds" should be displayed in place of the nearby campground cards.
    - only the first 10 campgrounds provided by the autocomplete endpoint which contain a `photoUrl` property which is not `null` should be displayed in the campground card list. No client side sorting of the order of campgrounds is necessary.
    - upon pressing on a campground card, navigation to a "Campground Screen" (contained within the "Home" tab) providing details about that campground should occur.

4. The acceptance criteria for the primary screen of the "Search" tab are as follows:

    - a search input field is located at the top of the screen which is always visible.
    - this input should initially display the placeholder text "Search for a campground"
    - upon typing a query in the search input, a scrollable list of campgrounds should appear in a container below it. This list should be populated with data from the **autocomplete endpoint**.
    - at a minimum the following information should be displayed for each item in this autocomplete campground list: campground name, region.
    - upon pressing on a campground search result item, the opacity of this item should change in order to give visual feedback of a successful item press to the user.
    - additionally, upon pressing on a campground item from the autocomplete campground list, navigation to a "Campground Screen" (contained within the "Search" tab) providing details about that campground should occur.

5. The acceptance criteria for the "Campground Screen" are as follows:

    - the name of the campground is displayed at the center of the screen's header
    - a back button is visible in the top left of the screen's header. Upon being pressed, this button takes the user back to the primary screen of the tab which the user was on before navigating to the campground screen.
    - this screen displays the following information: title, description, location, photo with data populated from the **campgrounds endpoint**

## The following endpoints and/or parameters may be used:

**Autocomplete**

- example 1: GET `https://staging.thedyrt.com/api/v6/autocomplete/campgrounds?q=<search_query>`
- example 2: GET `https://staging.thedyrt.com/api/v6/autocomplete/campgrounds?lat=<latitude>&lon=<longitude>`

**Campgrounds**

- example 1: GET `https://thedyrt.com/api/v6/campgrounds/<campground_id>`

## The Tech Stack

This project should at minimum include the usage of the included libaries. Additionally you may add any package of your choosing for icons, utility functions, state management, etc.

## Extra Credit

1. Implement loading and error states
2. Limit unneeded re-renders.
3. Write unit tests for app functionality

## On The Real

There are no strict design requirements for this assignment so use your creativity where there is any ambiguity in the above instructions. We primarily want to see how you approach development to get a sense of what kind of things you prioritize.

# React Native README

The following is the boilerplate README from the React Native CLI.

---

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
