import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

exports const store = createStore(
    {},
     compose(
         applyMiddleware(thunk)
         )
)