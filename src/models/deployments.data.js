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

const sourceData = {
  isSearching: false,
  totalCount: 5100,
  record: [
    {
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
    },
    {
      regionId: "us-east-1",
      id: "071d305d-993f-590f-81c3-a462294674fa",
      name: "Down-sized upward-trending hub",
      displayId: "071d30",
      displayName: "Down-sized upward-trending hub",
      isStopped: false,
      healthy: true,
      user: {
        id: 108182,
        level: "standard",
        isPremium: false
      },
      plan: {
        healthy: true,
        isActive: true,
        isPending: false,
        version: "1.7.2",
        instanceCapacity: 2048,
        instanceCount: 1,
        availabilityZones: 1,
        configurationSteps: [
          {
            time: "2016-11-15T11:23:45.242Z",
            ok: true,
            type: "step-starting",
            value: "plan-validator"
          },
          {
            time: "2016-11-15T11:23:45.249Z",
            ok: true,
            type: "step-completed",
            value: "plan-validator"
          },
          {
            time: "2016-11-15T11:23:45.250Z",
            ok: true,
            type: "step-starting",
            value: "validate-elasticsearch-plugin-versions"
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
          total: 97,
          available: 97,
          unavailable: 0
        }
      },
      instances: {
        healthy: true,
        count: {
          total: 1,
          notRunning: 0,
          running: 1
        }
      },
      snapshots: {
        healthy: true,
        count: {
          total: 100
        },
        latest: {
          name: "scheduled-1483932071-instance-0000000023",
          success: true,
          time: "2017-01-09T03:23:46.759Z"
        }
      },
      kibana: {
        enabled: false
      },
      monitoring: {
        enabled: false
      }
    }
  ]
};

export default {
  state: {
    deployments: sourceData.record,
    deploymentsFiltered: sourceData.record,
    query: {},
    facets: buildFacets({}, sourceData.record, facetsConfig)
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
    async initView() {},
    async updateQuery() {},
    async updateFacets() {},
    async updateDeployments() {}
  }
};
