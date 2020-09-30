##  Setup your environment

1. run `bash setup.sh` to
    + install [brew](https://brew.sh/), which is a package manager for mac
    + use `brew` to install [Docker](https://www.docker.com/)
2. register a Docker account (it's free). Then log in your Docker with that account.

## Run your page

There are two ways to run your site. The first way is to run it in your local host, the second way is to run it in a Docker container.

### Run in Docker

Run `bash docker-dev.sh` to kick-off your demo page. That's it.

That's it! Now you should the demo site is running at `http://localhost:8000`!

```
_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._
```

If you updated your code and want to see the changes, then:
1. run `bash docker-dev.sh` again.
2. refresh your browser!

### Run in local

There are many things you need to do in order to run the site in local.

1. Use node 12
2. `npm install`
3. `npm run dev`

That's it! Now you should the demo site is running at `http://localhost:8080`!

## Commands

There are some handy commands you may want to know:

- `npm run dev`: build your site and serve it at port 8080.
- `npm run start`: an alias of `npm run dev`.
- `npm run clean`: clean your local build.
- `npm run clean-plus`: clean your local build and everything else. But it won't clean your Docker.
- `npm run unit-test`: run the unit tests.
- `npm run docker-dev`: build and run your site in Docker.
- `npm run docker-clean`: clean your Docker container.
- `npm run docker-clean-plus`: clean your Docker entirely.

## What are the files?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── src

    ├── .gitignore

    ├── .dockerignore
    ├── Dockerfile

    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js

    ├── setup.sh
    ├── docker-dev.sh
    ├── docker-clean-container.sh
    ├── docker-clean-image.sh

    ├── LICENSE
    ├── package-lock.json
    ├── package.json

    └── README.md

+  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

+  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

+ **`.dockerignore`** This file tells Dokcer which files it should not care.
+ **`Docker`** This is the receipe of a Docker image.

+  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
+  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).
+  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
+  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

+ **`setup.sh`** This script installs `brew` and then installs `Docker`.
+ **`docker-dev.sh`** This script create an `image` called `maplesyrup/yonghe` and the create container called `yonghe_online`. After that, it runs the container and make sure you can see the demo on your host machine.
+ **`docker-clean-container.sh`** This script is to clean the created container.
+ **`docker-clean-image.sh`** This script is to clean the created image.

+  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.
+ **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
+ **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
+ **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.