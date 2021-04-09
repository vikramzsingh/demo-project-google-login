// import axios from "axios"
import { POST_DATA } from "./postRequestType"

export const postUserData = (data) => {
    return {
        type: POST_DATA,
        payload: data
    }
}

// with thunk middleware async function 
// export const postDataAction = (post) => {
//     return (dispatch) => {
//         axios.post('https://jsonplaceholder.typicode.com/posts', { post })
//         .then((res) => {
//             console.log(res.data)
//             dispatch(postUserData(post))
//         })
//         .catch((error) => {
//             console.log(error)
//             dispatch(postUserData(error))
//         })
//     }
// }