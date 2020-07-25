import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import user_reducer from "../_reducers/user_reducer";


const store = createStore(
    user_reducer
    // applyMiddleware(
    //     thunk
    // )
)
export default store