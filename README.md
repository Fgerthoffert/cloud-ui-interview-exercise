## Implementation

### TL/DR;

Once the basic routing/navigation has been configured, I Focused the effort on facilitating search and navigation across the potentially 5100 deployments (totalCount). The objective here was to facilitate discovering and filtering, answering in a single glance, questions such as:

- [Breakdown per region of the unhealthy snapshots](http://localhost:3000/deployments?q=%7B%22snapshots.healthy%22%3A%7B%22%24eq%22%3Afalse%7D%7D) ?
- [What is the conditions of the AP regions](http://localhost:3000/deployments?q=%7B%22regionId%22%3A%7B%22%24in%22%3A%5B%22ap-southeast-2%22%2C%22ap-northeast-1%22%2C%22ap-southeast-1%22%5D%7D%7D)?

A similar mechanism is provided today in the ESS deployments view, but the key difference here is that **discovery** is facilitated by providing the actual deployment counts and displaying only available values.

Routing to the deployment page is configured, but no effort was spent on styling the other pages. The various decisions taken here (folder structure, use of an abstraction layer over redux, ...), do not (at all) mean I disagree with how things are being done today, I just tried to do things differently to serve as a vector for discussion/questions in the context of this exercise (versus blindly reproducing what I can see in the repo).

The following has been implemented:

- Directory structure (detailed below)
- Navigation across pages using react-router (no hard reload)
- Basic redux state management
- Error page if navigating to an non-existing page
- Different error page with if accessing a [non-existing deployment](http://localhost:3000/deployment/a3443d37-faca-5595-87b9-5a4518b0a620efefe)
- Deployments list page with
  - Facets filtering with aggregation
  - Basic query mechanism (through the URL, allowing the page to be bookmarker)
  - Facets are defined in an array, can be extended without modifying the logic
  - Support two types of facets: text and boolean, could be extended easily to support numbers (sliders ?) or date
- Default placeholder for the deployment page
- Moved the navigation to the top bar to give more real-estate for the facets
- Linting
- Some tests

Not covered:

- The styling remain fairly rough
- No i18n
- Limited tests
- No styling in neighboring pages
- Did not setup storybook

### Project structure

I decided to go with a view-oriented structure. Each view being as self-contained as possible within its own directory.

```
src/
├── components/                 # Contains elements shared between multiple views, no redux state here
├── models/                     # Folder containing state management with one or more per view and potentially one for the entire app (for things such as connected user, ...)
├── utils/                      # Various utility functions
├── views/                      # First-level application views, typically one per route.
│   ├── Deployments/            # An example of a first-level application view.
│   │   ├── Facets/             # Facets are potentially complex and broken down in multiple components, so they get their own folder
│   │   ├── Count.js            # This is a simple enough component displayed on the main view, it doesn't go into its own folder
│   │   └── ...                 # more
```

### Redux

I used Rematch (https://github.com/rematch/rematch - https://www.npmjs.com/package/@rematch/core) to facilitate the use of redux. I understand there is a lot of debate around the relavant of using such abstractions layers on top of redux. But for an exercise such as this one, makes everything much faster to develop. Two things I find interesting with rematch:

- It does not change the way the components and view are using redux. So if there is a need to move away from rematch, this would only involve updating the reducers logic, not the actual view layer.
- It's a nice development experience to have the state/reducers logic for a single view (or element sharing a similar logic of a single view) in the same file.

### Tests

I simply went with jest, did not mock the redux state, which would have to be done for anything more complex than loading up local files

---

## Cloud UI Take Home Exercise

As the next step in the interview process, we’d like you to complete a take home exercise.

Let's assume `deployments.json` is the API response you want to present to the user of a cloud service. Every day, we work with data similar to what you'll find in the provided JSON file. It consists of a list of Elasticsearch deployments. A deployment is one or more products from the Elastic Stack configured to work together, each one in its own node. Each deployment has a number of properties such as: is the deployment healthy, is its configuration currently being updated, is it a premium deployment, does it have Kibana enabled, and so on.

The task is to create a dashboard presenting the data in the provided JSON in a clear and intuitive manner that allows a user to see everything that is relevant to them, but without overwhelming them either.

You can use this project to set up the environment quickly.
We recommend spending 3-4 hours on this exercise, but if you need more time, please let us know.

You can install the project with

```
yarn
```

and start it with

```
yarn start
```

## About this repo

This app uses [React](https://reactjs.org/) and was generated using [create-react-app](https://github.com/facebook/create-react-app). This is meant to give you a head start so you don't have to worry about app setup. We leveraged [React Router](https://github.com/ReactTraining/react-router) so you can easily setup additional routes if you'd like. Feel free to do what you wish with the code from here!

We've also included the [Elastic UI Framework](https://github.com/elastic/eui) (EUI) for you to use. The [EUI living style guide](https://elastic.github.io/eui/#/) provides plenty of examples for you to reference.
