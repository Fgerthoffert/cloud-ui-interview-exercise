import axios from "axios";

export default {
  state: {
    deployments: []
  },
  reducers: {
    setDeployments(state, payload) {
      return { ...state, deployments: payload };
    }
  },
  effects: {
    async initView() {
      // We could be doing something much fancier, but here I'm just loading the JSON file into an array to be consumed by the deployments view.
      const deployments = await axios.get("/deployments.json");
      if (deployments.data !== undefined) {
        this.setDeployments(deployments.data.record);
      }
    }
  }
};
