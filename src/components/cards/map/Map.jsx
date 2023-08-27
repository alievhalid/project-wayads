import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
function Maps() {
    const address = "Грозный"
    const key = "ac219913-4452-4145-8073-eec0e26635fb"
  return (
    <div>
        <YMaps>
      <div>
        <Map query={{ apikey: key }}
          defaultState={{
            center: [57.155372666744825, 65.54852849683395], // Координаты центра карты (Москва, Россия)
            zoom: 15, // Уровень масштабирования карты
          }}
          style={{ width: '500px', height: '200px'}}
        >
          <Placemark
            geometry={address} // Координаты метки, переданные извне (например, [55.7558, 37.6173])
          />
        </Map>
      </div>
    </YMaps>
    </div>
  )
}

export default Maps