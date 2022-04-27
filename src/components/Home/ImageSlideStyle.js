import Slider from 'react-slick';
import styled from 'styled-components';

export const Carousel = styled(Slider)`
   margin-top: 20px;
   
   & > button {
      opacity: 0;
      z-index: 1;
      width: 5vw;
   }

   & > button:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
   }
   
   ul li button {
      &:before {
         color: #fff;
         font-size: 10px;
      }
   }
   
   li.slick-active button:before {
      color: #fff;
   }

   .slick-list {
      overflow: initial;
   }

   .slick-prev {
       left: -70px;
   }

   .slick-next {
       right: -70px;
   }
`;

export const Wrap = styled.div`
   position: relative;
   border-radius: 4px;
   position: relative;

   a {
      border-radius: 4px;
      padding: 4px;
      display: block;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

      img {
         width: 100%;
         height: 100%;
      }

      &:hover {
         cursor: pointer;
         border: 4px solid rgba(249, 249, 249, 0.8);
         transition-duration: 300ms;
         padding: 0px;
      }
   }

`;
