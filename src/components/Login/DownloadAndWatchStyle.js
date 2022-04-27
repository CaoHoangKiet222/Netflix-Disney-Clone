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
   
   & > div {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;

      img {
         width: 100%;
      }
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

export const DownloadContainer = styled.div`
   padding: .5em .75em;
   position: absolute;
   left: 15%;
   bottom: 8%;
   margin: 0px auto;
   background: #000;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 68%;
   border: 2px solid rgba(255,255,255,.25);
   box-shadow: 0 0 2em 0 #000;
   border-radius: .75em;
   z-index: 2;

   @media (max-width: 768px) {
      min-width: 13em;
   }
`;

export const DownloadImg = styled.div`
   margin-right: 1em;
   
   img {
      height: 3.8em;
      min-width: 40px;
   }
`;

export const DownloadText = styled.div`
   margin: .3em -0.3em;
   width: 100%;
   text-align: start;

   div:first-child {
      font-weight: 600;
      font-size: 1em;
   }

   div:nth-child(2){
      font-weight: 400;
      font-size: .9em;
      color: #0071eb;
   }

   @media (max-width: 768px) {
      margin: .3em .6em;

      div:first-child {
         font-size: .8em;
      }

      div::nth-child(2) {
         font-size: .7em;
      }
   }
`;

export const GifDownload = styled.div`
   display: block;
   width: 4em;

   img {
      background-position: center;
      background-repeat: no-repeat;
   }
`;
