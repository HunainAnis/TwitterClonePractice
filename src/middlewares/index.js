import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Logger from "./logger";

export default applyMiddleware(
    thunk,
    Logger
)