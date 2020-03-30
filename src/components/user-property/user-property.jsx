import React from "react";
import style from './user-property.module.sass';

export function UserProperty(props) {
  const {property} = props;
  return (
    <div className={style.UserProperty}>
      <input value={property.name} placeholder={'свойство'} className={style.PropertyName} />
      <input value={property.value} placeholder={'значение'} className={style.PropertyValue}/>
    </div>
  );
}