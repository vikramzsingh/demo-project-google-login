import { POST_DATA } from "./postRequestType"

const initialState = {
    posts:[]
}

const postReduce = (state = initialState, action) => {
    switch(action.type) {
        case POST_DATA: return {
            ...state,
            posts: action.payload
        }

        default: return state
    }
}

export default postReduce