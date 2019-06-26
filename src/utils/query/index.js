/*
 Upon receiving a facet and its selected/clicked value, returns an updated sourceQuery
*/
export const addRemoveFromQuery = (valueName, facet, sourceQuery) => {
  let modifiedQuery = { ...sourceQuery };

  if (facet.type === "text") {
    // Mutate the modifiedQuery to the corresponding state
    if (modifiedQuery[facet.key] === undefined) {
      // If the facet is not present in the query, we simply add it with its value
      modifiedQuery[facet.key] = { $in: [valueName] };
    } else if (modifiedQuery[facet.key]["$in"].includes(valueName)) {
      // If the facet is present in the query and if the value is already present we remove it from the query
      modifiedQuery[facet.key]["$in"] = modifiedQuery[facet.key]["$in"].filter(
        i => i !== valueName
      );
      if (modifiedQuery[facet.key]["$in"].length === 0) {
        delete modifiedQuery[facet.key];
      }
    } else {
      // Otherwise, add the value to the query
      modifiedQuery[facet.key]["$in"].push(valueName);
    }
  } else if (facet.type === "bool") {
    if (modifiedQuery[facet.key] === undefined) {
      // If the facet doesn't exist in the query, simply create it
      modifiedQuery[facet.key] = { $eq: valueName };
    } else if (modifiedQuery[facet.key]["$eq"] === valueName) {
      // If the facet exists in the query, and is of same value than existing, delete it
      delete modifiedQuery[facet.key];
    } else {
      // If the facet exists in the query and is of different value, replace with current value
      modifiedQuery[facet.key] = { $eq: valueName };
    }
  }
  return modifiedQuery;
};
