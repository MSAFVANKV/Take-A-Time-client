import { configureStore } from '@reduxjs/toolkit';
import UserSignupReducer from './SignupSlice';
import AccountDetailsReducer from './AccountDetailsSlice';



const store = configureStore({
    reducer: {
        user:UserSignupReducer,
        details:AccountDetailsReducer,
    }
})

export default store