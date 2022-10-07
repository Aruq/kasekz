export function traverseAndFlatten(currentNode: any, target: any, flattenedKey: any) {
  for (var key in currentNode) {
    if (currentNode.hasOwnProperty(key)) {
      var newKey;
      if (flattenedKey === undefined) {
        newKey = key;
      } else {
        newKey = flattenedKey + '.' + key;
      }

      var value = currentNode[key];
      if (typeof value === "object") {
        traverseAndFlatten(value, target, newKey);
      } else {
        target[newKey] = value;
      }
    }
  }
}

export function flatten(obj: any) {
  var flattenedObject = {};
  // @ts-ignore
  traverseAndFlatten(obj, flattenedObject);
  return flattenedObject;
}
