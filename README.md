# Imgur Generator

A website that allows users to generate random images from imgur and manage favorites.

# Requirements

Install node package manager [npm](https://www.npmjs.com/).
You should be able to run the following commands.

```bash
node --version
npm --version
```

# Installation

```bash
git clone https://github.com/Nalhin/imgur-generator
cd imgur-generator
npm install
```

#  Start

```bash
npm run start
```

## Data

Imgur Generator generates 5 character hashes and keeps sending requests until a valid image is found. Subsequently, the image is displayed to the user. This app could be used to generate 6 or 7 character hashes, however with so many dead links it would take forever to find a valid one.

# Stack

React, React Router, Redux, Redux Saga, Sass, Firebase.

# What I learned

#### React Router basics.
#### Firebase.
#### Redux.
#### Redux Saga.
#### Asynchronous requests with Redux.
#### Scss.
#### BEM.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
