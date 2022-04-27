import styled from 'styled-components';

export const Container = styled.div`
   position: relative;
   top: 72px;
   min-height: calc(100vh - 250px);
   padding: 0px calc(3.5vw + 5px);
`;

export const Background = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   z-index: -1;
   opacity: 0.8;
   
   & img {
      width: 100vw;
      height: 100vh;

      @media (max-width: 768px) {
         width: initial;
      }
   }
`;

export const ImageTitle = styled.div`
   display: flex;
   padding-bottom: 24px;
   align-items: flex-end;
   justify-content: flex-start;
   width: 100%;
   height: 30vw;
   min-height: 170px;
   margin: 0px auto;

   img {
      max-width: 600px;
      min-width: 200px;
      width: 35vw;
   }
`;

export const ContentMeta = styled.div`
   max-width: 874px;
`;

export const Controls = styled.div`
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   margin: 24px 0px;
`;

export const Player = styled.button`
   cursor: pointer;
   margin-right: 22px;
   padding: 0px 24px;
   border-radius: 4px;
   height: 56px;
   font: 15px;
   letter-spacing: 1.5px;
   display: flex;
   text-transform: uppercase;
   align-items: center;
   background-color: #F9F9F9;
   border: none;

   &:hover {
      background-color: #C6C6C6;
   }
`;

export const Trailer = styled(Player)`
   background-color: rgba(0, 0, 0, 0.3);
   color: rgb(249, 249, 249);
   border: 1px solid rgb(249, 249, 249);
`;

export const AddList = styled.div`
   width: 44px;
   cursor: pointer;
   height: 44px;
   background-color: rgba(0, 0, 0, 0.6);
   border-radius: 50%;
   border: 2px solid white;
   margin-right: 16px;
   display: flex;
   align-items: center;
   justify-content: center;

   span {
      background-color: rgb(249, 249, 249);
      
      &:first-child {
         width: 16px;
         height: 2px;
         transform: translateX(1px);
      }

      &:last-child {
         width: 2px;
         height: 16px;
         transform: translateX(-8px);
      }
   }
`;

export const GroupWatch = styled.div`
   cursor: pointer;
   width: 44px;
   height: 44px;
   background-color: white;
   border-radius: 50%;
   margin-right: 16px;
   display: flex;
   align-items: center;
   justify-content: center;

   div {
      height: 40px;
      width: 40px;
      background-color: black;
      border-radius: 50%;

      img {
         width: 100%;
      }
   }
`;

export const Subtitle = styled.div`
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
`;

export const Description = styled.div`
   color: rgb(249, 249, 249);
   font-size: 20px;
   padding: 16px 0px;
`;
