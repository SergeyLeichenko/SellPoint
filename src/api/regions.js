export default function (instance) {
  return {
    get(slug) {
      return instance.get(`/products/regions/${slug}/`);
    },
  };
}
