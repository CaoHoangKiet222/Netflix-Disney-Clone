import {AnimationCard, AnimationContainer, AnimationImg, AnimationText} from './KidsValuePropStyle';

const KidsValueProp = () => {
   return <AnimationCard>
      <AnimationContainer>
         <AnimationImg>
            <img src="/images/kids-value.png" alt="" />
         </AnimationImg>
         <AnimationText>
            <h1>Create profiles for kids.</h1>
            <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
         </AnimationText>
      </AnimationContainer>
   </AnimationCard>;
}

export default KidsValueProp;
