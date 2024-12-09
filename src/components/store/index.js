import { createStore } from "vuex";
import pizza from "./pizza";
import size from "./size";
import topping from "./topping";

export const  store = createStore ({
    modules: {
        pizza,
        size,
        topping,
    },
});