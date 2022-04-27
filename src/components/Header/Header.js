import {onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {userActions} from '../../features/userSlice';
import {LoadingSpinner} from '../../UI/LoadingSpinnerStyle';
import {auth, provider} from '../../utilities/firebase';
import {DropDown, Login, Logo, Nav, NavMenu, SignOut, UserImg} from './HeaderStyle';

const Header = () => {
   const userState = useSelector(state => state.user);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
         if (user) {
            setUser(user);
            navigate('/home');
         } else {

         }
      });
   }, [userState])

   const handleAuth = async () => {
      try {
         if (!userState.name) {
            setIsLoading(true);
            const {user} = await signInWithPopup(auth, provider);
            setUser(user);
         } else {
            await signOut(auth);
            setIsLoading(false);
            dispatch(userActions.logout());
            navigate('/');
         }
      } catch (err) {
         setIsLoading(false);
         console.error(err);
      }
   }

   const setUser = (user) => {
      dispatch(userActions.login({
         name: user.displayName,
         email: user.email,
         photo: user.photoURL
      }))
   }

   return (
      <Nav>
         <Logo>
            <img src="/images/netflix_logo.svg.png" alt="Disney+" />
         </Logo>
         {
            !userState.name ?
               (!isLoading ? <Login onClick={handleAuth}>LOGIN</Login> : <LoadingSpinner />)
               :
               (
                  <>
                     <NavMenu>
                        <a href="/home">
                           <img src="/images/home-icon.svg" alt="HOME" />
                           <span>HOME</span>
                        </a>
                        <a>
                           <img src="/images/search-icon.svg" alt="SEARCH" />
                           <span>SEARCH</span>
                        </a>
                        <a>
                           <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                           <span>WATCHLIST</span>
                        </a>
                        <a>
                           <img src="/images/original-icon.svg" alt="ORIGINALS" />
                           <span>ORIGINALS</span>
                        </a>
                        <a>
                           <img src="/images/movie-icon.svg" alt="MOVIES" />
                           <span>MOVIES</span>
                        </a>
                        <a>
                           <img src="/images/series-icon.svg" alt="SERIES" />
                           <span>SERIES</span>
                        </a>
                     </NavMenu>
                     <SignOut>
                        <UserImg src={userState.photo} alt={userState.name} />
                        <DropDown onClick={handleAuth}>
                           <span>Sign Out</span>
                        </DropDown>
                     </SignOut>
                  </>
               )
         }

      </Nav>
   );
}

export default Header;
