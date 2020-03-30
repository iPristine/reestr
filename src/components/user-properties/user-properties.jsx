import React from "react";
import {UserProperty} from "../user-property/user-property";

export function UserProperties(props) {
  return (
    <div>
      {props.properties.map((property, index) => <UserProperty key={index} property = {property} />)}
    </div>
  )
}