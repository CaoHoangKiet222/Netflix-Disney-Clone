import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AnimationCard, AnimationContainer, AnimationImg, AnimationText, LinkWrap} from './FreePlanAndroidStyle';

const FreePlanAndroid = () => {
   return <AnimationCard>
      <AnimationContainer>
         <AnimationText>
            <h1>Have an Android Phone? Get our new free plan!</h1>
            <h2>Watch a selection of new movies and TV shows without adding any payment details!</h2>
            <LinkWrap>
               <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient">
                  <span>Get the app</span>
                  <span><FontAwesomeIcon icon={faChevronRight} /></span>
               </a>
            </LinkWrap>
         </AnimationText>
         <AnimationImg>
            <img src="/images/free-android.jpg" alt="" />
         </AnimationImg>
      </AnimationContainer>
   </AnimationCard>;
}

export default FreePlanAndroid;
