import { groupBy } from "lodash";
import sift from "sift";

export const buildFacets = (query, deployments, facets) => {
  return facets.map(facet => {
    return {
      ...facet,
      values: buildFacetValues(query, deployments, facet)
    };
  });
};

const buildFacetValues = (query, deployments, facet) => {
  let facetQuery = { ...query };

  // We want to display all available facets, so if a particular facet already has an element selected, we clear the facet
  // from the query to display all available values
  if (facetQuery[facet.key] !== undefined) {
    delete facetQuery[facet.key];
  }
  const filteredDeployments = deployments.filter(sift(facetQuery));

  const statesGroup = groupBy(filteredDeployments, facet.key);
  return Object.entries(statesGroup).map(([name, content]) => {
    return {
      // Booleans automatically get converted to a string by groupBy, this gets it back to an actual boolean
      value: facet.type !== "bool" ? name : name === "true",
      deployments: Object.values(content),
      count: Object.values(content).length
    };
  });
};
