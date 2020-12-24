import { typeAuth } from "../types/typesAuth";

export const authReducer = ( state = {} , action) => {
    
    switch (action.type) {
        case typeAuth.login:
            return {
                ...action.payload,
                logged: true
            }
            
        case typeAuth.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }

}
