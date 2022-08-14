export default function (instance) {
  return {
    get(slug) {
      return instance.get(`/products/accessories/${slug}/`);
    },
  };
}
