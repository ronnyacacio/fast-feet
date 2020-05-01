export function changePage(page) {
  return {
    type: '@pageSelect/CHANGE_PAGE',
    payload: { page },
  };
}
