export const getObjectValue = (obj: any, props: string) => {
    const propArray = props.split('.');
    let result = obj;
    for (let prop of propArray) {
        if (result.hasOwnProperty(prop)) {
            result = result[prop];
        } else {
            return '';
        }
    }
    return result || '';
};


export function setPropInObject(object: any, pathString: string, value: any): any {
    const path = pathString.split(".")
    if (value === '') {
      value = undefined;
    }
    if (path.length === 1) {
      object[path[0]] = value;
    } else if (path.length === 0) {
      return object;
    } else {
      if (object[path[0]]) {
        return setPropInObject(object[path[0]], path.slice(1).join("."), value);
      } else {
        object[path[0]] = {};
        return setPropInObject(object[path[0]], path.slice(1).join("."), value);
      }
    }
  }