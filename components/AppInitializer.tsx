'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
// import { useAppDispatch } from '../store/hooks';
// import { logout } from '../store/authSlice';
import {setUnauthorizedHandler} from '../utils/axiosInstance';
import {useAppDispatch} from "../redux/hooks";

export default function AppInitializer() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        setUnauthorizedHandler(async () => {
            // await dispatch(logout());
            router.replace('/login');
        });
    }, [dispatch, router]);

    return null; // No UI needed
}
