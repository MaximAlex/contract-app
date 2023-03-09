import { setPropInObject } from "../object";

export const handleChange = (event: React.ChangeEvent<HTMLInputElement>, values: any, setValues: Function) => {
  const property: string = event.target.name;
  const value: any = event.target.value;
  const newValues = { ...values };
  setPropInObject(newValues, property, value)
  setValues(newValues);
};

export const handleLovChange = (values: any, property: string, newValue: string, setValues: Function) => {
  setPropInObject(values, property, newValue)
  setValues({ ...values });
};


// function setNestedObjectValue(properties: string, value: any, obj = {}) {
//   const propertyNames = properties.split('.');
//   let currentObj: any = obj;
//   for (let i = 0; i < propertyNames.length; i++) {
//     const propertyName = propertyNames[i];
//     const isLastProperty = i === propertyNames.length - 1;
//     console.log(isLastProperty);
//     if (isLastProperty) {
//       currentObj[propertyName] = value;
//     } else if (!currentObj.hasOwnProperty(propertyName)) {
//       currentObj[propertyName] = {};
//     }

//     currentObj = currentObj[propertyName];
//   }

//   return obj;
// }


// /**
//  * Dynamically sets a deeply nested value in an object.
//  * Optionally "bores" a path to it if its undefined.
//  * @function
//  * @param {!object} obj  - The object which contains the value you want to change/set.
//  * @param {!array} path  - The array representation of path to the value you want to change/set.
//  * @param {!mixed} value - The value you want to set it to.
//  * @param {boolean} setrecursively - If true, will set value of non-existing path as well.
//  */
// function setDeep(object: any, pathString: string, value: any, setrecursively = true) {
//   let obj = { ...object };
//   const path = pathString.split(".");
//   path.reduce((a, b, level) => {
//     if (setrecursively && !a[b] && level !== path.length) {
//       a[b] = {};
//       return a[b];
//     }

//     if (level === path.length) {
//       a[b] = value;
//       return value;
//     }
//     return a[b];
//   }, obj);
//   console.log(obj);
//   return obj;
// }

