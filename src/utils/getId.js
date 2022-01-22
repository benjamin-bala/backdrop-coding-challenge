export function getId(data, dispatch) {
  if (data.favourite.length > 0) {
    data.favourite.map(item => {
      dispatch({type: 'GET_LIKE_ID', payload: item.id});
    });
  }
}
