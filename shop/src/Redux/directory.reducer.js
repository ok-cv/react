const INITIAL_STATE = {
  sections: [
    {
      title: 'Ancient Books',
      imageUrl: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      id: 1,
      linkUrl: 'store/ancient'
    },
    {
      title: 'Modern Books',
      imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890&q=80',
      id: 2,
      linkUrl: 'store/modern'
    },
    {
      title: 'Used Books',
      imageUrl: 'https://images.unsplash.com/photo-1476081718509-d5d0b661a376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      id: 3,
      linkUrl: 'store/used'
    },
    {
      title: 'New Books',
      imageUrl: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      id: 4,
      linkUrl: 'store/new'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
