import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducerTodo } from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"

const persistConfig = {
    key: "root",
    version: 1,
    storage
}
const reducerPersist = combineReducers({
    allTodoData: reducerTodo
})

const persistReducerconfig = persistReducer(persistConfig, reducerPersist)

const store = configureStore({
    reducer: persistReducerconfig,
});

export default store;