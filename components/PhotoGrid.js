import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, FlatList, Image } from 'react-native'

import { formatPhotoUri } from '../api/picsum'

export default function PhotoGrid({ photos, numColumns, onEndReached }) {
  const { width } = Dimensions.get('window')

  const size = width / numColumns

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <Image
          source={{
            width: size,
            height: size,
            uri: formatPhotoUri(item.id, size, size),
          }}
        />
      )}
    />
  )
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  numColumns: PropTypes.number,
  onEndReached: PropTypes.func,
}
