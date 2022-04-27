import styled from 'styled-components';

export const LoadingSpinner = styled.div`
   display: inline-block;
   width: 80px;
   height: 80px;
   padding-left: 20px;
   padding-top: 4px;

   &:after {
      content: ' ';
      display: block;
      width: 40px;
      height: 40px;
      margin: 6px;
      margin-top: 10px;
      border-radius: 50%;
      border: 5px solid teal;
      border-color: teal transparent teal transparent;
      animation: spinner 1.2s linear infinite;
   }

   @keyframes spinner {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;
