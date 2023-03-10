import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import techReducer from "../features/technologies/techSlice"
import fieldReducer from "../features/field/fieldSlice"

const middleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore ({
    reducer: { techs: techReducer, fields: fieldReducer},
    middleware,
})

