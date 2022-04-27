import styled from 'styled-components';

export const Container = styled.div`
   padding: 30px 0px 26px 0px;
   margin-top: 30px;
   display: grid;
   grid-template-columns: repeat(5, minmax(0, 1fr));
   grid-gap: 25px;

   @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
   }
`;

export const Wrap = styled.div`
   padding-top: 56.25%;
   border-radius: 10px;
   cursor: pointer;
   border: 3px solid rgba(249, 249, 249, 0.1);
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transition: all 250ms ease-in-out;
   position: relative;
   overflow: hidden;

   img {
      inset: 0px;
      object-fit: cover;
      display: block;
      height: 100%;
      z-index: 1;
      opacity: 1;
      position: absolute;
      width: 100%;
   }

   &:hover {
      cursor: pointer;
      border-color:  rgba(249, 249, 249, 0.8);
      transform: scale(1.05);

      video {
         opacity: 1;
      }
   }
   
   video {
      position: absolute;
      widows: 100%;
      height: 100%;
      inset: 0;
      opacity: 0;
      z-index: 0;
   }
`;
