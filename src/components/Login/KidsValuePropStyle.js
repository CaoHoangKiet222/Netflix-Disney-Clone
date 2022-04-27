import styled from 'styled-components';

export const AnimationCard = styled.div`
   position: relative;
   width: 100%;
   padding: 50px 5%;
   color: #fff;
   border-bottom: 8px solid #222;
   background-color: black;

   @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
      padding: 70px 45px;
   }
`;

export const AnimationContainer = styled.div`
   max-width: 1100px;
   margin: 0px auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   @media (max-width: 768px) {
      flex-direction: column-reverse;
   }
`;

export const AnimationImg = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   display: flex;
   align-items: center;

   img {
         width: 100%;
   }
   
   @media (max-width: 768px) {
      flex-direction: column-reverse;
      min-width: 310px;
   }
`;

export const AnimationText = styled.div`
   padding-left: 3rem;
   text-align: start;

   h1 {
      display: block;
      font-size: 2.525rem;
      line-height: 1.1;
      margin: 0px 0px 0.5rem 0px;
      font-weight: 600;
   }

   h2 {
      font-size: 1.225rem;
      font-weight: 400;
   }

   @media (max-width: 768px) {
      padding: 0px;
      width: 100%;

      h1 {
         min-width: 360px;
         font-size: 1.625rem;
      }

      h2 {
         font-size: 0.825rem;
      }
   }
`;
