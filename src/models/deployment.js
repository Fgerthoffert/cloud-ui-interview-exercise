import axios from "axios";

export default {
  state: {
    deployment: {},
    deploymentId: null
  },
  reducers: {
    setDeployment(state, payload) {
      return { ...state, deployment: payload };
    },
    setDeploymentId(state, payload) {
      return { ...state, deploymentId: payload };
    }
  },
  effects: {
    async initView(deploymentId) {
      // Record the requested deployment ID. Useful to display the error message in case the actual deployment is not found (i.e. if the link was bookmarked).
      this.setDeploymentId(deploymentId);
      this.setDeployment({});

      // Potentially we'd call a specific endpoint returning details just about this particular deployment ID.
      const deployments = await axios.get("/deployments.json");
      if (deployments.data !== undefined) {
        // Will return undefined if no deployment exist with this ID
        const deployment = deployments.data.record.find(
          dep => dep.id === deploymentId
        );
        this.setDeployment(deployment);
      }
    }
  }
};
