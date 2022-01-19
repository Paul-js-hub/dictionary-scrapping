# Diction & dictionary scrapping

A backend application when given given a web page will download the text on it and output a sorted list of the unique words on the page, with counts of the occurrences.

# Requirements
For development, you are only required to have Node.js and a node global package, also Yarn, installed in your environment.

## Node
- ### Node Installation on Windows
  
  Go to [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- ### Node Installation on other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following commands.

    $ node --version
    v12.16.3

    $ npm --version
    6.14.4

# Installing

Go to the root folder and run the following:

    $ git clone https://github.com/Paul-js-hub/dictionary-scrapping.git
    $ cd dictionary-scrapping
    $ npm install

# Running the project

   $ npm start

Your app should now be running on `http://localhost:8080`

# Testing the project

Using API testing tool of your choice and with POST method enter `http://localhost:8080`

Under the body section using the url as the key place a url string as the value and click send as shown below:   

![Url Post Testing!](/images/url-post-test.png "Url Post Testing Image")