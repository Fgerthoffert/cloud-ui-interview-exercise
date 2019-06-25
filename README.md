## Implementation

### Intro

Instead executing the exercise by replicating what I've seen in the codebase, I made the decision to consider it as a project starting from scratch, taking some decisions (detailed below) that can be used as a base for our discussion.

### Project structure

I decided to go with a view-oriented structure. Each view being as self-contained as possible within its own directory.

src
|- components: components shared between multiple views, those components are not be connected to a redux state
|- views: set of first-level application views, typically one folder per route. There would be minimal data wrangling happening in this folder. Each of the views folder would contain a lot of react components with the objective of limiting re-rendering in the event of state change.
|--|- deployments: The deployments view folder
|--|--|- index.js: Ideally just the overall layout and a simple view init called by componentDidMount()
|--|--|- table: Folder containing the table to be rendered
|--|--|--|- index.js: Root of the table component
|--|--|--|- refresh.js: If the table were to contain a data refresh button, this would be its own class, connected to the corresponding reducers
|--|--|--|--|- expand: We might want to allow the user to display an expanded view of a particular row, this could go in a dedicated subfolder of the table directory, breaking it down in multiple components depending of the specs.

|- models: folder containing the logic around state management, there would typically be one or more global models to handle states shared between views (such as connected user, API health status, log facilities, ...) and one or more model per view. Most data wrangling/manipulation would be happening here

#### Displaying the region

I used the region ID as an illustration of the project structure.

The 2 views are both displaying the region, with slight variation:

- In the deployments table, we display the region, with a tooltip displaying how many deployments are in that region
- In the deployment view, we only display the region

A region component has been created in `components/region` and contains the common/standardized way of displaying a region for the entire app. This component receive `regionId` as a prop, and display a small "world" icon next to the ID. Would could have imagined passing an object containing things like actual location, provider, ... to the component if those were made available.

The deployment view simply call that reusable region component directly.

The deployments view, renders an intermediary component `RegionTooltip`, which fetches from the redux store, the number of deployments happening in that particular region and display that using a tooltip. It then renders the reusable region component.

### Redux

Redux is probably overkill for this exercise since most of the datafetching could simply happen in the componentDidMount() of the root view.

I used Rematch (https://github.com/rematch/rematch - https://www.npmjs.com/package/@rematch/core) to facilitate the use of redux. I understand there is a lot of debate around the relavant of using such abstractions layers on top of redux. Two things I find interesting with redux though:

- It does not change the way the components and view are using redux. So moving away from rematch, if there was a need to in the future, would only involve updating the reducers logic, not the actual view layer
- It's a nice development experience to have the state/reducers logic in the same file.

### Layout

I didn't answer (yet) the core of the exercise which is around displaying the actual data in a user-friendly manner.

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
