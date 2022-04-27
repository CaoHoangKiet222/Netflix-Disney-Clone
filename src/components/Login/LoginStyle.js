import styled from 'styled-components';

export const Container = styled.section`
   display: flex;
   text-align: center;
   flex-direction: column;
   height: 100vh;
   overflow-x: hidden;
`;

export const Content = styled.div`
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 75px 0px;
   position: relative;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
   border-bottom: 8px solid #222;
`;

export const CTA = styled.div`
   display: flex;
   flex-flow: wrap column;
   align-items: center;
   justify-content: center;
   max-width: 960px;
   width: 100%;

   h1 {
      margin: 0px 75px;
      font-size: 3.125rem;
      margin: 0;
      max-width: 640px;
      letter-spacing: -1px;
      line-height: 1.1;
   }

   h2 {
      max-width: 640px;
      font-size: 1.625rem;
      margin: 1rem auto;
   }

   @media (max-width: 768px) {
      h1 {
         font-size: 2.125rem;
      }

      h2 {
         font-size: 1.125rem;
      }
   }
`;

export const EmailForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 0.85rem;
   position: relative;
   width: 100%;

   h3 {
      padding: 0 5%;
      margin: 0 auto;
      max-width: none;
      font-size: 1rem;
      padding: 0px 47.5px 20px 47.5px; 
   }

   @media (max-width: 768px) {
      max-width: 550px;
      font-size: 18px;
      font-weight: 400;

      h3 {
         max-width: 450px;
         margin: 0 auto;
         font-weight: 400;
      }
   }
`;

export const EmailChecking = styled.div`
   display: flex;
   justify-content: center;
   align-self: center;
   width: 100%;

   label {
      position: relative;
      span {
         position: absolute;
         left: 10px;
         color: #8c8c8c;
         top: -20%;
         transition: all 0.2s ease-in-out;
      }
      input {
         min-width: 500px;
         height: 70px;
         border: none;
         border-bottom: 2px solid #ffa00a;
         outline: none;
         padding: 10px 10px 0;
         border-radius: 4px;
         font-size: 20px;
      }
      input:focus + span, 
      input:valid + span {
         color: black;
         top: -20px;
         font-size: 13px;
         font-weight: 600;
      }
   }

   button {
      background: #E50914;
      padding: 0px 1em;
      border-left: 1px solid #333;
      box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
      min-height: 70px;
      font-size: 1.775rem;
      cursor: pointer;
      border: none;
      border-radius: 2px;
      span {
         color: #ffffff;

         &:first-child {
            padding: 8px 0px;
         }
      }
      svg {
         color: #ffffff;
         height: 0.85em;
         width: 0.45em;
         margin-left: .5em;
         font-size: 1.875rem;
      }

      &:hover {
         background: #F40612;
      }

      @media (max-width: 768px) {
         margin: 4px 0px;
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;

      label input {
         height: 60px;
         width: 100%;
      }

      button {
         margin-top: 15px;
         font-size: 1rem;
         min-height: 40px;

         svg {
            font-size: 1.1rem;
         }
      }
   }
   
`;

export const BgImage = styled.div`
   background-image: url("/images/login-background.jpg");
   background-position: center top;
   background-repeat: no-repeat;
   background-size: cover;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   z-index: -1;
   height: 100%;

   & > div {
      background: rgba(0,0,0,.4);
      width: 100vw;
      height: 100vh;

      div {
         width: 100vw;
         height: 100vh;
         background: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
      }
   }
`;

export const Description = styled.p`
   color: hsla(0, 0%, 95.3%, 1);
   font-size: 11px;
   margin: 0px 0px 24px;
   line-height: 1.5;
   letter-spacing: 1px;
`;
