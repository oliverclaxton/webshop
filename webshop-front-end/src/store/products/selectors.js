export function selectFeedLoading(reduxState) {
  return reduxState.feed.loading;
}

export function selectFeedProducts(reduxState) {
  console.log("i am the state");
  return reduxState.products;
}
