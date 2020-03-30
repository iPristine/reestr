import { observable, action, decorate, computed } from 'mobx';

class PropertiesStore {
  properties = [];

  get getProperties(){
    return [...this.properties]
  }

  addProperty(property){
    this.properties = [...this.properties, property];
  }
}

decorate(
  PropertiesStore,
  {
    getProperties: computed,
    properties: observable,
    addProperty: action
  });

export const propertiesStore = new PropertiesStore();

