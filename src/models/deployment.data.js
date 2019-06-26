const sourceData = {
  regionId: "us-east-1",
  id: "affd5eb6-7e03-57c9-8e70-fe964a0c90a7",
  name: "Cross-group uniform application",
  displayId: "affd5e",
  displayName: "Cross-group uniform application",
  isStopped: false,
  healthy: false,
  user: {
    id: 407920,
    level: "standard",
    isPremium: false
  },
  plan: {
    healthy: true,
    isActive: true,
    isPending: false,
    version: "1.7.2",
    instanceCapacity: 1024,
    instanceCount: 1,
    availabilityZones: 2,
    configurationSteps: [
      {
        time: "2017-01-09T02:28:18.014Z",
        ok: true,
        type: "step-starting",
        value: "resolve-node-type"
      },
      {
        time: "2017-01-09T02:28:18.018Z",
        ok: true,
        type: "step-completed",
        value: "resolve-node-type"
      }
    ]
  },
  master: {
    healthy: true,
    count: 1
  },
  shards: {
    healthy: true,
    count: {
      total: 3,
      available: 3,
      unavailable: 0
    }
  },
  instances: {
    healthy: true,
    count: {
      total: 3,
      notRunning: 0,
      running: 3
    }
  },
  snapshots: {
    healthy: false,
    count: {
      total: 97
    },
    latest: {
      name: "scheduled-1483666147-instance-0000000056",
      success: true,
      time: "2017-01-06T01:29:25.142Z"
    }
  },
  kibana: {
    enabled: false
  },
  monitoring: {
    enabled: false
  }
};

export default {
  state: {
    deployment: sourceData,
    deploymentId: sourceData.id
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
    async initView() {}
  }
};
