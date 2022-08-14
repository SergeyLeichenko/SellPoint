export default function (instance) {
  return {
    get(slug, id) {
      return instance.get(`/products/delivery/services/${id}/${slug}/`);
    },
  };
}
