export default function (instance) {
  return {
    get(id) {
      return instance.get(`/deliveries/department/${id}`);
    },
  };
}
