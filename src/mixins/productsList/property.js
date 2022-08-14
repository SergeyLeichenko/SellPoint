export default {
  data() {
    return {
      isOpenList: false,
      isOpenList_1: false,
      isOpenList_2: false,
      isOpenList_3: false,
      isOpenList_4: false,
      isOpenList_5: false,
      isOpenList_6: false,
      isOpenList_7: false,
      isOpenList_8: false,
      isOpenList_9: false,
      isOpenList_10: false,
      isOpenList_11: false,
      isOpenList_12: false,
      isOpenList_13: false,
      isOpenList_14: false,
      isOpenList_15: false,
      isOpenList_16: false,
      isOpenList_17: false,
      isOpenList_18: false,
      isOpenList_19: false,
      text: "characteristics=",
      property: [],
      property_1: [],
      property_2: [],
      property_3: [],
      property_4: [],
      property_5: [],
      property_6: [],
      property_7: [],
      property_8: [],
      property_9: [],
      property_10: [],
      property_11: [],
      property_12: [],
      property_13: [],
      property_14: [],
      property_15: [],
      property_16: [],
      property_17: [],
      property_18: [],
      property_19: [],
      characteristics: [],
      isProperty: [],
      isProperty_1: [],
      isProperty_2: [],
      isProperty_3: [],
      isProperty_4: [],
      isProperty_5: [],
      isProperty_6: [],
      isProperty_7: [],
      isProperty_8: [],
      isProperty_9: [],
      isProperty_10: [],
      isProperty_11: [],
      isProperty_12: [],
      isProperty_13: [],
      isProperty_14: [],
      isProperty_15: [],
      isProperty_16: [],
      isProperty_17: [],
      isProperty_18: [],
      isProperty_19: [],
      isShowItemProperty: [],
      isShowItemProperty_1: [],
      isShowItemProperty_2: [],
      isShowItemProperty_3: [],
      isShowItemProperty_4: [],
      isShowItemProperty_5: [],
      isShowItemProperty_6: [],
      isShowItemProperty_7: [],
      isShowItemProperty_8: [],
      isShowItemProperty_9: [],
      isShowItemProperty_10: [],
      isShowItemProperty_11: [],
      isShowItemProperty_12: [],
      isShowItemProperty_13: [],
      isShowItemProperty_14: [],
      isShowItemProperty_15: [],
      isShowItemProperty_16: [],
      isShowItemProperty_17: [],
      isShowItemProperty_18: [],
      isShowItemProperty_19: [],
    };
  },
  methods: {
    // filter properties
    async uniqueCheck(index) {
      this.$set(this.isProperty, index, !this.isProperty[index]);
      this.$set(
        this.isShowItemProperty,
        index,
        !this.isShowItemProperty[index]
      );
      sessionStorage.setItem("isProperty", JSON.stringify(this.isProperty));
      sessionStorage.setItem(
        "isShowItemProperty",
        JSON.stringify(this.isShowItemProperty)
      );
      sessionStorage.setItem("property", JSON.stringify(this.property));

      if (this.property.length) {
        await this.getFiltersProducts();
      } else if (!this.property.length) {
        sessionStorage.removeItem("property");
        sessionStorage.removeItem("isShowItemProperty");
        sessionStorage.removeItem("IsProperty");

        await this.getFiltersProducts();
      } else {
        await this.getProductsList();
      }
    },
    async uniqueCheck1(index) {
      this.$set(this.isProperty_1, index, !this.isProperty_1[index]);
      this.$set(
        this.isShowItemProperty_1,
        index,
        !this.isShowItemProperty_1[index]
      );

      sessionStorage.setItem("isProperty_1", JSON.stringify(this.isProperty_1));
      sessionStorage.setItem(
        "isShowItemProperty_1",
        JSON.stringify(this.isShowItemProperty_1)
      );
      sessionStorage.setItem("property_1", JSON.stringify(this.property_1));

      if (this.property_1.length) {
        await this.getFiltersProducts();
      } else if (!this.property_1.length) {
        sessionStorage.removeItem("property_1");
        sessionStorage.removeItem("isShowItemProperty_1");
        sessionStorage.removeItem("IsProperty_1");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck2(index) {
      this.$set(this.isProperty_2, index, !this.isProperty_2[index]);
      this.$set(
        this.isShowItemProperty_2,
        index,
        !this.isShowItemProperty_2[index]
      );

      sessionStorage.setItem("isProperty_2", JSON.stringify(this.isProperty_2));
      sessionStorage.setItem(
        "isShowItemProperty_2",
        JSON.stringify(this.isShowItemProperty_2)
      );
      sessionStorage.setItem("property_2", JSON.stringify(this.property_2));

      if (this.property_2.length) {
        await this.getFiltersProducts();
      } else if (!this.property_2.length) {
        sessionStorage.removeItem("property_2");
        sessionStorage.removeItem("isShowItemProperty_2");
        sessionStorage.removeItem("IsProperty_2");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck3(index) {
      this.$set(this.isProperty_3, index, !this.isProperty_3[index]);
      this.$set(
        this.isShowItemProperty_3,
        index,
        !this.isShowItemProperty_3[index]
      );

      sessionStorage.setItem("isProperty_3", JSON.stringify(this.isProperty_3));
      sessionStorage.setItem(
        "isShowItemProperty_3",
        JSON.stringify(this.isShowItemProperty_3)
      );
      sessionStorage.setItem("property_3", JSON.stringify(this.property_3));

      if (this.property_3.length) {
        await this.getFiltersProducts();
      } else if (!this.property_3.length) {
        sessionStorage.removeItem("property_3");
        sessionStorage.removeItem("isShowItemProperty_3");
        sessionStorage.removeItem("IsProperty_3");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck4(index) {
      this.$set(this.isProperty_4, index, !this.isProperty_4[index]);
      this.$set(
        this.isShowItemProperty_4,
        index,
        !this.isShowItemProperty_4[index]
      );

      sessionStorage.setItem("isProperty_4", JSON.stringify(this.isProperty_4));
      sessionStorage.setItem(
        "isShowItemProperty_4",
        JSON.stringify(this.isShowItemProperty_4)
      );
      sessionStorage.setItem("property_4", JSON.stringify(this.property_4));

      if (this.property_4.length) {
        await this.getFiltersProducts();
      } else if (!this.property_4.length) {
        sessionStorage.removeItem("property_4");
        sessionStorage.removeItem("isShowItemProperty_4");
        sessionStorage.removeItem("IsProperty_4");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck5(index) {
      this.$set(this.isProperty_5, index, !this.isProperty_5[index]);
      this.$set(
        this.isShowItemProperty_5,
        index,
        !this.isShowItemProperty_5[index]
      );

      sessionStorage.setItem("isProperty_5", JSON.stringify(this.isProperty_5));
      sessionStorage.setItem(
        "isShowItemProperty_5",
        JSON.stringify(this.isShowItemProperty_5)
      );
      sessionStorage.setItem("property_5", JSON.stringify(this.property_5));

      if (this.property_5.length) {
        await this.getFiltersProducts();
      } else if (!this.property_5.length) {
        sessionStorage.removeItem("property_5");
        sessionStorage.removeItem("isShowItemProperty_5");
        sessionStorage.removeItem("IsProperty_5");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck6(index) {
      this.$set(this.isProperty_6, index, !this.isProperty_6[index]);
      this.$set(
        this.isShowItemProperty_6,
        index,
        !this.isShowItemProperty_6[index]
      );

      sessionStorage.setItem("isProperty_6", JSON.stringify(this.isProperty_6));
      sessionStorage.setItem(
        "isShowItemProperty_6",
        JSON.stringify(this.isShowItemProperty_6)
      );
      sessionStorage.setItem("property_6", JSON.stringify(this.property_6));

      if (this.property_6.length) {
        await this.getFiltersProducts();
      } else if (!this.property_6.length) {
        sessionStorage.removeItem("property_6");
        sessionStorage.removeItem("isShowItemProperty_6");
        sessionStorage.removeItem("IsProperty_6");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck7(index) {
      this.$set(this.isProperty_7, index, !this.isProperty_7[index]);
      this.$set(
        this.isShowItemProperty_7,
        index,
        !this.isShowItemProperty_7[index]
      );

      sessionStorage.setItem("isProperty_7", JSON.stringify(this.isProperty_7));
      sessionStorage.setItem(
        "isShowItemProperty_7",
        JSON.stringify(this.isShowItemProperty_7)
      );
      sessionStorage.setItem("property_7", JSON.stringify(this.property_7));

      if (this.property_7.length) {
        await this.getFiltersProducts();
      } else if (!this.property_7.length) {
        sessionStorage.removeItem("property_7");
        sessionStorage.removeItem("isShowItemProperty_7");
        sessionStorage.removeItem("IsProperty_7");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck8(index) {
      this.$set(this.isProperty_8, index, !this.isProperty_8[index]);
      this.$set(
        this.isShowItemProperty_8,
        index,
        !this.isShowItemProperty_8[index]
      );

      sessionStorage.setItem("isProperty_8", JSON.stringify(this.isProperty_8));
      sessionStorage.setItem(
        "isShowItemProperty_8",
        JSON.stringify(this.isShowItemProperty_8)
      );
      sessionStorage.setItem("property_8", JSON.stringify(this.property_8));

      if (this.property_8.length) {
        await this.getFiltersProducts();
      } else if (!this.property_8.length) {
        sessionStorage.removeItem("property_8");
        sessionStorage.removeItem("isShowItemProperty_8");
        sessionStorage.removeItem("IsProperty_8");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck9(index) {
      this.$set(this.isProperty_9, index, !this.isProperty_9[index]);
      this.$set(
        this.isShowItemProperty_9,
        index,
        !this.isShowItemProperty_9[index]
      );

      sessionStorage.setItem("isProperty_9", JSON.stringify(this.isProperty_9));
      sessionStorage.setItem(
        "isShowItemProperty_9",
        JSON.stringify(this.isShowItemProperty_9)
      );
      sessionStorage.setItem("property_9", JSON.stringify(this.property_9));

      if (this.property_9.length) {
        await this.getFiltersProducts();
      } else if (!this.property_9.length) {
        sessionStorage.removeItem("property_9");
        sessionStorage.removeItem("isShowItemProperty_9");
        sessionStorage.removeItem("IsProperty_9");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck10(index) {
      this.$set(this.isProperty_10, index, !this.isProperty_10[index]);
      this.$set(
        this.isShowItemProperty_10,
        index,
        !this.isShowItemProperty_10[index]
      );

      sessionStorage.setItem(
        "isProperty_10",
        JSON.stringify(this.isProperty_10)
      );
      sessionStorage.setItem(
        "isShowItemProperty_10",
        JSON.stringify(this.isShowItemProperty_10)
      );
      sessionStorage.setItem("property_10", JSON.stringify(this.property_10));

      if (this.property_10.length) {
        await this.getFiltersProducts();
      } else if (!this.property_10.length) {
        sessionStorage.removeItem("property_10");
        sessionStorage.removeItem("isShowItemProperty_10");
        sessionStorage.removeItem("IsProperty_10");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck11(index) {
      this.$set(this.isProperty_11, index, !this.isProperty_11[index]);
      this.$set(
        this.isShowItemProperty_11,
        index,
        !this.isShowItemProperty_11[index]
      );

      sessionStorage.setItem(
        "isProperty_11",
        JSON.stringify(this.isProperty_11)
      );
      sessionStorage.setItem(
        "isShowItemProperty_11",
        JSON.stringify(this.isShowItemProperty_11)
      );
      sessionStorage.setItem("property_11", JSON.stringify(this.property_11));

      if (this.property_11.length) {
        await this.getFiltersProducts();
      } else if (!this.property_11.length) {
        sessionStorage.removeItem("property_11");
        sessionStorage.removeItem("isShowItemProperty_11");
        sessionStorage.removeItem("IsProperty_11");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck12(index) {
      this.$set(this.isProperty_12, index, !this.isProperty_12[index]);
      this.$set(
        this.isShowItemProperty_12,
        index,
        !this.isShowItemProperty_12[index]
      );

      sessionStorage.setItem(
        "isProperty_12",
        JSON.stringify(this.isProperty_12)
      );
      sessionStorage.setItem(
        "isShowItemProperty_12",
        JSON.stringify(this.isShowItemProperty_12)
      );
      sessionStorage.setItem("property_12", JSON.stringify(this.property_12));

      if (this.property_12.length) {
        await this.getFiltersProducts();
      } else if (!this.property_12.length) {
        sessionStorage.removeItem("property_12");
        sessionStorage.removeItem("isShowItemProperty_12");
        sessionStorage.removeItem("IsProperty_12");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck13(index) {
      this.$set(this.isProperty_13, index, !this.isProperty_13[index]);
      this.$set(
        this.isShowItemProperty_13,
        index,
        !this.isShowItemProperty_13[index]
      );

      sessionStorage.setItem(
        "isProperty_13",
        JSON.stringify(this.isProperty_13)
      );
      sessionStorage.setItem(
        "isShowItemProperty_13",
        JSON.stringify(this.isShowItemProperty_13)
      );
      sessionStorage.setItem("property_13", JSON.stringify(this.property_13));

      if (this.property_13.length) {
        await this.getFiltersProducts();
      } else if (!this.property_13.length) {
        sessionStorage.removeItem("property_13");
        sessionStorage.removeItem("isShowItemProperty_13");
        sessionStorage.removeItem("IsProperty_13");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck14(index) {
      this.$set(this.isProperty_14, index, !this.isProperty_14[index]);
      this.$set(
        this.isShowItemProperty_14,
        index,
        !this.isShowItemProperty_14[index]
      );

      sessionStorage.setItem(
        "isProperty_14",
        JSON.stringify(this.isProperty_14)
      );
      sessionStorage.setItem(
        "isShowItemProperty_14",
        JSON.stringify(this.isShowItemProperty_14)
      );
      sessionStorage.setItem("property_14", JSON.stringify(this.property_14));

      if (this.property_14.length) {
        await this.getFiltersProducts();
      } else if (!this.property_14.length) {
        sessionStorage.removeItem("property_14");
        sessionStorage.removeItem("isShowItemProperty_14");
        sessionStorage.removeItem("IsProperty_14");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck15(index) {
      this.$set(this.isProperty_15, index, !this.isProperty_15[index]);
      this.$set(
        this.isShowItemProperty_15,
        index,
        !this.isShowItemProperty_15[index]
      );

      sessionStorage.setItem(
        "isProperty_15",
        JSON.stringify(this.isProperty_15)
      );
      sessionStorage.setItem(
        "isShowItemProperty_15",
        JSON.stringify(this.isShowItemProperty_15)
      );
      sessionStorage.setItem("property_15", JSON.stringify(this.property_15));

      if (this.property_15.length) {
        await this.getFiltersProducts();
      } else if (!this.property_15.length) {
        sessionStorage.removeItem("property_15");
        sessionStorage.removeItem("isShowItemProperty_15");
        sessionStorage.removeItem("IsProperty_15");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck16(index) {
      this.$set(this.isProperty_16, index, !this.isProperty_16[index]);
      this.$set(
        this.isShowItemProperty_16,
        index,
        !this.isShowItemProperty_16[index]
      );

      sessionStorage.setItem(
        "isProperty_16",
        JSON.stringify(this.isProperty_16)
      );
      sessionStorage.setItem(
        "isShowItemProperty_16",
        JSON.stringify(this.isShowItemProperty_16)
      );
      sessionStorage.setItem("property_16", JSON.stringify(this.property_16));

      if (this.property_16.length) {
        await this.getFiltersProducts();
      } else if (!this.property_16.length) {
        sessionStorage.removeItem("property_16");
        sessionStorage.removeItem("isShowItemProperty_16");
        sessionStorage.removeItem("IsProperty_16");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck17(index) {
      this.$set(this.isProperty_17, index, !this.isProperty_17[index]);
      this.$set(
        this.isShowItemProperty_17,
        index,
        !this.isShowItemProperty_17[index]
      );

      sessionStorage.setItem(
        "isProperty_17",
        JSON.stringify(this.isProperty_17)
      );
      sessionStorage.setItem(
        "isShowItemProperty_17",
        JSON.stringify(this.isShowItemProperty_17)
      );
      sessionStorage.setItem("property_17", JSON.stringify(this.property_17));

      if (this.property_17.length) {
        await this.getFiltersProducts();
      } else if (!this.property_17.length) {
        sessionStorage.removeItem("property_17");
        sessionStorage.removeItem("isShowItemProperty_17");
        sessionStorage.removeItem("IsProperty_17");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck18(index) {
      this.$set(this.isProperty_18, index, !this.isProperty_18[index]);
      this.$set(
        this.isShowItemProperty_18,
        index,
        !this.isShowItemProperty_18[index]
      );

      sessionStorage.setItem(
        "isProperty_18",
        JSON.stringify(this.isProperty_18)
      );
      sessionStorage.setItem(
        "isShowItemProperty_18",
        JSON.stringify(this.isShowItemProperty_18)
      );
      sessionStorage.setItem("property_18", JSON.stringify(this.property_18));

      if (this.property_18.length) {
        await this.getFiltersProducts();
      } else if (!this.property_18.length) {
        sessionStorage.removeItem("property_18");
        sessionStorage.removeItem("isShowItemProperty_18");
        sessionStorage.removeItem("IsProperty_18");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    async uniqueCheck19(index) {
      this.$set(this.isProperty_19, index, !this.isProperty_19[index]);
      this.$set(
        this.isShowItemProperty_19,
        index,
        !this.isShowItemProperty_19[index]
      );

      sessionStorage.setItem(
        "isProperty_19",
        JSON.stringify(this.isProperty_19)
      );
      sessionStorage.setItem(
        "isShowItemProperty_19",
        JSON.stringify(this.isShowItemProperty_19)
      );
      sessionStorage.setItem("property_19", JSON.stringify(this.property_19));

      if (this.property_19.length) {
        await this.getFiltersProducts();
      } else if (!this.property_19.length) {
        sessionStorage.removeItem("property_19");
        sessionStorage.removeItem("isShowItemProperty_19");
        sessionStorage.removeItem("IsProperty_19");

        await this.getFiltersProducts();
      } else {
        await this.getFiltersProducts();
      }
    },
    // get active property_1
    getActiveIsProperty() {
      if (
        sessionStorage.getItem("isProperty") &&
        sessionStorage.getItem("isShowItemProperty") &&
        sessionStorage.getItem("property")
      ) {
        this.isProperty = JSON.parse(sessionStorage.getItem("isProperty"));
        this.isShowItemProperty = JSON.parse(
          sessionStorage.getItem("isShowItemProperty")
        );
        this.property = JSON.parse(sessionStorage.getItem("property"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty1() {
      if (
        sessionStorage.getItem("isProperty_1") &&
        sessionStorage.getItem("isShowItemProperty_1") &&
        sessionStorage.getItem("property_1")
      ) {
        this.isProperty_1 = JSON.parse(sessionStorage.getItem("isProperty_1"));
        this.isShowItemProperty_1 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_1")
        );
        this.property_1 = JSON.parse(sessionStorage.getItem("property_1"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty2() {
      if (
        sessionStorage.getItem("isProperty_2") &&
        sessionStorage.getItem("isShowItemProperty_2") &&
        sessionStorage.getItem("property_2")
      ) {
        this.isProperty_2 = JSON.parse(sessionStorage.getItem("isProperty_2"));
        this.isShowItemProperty_2 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_2")
        );
        this.property_2 = JSON.parse(sessionStorage.getItem("property_2"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty3() {
      if (
        sessionStorage.getItem("isProperty_3") &&
        sessionStorage.getItem("isShowItemProperty_3") &&
        sessionStorage.getItem("property_3")
      ) {
        this.isProperty_3 = JSON.parse(sessionStorage.getItem("isProperty_3"));
        this.isShowItemProperty_3 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_3")
        );
        this.property_3 = JSON.parse(sessionStorage.getItem("property_3"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty4() {
      if (
        sessionStorage.getItem("isProperty_4") &&
        sessionStorage.getItem("isShowItemProperty_4") &&
        sessionStorage.getItem("property_4")
      ) {
        this.isProperty_4 = JSON.parse(sessionStorage.getItem("isProperty_4"));
        this.isShowItemProperty_4 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_4")
        );
        this.property_4 = JSON.parse(sessionStorage.getItem("property_4"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty5() {
      if (
        sessionStorage.getItem("isProperty_5") &&
        sessionStorage.getItem("isShowItemProperty_5") &&
        sessionStorage.getItem("property_5")
      ) {
        this.isProperty_5 = JSON.parse(sessionStorage.getItem("isProperty_5"));
        this.isShowItemProperty_5 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_5")
        );
        this.property_5 = JSON.parse(sessionStorage.getItem("property_5"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty6() {
      if (
        sessionStorage.getItem("isProperty_6") &&
        sessionStorage.getItem("isShowItemProperty_6") &&
        sessionStorage.getItem("property_6")
      ) {
        this.isProperty_6 = JSON.parse(sessionStorage.getItem("isProperty_6"));
        this.isShowItemProperty_6 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_6")
        );
        this.property_6 = JSON.parse(sessionStorage.getItem("property_6"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty7() {
      if (
        sessionStorage.getItem("isProperty_7") &&
        sessionStorage.getItem("isShowItemProperty_7") &&
        sessionStorage.getItem("property_7")
      ) {
        this.isProperty_7 = JSON.parse(sessionStorage.getItem("isProperty_7"));
        this.isShowItemProperty_7 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_7")
        );
        this.property_7 = JSON.parse(sessionStorage.getItem("property_7"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty8() {
      if (
        sessionStorage.getItem("isProperty_8") &&
        sessionStorage.getItem("isShowItemProperty_8") &&
        sessionStorage.getItem("property_8")
      ) {
        this.isProperty_8 = JSON.parse(sessionStorage.getItem("isProperty_8"));
        this.isShowItemProperty_8 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_8")
        );
        this.property_8 = JSON.parse(sessionStorage.getItem("property_8"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty9() {
      if (
        sessionStorage.getItem("isProperty_9") &&
        sessionStorage.getItem("isShowItemProperty_9") &&
        sessionStorage.getItem("property_9")
      ) {
        this.isProperty_9 = JSON.parse(sessionStorage.getItem("isProperty_9"));
        this.isShowItemProperty_9 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_9")
        );
        this.property_9 = JSON.parse(sessionStorage.getItem("property_9"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty10() {
      if (
        sessionStorage.getItem("isProperty_10") &&
        sessionStorage.getItem("isShowItemProperty_10") &&
        sessionStorage.getItem("property_10")
      ) {
        this.isProperty_10 = JSON.parse(
          sessionStorage.getItem("isProperty_10")
        );
        this.isShowItemProperty_10 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_10")
        );
        this.property_10 = JSON.parse(sessionStorage.getItem("property_10"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty11() {
      if (
        sessionStorage.getItem("isProperty_11") &&
        sessionStorage.getItem("isShowItemProperty_11") &&
        sessionStorage.getItem("property_11")
      ) {
        this.isProperty_11 = JSON.parse(
          sessionStorage.getItem("isProperty_11")
        );
        this.isShowItemProperty_11 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_11")
        );
        this.property_11 = JSON.parse(sessionStorage.getItem("property_11"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty12() {
      if (
        sessionStorage.getItem("isProperty_12") &&
        sessionStorage.getItem("isShowItemProperty_12") &&
        sessionStorage.getItem("property_12")
      ) {
        this.isProperty_12 = JSON.parse(
          sessionStorage.getItem("isProperty_12")
        );
        this.isShowItemProperty_12 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_12")
        );
        this.property_12 = JSON.parse(sessionStorage.getItem("property_12"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty13() {
      if (
        sessionStorage.getItem("isProperty_13") &&
        sessionStorage.getItem("isShowItemProperty_13") &&
        sessionStorage.getItem("property_13")
      ) {
        this.isProperty_13 = JSON.parse(
          sessionStorage.getItem("isProperty_13")
        );
        this.isShowItemProperty_13 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_13")
        );
        this.property_13 = JSON.parse(sessionStorage.getItem("property_13"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty14() {
      if (
        sessionStorage.getItem("isProperty_14") &&
        sessionStorage.getItem("isShowItemProperty_14") &&
        sessionStorage.getItem("property_14")
      ) {
        this.isProperty_14 = JSON.parse(
          sessionStorage.getItem("isProperty_14")
        );
        this.isShowItemProperty_14 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_14")
        );
        this.property_14 = JSON.parse(sessionStorage.getItem("property_14"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty15() {
      if (
        sessionStorage.getItem("isProperty_15") &&
        sessionStorage.getItem("isShowItemProperty_15") &&
        sessionStorage.getItem("property_15")
      ) {
        this.isProperty_15 = JSON.parse(
          sessionStorage.getItem("isProperty_15")
        );
        this.isShowItemProperty_15 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_15")
        );
        this.property_15 = JSON.parse(sessionStorage.getItem("property_15"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty16() {
      if (
        sessionStorage.getItem("isProperty_16") &&
        sessionStorage.getItem("isShowItemProperty_16") &&
        sessionStorage.getItem("property_16")
      ) {
        this.isProperty_16 = JSON.parse(
          sessionStorage.getItem("isProperty_16")
        );
        this.isShowItemProperty_16 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_16")
        );
        this.property_16 = JSON.parse(sessionStorage.getItem("property_16"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty17() {
      if (
        sessionStorage.getItem("isProperty_17") &&
        sessionStorage.getItem("isShowItemProperty_17") &&
        sessionStorage.getItem("property_17")
      ) {
        this.isProperty_17 = JSON.parse(
          sessionStorage.getItem("isProperty_17")
        );
        this.isShowItemProperty_17 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_17")
        );
        this.property_17 = JSON.parse(sessionStorage.getItem("property_17"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty18() {
      if (
        sessionStorage.getItem("isProperty_18") &&
        sessionStorage.getItem("isShowItemProperty_18") &&
        sessionStorage.getItem("property_18")
      ) {
        this.isProperty_18 = JSON.parse(
          sessionStorage.getItem("isProperty_18")
        );
        this.isShowItemProperty_18 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_18")
        );
        this.property_18 = JSON.parse(sessionStorage.getItem("property_18"));
        this.removeBtn = true;
      }
    },
    getActiveIsProperty19() {
      if (
        sessionStorage.getItem("isProperty_19") &&
        sessionStorage.getItem("isShowItemProperty_19") &&
        sessionStorage.getItem("property_19")
      ) {
        this.isProperty_19 = JSON.parse(
          sessionStorage.getItem("isProperty_19")
        );
        this.isShowItemProperty_19 = JSON.parse(
          sessionStorage.getItem("isShowItemProperty_19")
        );
        this.property_19 = JSON.parse(sessionStorage.getItem("property_19"));
        this.removeBtn = true;
      }
    },
  },
  mounted() {
    // active properties
    this.getActiveIsProperty();
    this.getActiveIsProperty1();
    this.getActiveIsProperty2();
    this.getActiveIsProperty3();
    this.getActiveIsProperty4();
    this.getActiveIsProperty5();
    this.getActiveIsProperty6();
    this.getActiveIsProperty7();
    this.getActiveIsProperty8();
    this.getActiveIsProperty9();
    this.getActiveIsProperty10();
    this.getActiveIsProperty11();
    this.getActiveIsProperty12();
    this.getActiveIsProperty13();
    this.getActiveIsProperty14();
    this.getActiveIsProperty15();
    this.getActiveIsProperty16();
    this.getActiveIsProperty17();
    this.getActiveIsProperty18();
    this.getActiveIsProperty19();
  },
};
