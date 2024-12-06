import { configureStore } from '@reduxjs/toolkit';
// Redux persisr
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
// Encryptor
import { encryptTransform } from 'redux-persist-transform-encrypt';
// Slice reducer
import authSlice from './slices/authSlice';
import useSlice from './slices/userSlice';
import portfolioSlice from './slices/portfolioSlice';
import blogSlice from './slices/blogSlice';
// import useSlice from './slices/userUpdate';
// import { userSliceAPI } from './slices/userSlice';

const encryptor = encryptTransform({
    secretKey: 'practice',
    onError: function (error) {
        console.error("encryption error: ", error);
    },
});

const persistConfig = {
    key: 'root',
    storage,
    transforms: [encryptor],
}

const rootReducer = combineReducers({
    auth: authSlice,
    users: useSlice,
    portfolio: portfolioSlice,
    blog: blogSlice,
    // [userSliceAPI.reducerPath]: userSliceAPI.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
        // .concat(userSliceAPI.middleware),

}
);

export const persistor = persistStore(store);
