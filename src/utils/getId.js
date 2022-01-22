export function getId(data, dispatch) {
  data.map(item => {
    dispatch({type: 'GET_LIKE_ID', payload: item.id});
  });
}
