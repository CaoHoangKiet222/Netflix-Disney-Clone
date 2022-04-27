import {Container, Wrap} from "./ViewersStyle";

const Viewers = () => {
   const videoHandle = (e) => {
      switch (e.target.tagName) {
         case "IMG":
            return e.target.nextElementSibling.currentTime = 0;
         case "DIV":
            return e.target.lastElementChild.currentTime = 0;
      }
   }

   const viewsData = {
      images: ["viewers-disney", "viewers-marvel", "viewers-pixar", "viewers-national", "viewers-starwars"],
      videos: ["disney", "marvel", "pixar", "national-geographic", "star-wars"],
   }

   const wrapComponents = [];

   for (let i = 0; i < viewsData.images.length; i++) {
      wrapComponents.push(
         <Wrap onMouseEnter={videoHandle} key={i}>
            <img src={`/images/${viewsData.images[i]}.png`} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
               <source src={`/videos/${viewsData.videos[i]}.mp4`} type="video/mp4" />
            </video>
         </Wrap>
      );
   }
   return (
      <Container>
         {wrapComponents}
      </Container>
   );
}

export default Viewers;
