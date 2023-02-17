export const handleChange = (event: React.ChangeEvent<HTMLInputElement>, values: any, setValues: Function) => {
    const property: string = event.target.name;
    const value: any = event.target.value;
    values = setNestedObjectValue(property, value, values);
    setValues({ ...values });
};

export const handleLovChange = (values: any, property: string, newValue: string, setValues: Function) => {
    setValues({ ...values, [property]: newValue });
};


function setNestedObjectValue(properties: string, value: any, obj = {}) {
    const propertyNames = properties.split('.');
    let currentObj:any = obj;
  
    for (let i = 0; i < propertyNames.length; i++) {
      const propertyName = propertyNames[i];
      const isLastProperty = i === propertyNames.length - 1;
  
      if (isLastProperty) {
        currentObj[propertyName] = value;
      } else if (!currentObj.hasOwnProperty(propertyName)) {
        currentObj[propertyName] = {};
      }
  
      currentObj = currentObj[propertyName];
    }
  
    return obj;
}
