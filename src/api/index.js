import instance from "./instance";

import authModule from "./auth";
import productModule from "./product";
import productDetailModule from "./product-detail";
import filterModule from "./brands";
import npDepartmentModule from "./np_department";
import accessoriesModule from "./accessories";
import deliveryModule from "./delivery_services";
import regionsModule from "./regions";
import productCharacteristicsModule from "./product_characteristic";

export default {
  auth: authModule(instance),
  products: productModule(instance),
  productDetail: productDetailModule(instance),
  filtersBrand: filterModule(instance),
  npDepartment: npDepartmentModule(instance),
  accessories: accessoriesModule(instance),
  delivery: deliveryModule(instance),
  regions: regionsModule(instance),
  productCharacteristics: productCharacteristicsModule(instance),
};
