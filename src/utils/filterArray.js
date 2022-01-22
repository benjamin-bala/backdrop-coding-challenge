export default function filterArray(prevData, newData) {
  let isAvailable = false;
  let filteredData = [];

  prevData.map(item => {
    if (newData.id) {
      if (item.id === newData.id) {
        return (isAvailable = true);
      }
    } else {
      if (item === newData) {
        return (isAvailable = true);
      }
    }
  });
  if (!isAvailable) {
    return [newData, ...prevData];
  } else {
    let filteredPrevData = prevData.filter(item => {
      if (item.id) {
        return item.id !== newData.id;
      }
      return item !== newData;
    });
    filteredData = filteredPrevData;
  }

  return filteredData;
}
