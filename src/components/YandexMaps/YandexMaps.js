import React from "react";
import classes from "./YandexMaps.module.css";
import {
  YMaps,
  Map,
  RouteEditor,
  RulerControl,
  TypeSelector,
  GeolocationControl
} from "react-yandex-maps";


const YandexMaps = props => {
  const mapState = {
    center: [54.319658, 48.395774],
    zoom: 10
  };
  return (
    <div className={classes.size}>
    <YMaps>
      <div >
        <Map defaultState={mapState}>
          
          <RouteEditor
            data={{ title: "проложи маршрут" }}
            options={{ float: "right" }}
          />
          <RulerControl options={{ scaleLine: false }} />
          <TypeSelector defaultState={{ expanded: false }} />
          <GeolocationControl options={{ float: 'left' }} />
        </Map>
      </div>
    </YMaps>
    </div>
  );
};
export default YandexMaps;
