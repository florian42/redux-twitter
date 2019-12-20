import {AnyAction, Store} from "redux"

const logger = (store: Store) => (next: Function) => (action: AnyAction) => {
  console.group(action.type)
  console.log('The action: ', action)
  const result = next(action)
  console.log('The new state: ', store.getState())
  console.groupEnd()
  return result
}

export default logger