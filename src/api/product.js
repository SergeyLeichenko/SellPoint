export default function (instance) {
  return {
    get(slug) {
      return instance.get(`/products/${slug}/`);
    },
    getCategory(slug) {
      return instance.get(`/products/category/${slug}/`);
    },
  };
}
