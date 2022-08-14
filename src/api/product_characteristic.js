export default function (instance) {
  return {
    get(id) {
      return instance.get(`/product/characteristics/${id}/`);
    },
  };
}
