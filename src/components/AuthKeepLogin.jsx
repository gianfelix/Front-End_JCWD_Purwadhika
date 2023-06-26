import React, { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keepLogin } from '../redux/reducer/AuthReducer';

export const AuthKeepLogin = ({children}) => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.AuthReducer);
    console.log(user);
    useEffect(() => {
        dispatch(keepLogin())
    }, [dispatch]);
    console.log(children);
    return<>{children}</>
}