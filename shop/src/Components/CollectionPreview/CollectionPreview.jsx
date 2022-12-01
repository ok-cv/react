import React from 'react'

import { CollectionItem } from 'Components'

import './CollectionPreview.css'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <div className="display-6">{title}</div>
    <div className="preview">
      {
        items.filter((_, i) => i < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview
