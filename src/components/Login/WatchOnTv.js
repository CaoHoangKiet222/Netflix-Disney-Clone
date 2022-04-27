import {AnimationCard, AnimationContainer, AnimationImg, AnimationText} from './WatchOnTvStyle';

const WatchOnTv = () => {
   return <AnimationCard>
      <AnimationContainer>
         <AnimationText>
            <h1>Enjoy on your TV.</h1>
            <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
         </AnimationText>
         <AnimationImg>
            <img src="/images/animation-tv.png" alt="" />
            <video autoPlay={true} loop={true} >
               <source src="/videos/animation-video-tv.mp4" type="video/mp4" />
            </video>
         </AnimationImg>
      </AnimationContainer>
   </AnimationCard>;
}

export default WatchOnTv;
