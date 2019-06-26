import axios from "axios";
import sift from "sift";

import { buildFacets } from "../utils/facets/";

const facetsConfig = [
  { key: "regionId", name: "Regions", type: "text" },
  {
    key: "plan.healthy",
    name: "Plans",
    type: "bool",
    true: "Healthy",
    false: "Unhealthy"
  },
  {
    key: "master.healthy",
    name: "Masters",
    type: "bool",
    true: "Healthy",
    false: "Unhealthy"
  },
  {
    key: "shards.healthy",
    name: "Shards",
    type: "bool",
    true: "Healthy",
    false: "Unhealthy"
  },
  {
    key: "instances.healthy",
    name: "Instances",
    type: "bool",
    true: "Healthy",
    false: "Unhealthy"
  },
  {
    key: "snapshots.healthy",
    name: "Snapshots",
    type: "bool",
    true: "Healthy",
    false: "Unhealthy"
  }
];

export default {
  state: {
    deployments: [],
    deploymentsFiltered: [],
    query: {},
    facets: []
  },
  reducers: {
    setDeployments(state, payload) {
      return { ...state, deployments: payload };
    },
    setDeploymentsFiltered(state, payload) {
      return { ...state, deploymentsFiltered: payload };
    },
    setQuery(state, payload) {
      return { ...state, query: payload };
    },
    setFacets(state, payload) {
      return { ...state, facets: payload };
    }
  },
  effects: {
    async initView() {
      // We could be doing something much fancier, but here I'm just loading the JSON file into an array to be consumed by the deployments view.
      const deployments = await axios.get("/deployments.json");
      if (deployments.data !== undefined) {
        this.setDeployments(deployments.data.record);
        this.setDeploymentsFiltered(deployments.data.record);
      }

      // Re-initialize the query
      this.setQuery({});
    },

    async updateQuery(query) {
      this.setQuery(query);
      this.updateFacets(query);
      this.updateDeployments(query);
    },

    async updateFacets(query, rootState) {
      const updatedFacets = await buildFacets(
        query,
        rootState.deployments.deployments,
        facetsConfig
      );
      this.setFacets(updatedFacets);
    },
    async updateDeployments(query, rootState) {
      const depFiltered = rootState.deployments.deployments.filter(sift(query));
      this.setDeploymentsFiltered(depFiltered);
    }
  }
};
