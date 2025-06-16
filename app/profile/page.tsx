"use client"

import { useSelector } from 'react-redux';
// Update the import path below if the actual path is different
import { Profile } from '../../components/profile/Profile'
import {fetchUser, selectCurrentUser, selectUserError, selectUserStatus} from "../../redux/userSlice";
import { dispatch } from '../../redux/store';
import {useEffect} from "react";

export default function ProfilePage() {


    useEffect(() => {

            dispatch(fetchUser({ }));

    }, [dispatch]);
  return (
    <Profile isOpen={true} isPage={true} onClose={handleClose} />
  )
}
