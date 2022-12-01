import React from 'react'
import { connect } from 'react-redux'

import { selectCollectionSection } from 'Redux/collection.selectors'
import { CollectionItem } from 'Components'

const CollectionPage = ({ collection: { title, items } }) => (
  <div className="collection-preview">
    <div className="display-6">{title}</div>
    <div className="preview">
      {
        items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
)

const mapState = (state, ownProps) => ({
  collection: selectCollectionSection(ownProps.match.params.collectionName)(state)
})

export default connect(mapState)(CollectionPage)
