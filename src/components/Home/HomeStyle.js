import styled from 'styled-components';

export const Container = styled.main`
   display: block;
   position: relative;
   top: 72px;
   min-height: calc(100vh - 250px);
   overflow: hidden;
   padding: 0 2.5vw;

   &:after {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      background: url("/images/home-background.png") center no-repeat fixed;
      background-size: cover;
      opacity: 1;
      z-index: -1;
   }
`;
