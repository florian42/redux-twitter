import logger from "./logger"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"

// @ts-ignore
export default applyMiddleware(thunk, logger)