import { combineReducers } from "redux";

// import someFeatureReducer from "./someFeature/reducer";

import myProductReducer from "./products/reducer";

const reducer = combineReducers({
  product: myProductReducer,
});

export default reducer;
