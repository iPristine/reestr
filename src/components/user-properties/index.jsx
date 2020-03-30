import React from 'react';
import { observer, inject } from 'mobx-react';

import {UserProperties} from "./user-properties";

const Component = inject('propertiesStore')(observer(({ propertiesStore }) => (
  <UserProperties
    properties = {propertiesStore.getProperties}
  />
)));

Component.displayName = "UserPropertiesContainer";
export default Component;