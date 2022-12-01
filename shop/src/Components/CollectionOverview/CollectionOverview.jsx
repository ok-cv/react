import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionSectionsAsArray } from 'Redux/collection.selectors'
import { CollectionPreview } from 'Components'

const CollectionOverview = ({ collectionSectionsArray }) => (
  <>
    {
      collectionSectionsArray.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </>
)

const mapState = createStructuredSelector({
  collectionSectionsArray: selectCollectionSectionsAsArray
})

export default connect(mapState)(CollectionOverview)
