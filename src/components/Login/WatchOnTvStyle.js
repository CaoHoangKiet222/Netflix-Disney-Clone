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
      flex-direction: column;
   }
`;

export const AnimationText = styled.div`
   padding-right: 3rem;
   text-align: start;

   h1 {
      display: block;
      font-size: 2.525rem;
      line-height: 1.1;
      margin: 0px 0px 0.5rem 0px;
      font-weight: 600;
      white-space: nowrap;
   }

   h2 {
      font-size: 1.225rem;
      font-weight: 400;
      margin: 0.75em 0 0.25em;
   }

   @media (max-width: 768px) {
      padding-right: 0px;

      h1 {
         font-size: 1.625rem;
      }

      h2 {
         font-size: 0.825rem;
         width: 488px;
      }
   }
`;

export const AnimationImg = styled.div`
   width: 48%;
   height: 100%;
   position: relative;
   min-width: 288px;
   
   img {
      position: relative;
      max-width: 100%;
      z-index: 2;
   }

   video {
      margin-top: 2.5px;
      width: 100%;
      height: 100%;
      max-width: 73%;
      max-height: 54%;
      position: absolute;
      top: 20%;
      left: 13%;
      z-index: 1;
   }

`;
