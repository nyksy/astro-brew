import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const MapComponent = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 800,
      }}
    >
      <Graticule stroke="#EAEAEC" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="rgb(217, 177, 113)"
              stroke="black"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[-2.0493847744981104, 57.369674476690825]}>
        <circle r={10} fill="#FFF" />
      </Marker>
    </ComposableMap>
  )
}

export default MapComponent
