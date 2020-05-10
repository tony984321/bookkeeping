function createId(idName: string) {
  let id: number = parseInt(window.localStorage.getItem(idName) || '0') || 0;
  id++;
  window.localStorage.setItem(idName, id.toString());

  return id;
}

export default createId;
