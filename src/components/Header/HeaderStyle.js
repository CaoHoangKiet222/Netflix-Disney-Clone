import styled from 'styled-components';

export const Nav = styled.nav`
   display: flex;
   padding: 0px 36px;
   background-color: transparent;
   justify-content: space-between;
   align-items: center;
   height: 70px;
   width: 100%;
   position: fixed;
   top: 0;
   z-index: 3;
`;

export const Logo = styled.a`
   width: 140px;
   max-height: 90px;
   margin-top: 4px;
   padding: 0px;
   cursor: pointer;
   
   img {
      width: 140px;
      height: 40px;
   }
`;

export const Login = styled.a`
   color: #F9F9F9;
   font-size: 16px;
   padding: 8px 16px;
   background-color: rgba(0, 0, 0, 0.6);
   border: 1px solid rgb(249, 249, 249);
   cursor: pointer;
   border-radius: 4px;
   letter-spacing: 1.5px;
   font-weight: 300;
   transition: 0.2s ease;

   &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
   }
`;

export const NavMenu = styled.div`
   display: flex;
   max-height: 70px;
   align-items: center;
   margin-left: 25px;
   margin-right: auto;
   position: relative;
   justify-content: flex-end;
   
   & a {
      display: flex;
      cursor: pointer;
      padding: 0px 12px;

      img {
         width: 20px;
         height: 20px;
         min-width: 20px;
      }

      span {
         padding: 2px 0px;
         margin-left: 8px;
         font-size: 13px;
         letter-spacing: 1.42px;
         line-height: 1.08;
         position: relative;

         &:before {
            content: '';
            background-color: rgb(249, 249, 249);
            height: 2px;
            border-radius: 0px 0px 4px 4px;
            position: absolute;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            left: 0px;
            width: 100%;
            bottom: -6px;
         }
      }

      &:hover {
         span:before {
            transform: scaleX(1);
         }
      }
   }

   @media (max-width: 900px) {
      display: none;
   }
`;

export const UserImg = styled.img`
   width: 48px;
   height: 48px;
   border-radius: 50%;
`;

export const DropDown = styled.div`
   position: absolute;
   top: 48px;
   right: 0px;
   background-color: #131313;
   padding: 10px;
   border-radius: 4px;
   border: 1px solid rgba(151, 151, 151, 0.34);
   box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
   font-size: 14px;
   letter-spacing: 2px;
   width: 106px;
   margin-top: 4px;
   opacity: 0;

`;

export const SignOut = styled.div`
   display: flex;
   position: relative;
   flex-direction: column;
   cursor: pointer;
   
   &:hover {
      ${DropDown} {
         opacity: 1 !important;
         transition-duration: 1s;
      }
   }
`;
