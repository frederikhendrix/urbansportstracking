# urbansportstracking

## introduction

Urban sports tracking is an application made to upload your training session and see in a graph how much impact you sustainded throughout the workout.

## setup

### downloads

Download visual studio code here -> https://code.visualstudio.com/download
Download the latest node.js here -> https://nodejs.org/en/download
Setup your environment. This is a React Native application and before you are able to run it you need some other things -> https://reactnative.dev/docs/environment-setup

Follow the steps above. On windows you need android studio and an android emulator. On mac you need xCode and an iOS emulator.

### steps to run the project

After running visual studio code create a folder and choose to work in that folder.
Click the button add project via github link.
Take this github link: https://github.com/frederikhendrix/urbansportstracking.git which is located here -> https://github.com/frederikhendrix/urbansportstracking and add this project to your created folder.

When you have access to the folder and all the files you need to run different terminal commands.
Open a terminal by clicking on the top navigation in visual studio code and add new terminal.

In this terminal run the cd command (Change Directory) and make sure you are within the urbansportstracking directory where all the files are located inside.

Add a new terminal by clicking the plus icon on the bottom/middle right of the screen where the top navigation from the terminal is. Also in this terminal make sure you are in the correct folder.

In the first terminal run your first actual command -> npm install
This command looks at your package.json file and installs all neccesary dependencies.

After installing the dependencies also in the first terminal run -> npx react-native start
This command runs the server on which your application will get all the data neccesary. WARNING: It runs on the default port on your pc. If you are running different servers on your laptop that use the same PORT it won't work.

In the second terminal run the command -> npx react-native run-android || npx react-native run-ios
You can only run-ios with a macbook and xCode. (Refer to documentation about environment-setup of the react native documentation)

Good job!! You ran the React Native project.

### information about the folders and structures

This is going to be some information about the project.
There are different folders. components, images, Screens, and within the components folder there is a main folder.

Most of these speak for themselves. In the App.js you only have the StackScreen components this is located in the /components/main/index.js
You need to understand that in that folder the entire navigation structure is located. All different stacks for screens and the bottom navigation.
