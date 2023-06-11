# Personal Website

See: [duncanpharvey.com](https://duncanpharvey.com).

My personal website. An [MIT](https://github.com/duncanpharvey/personal-site/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application.. Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, and many other useful technologies.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/duncanpharvey/personal-site.git
cd personal-site
nvm install # this is optional - make sure you're running >= node 14 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Static Export

To statically export the site run `npm run predeploy`. This generates a static export of the website as `personal-site/build/`. Copy this and self-host or deploy to a CDN.
