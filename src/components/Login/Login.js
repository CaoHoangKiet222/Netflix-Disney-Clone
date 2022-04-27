import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {BgImage, Container, Content, CTA, EmailChecking, EmailForm} from './LoginStyle';
import WatchOnTv from './WatchOnTv';
import DownloadAndWatch from './DownloadAndWatch';
import KidsValueProp from './KidsValueProp';
import FreePlanAndroid from './FreePlanAndroid';

const Login = () => {
   return (
      <Container>
         <Content>
            <BgImage>
               <div>
                  <div></div>
               </div>
            </BgImage>
            <CTA>
               <h1>Unlimited movies,TV shows, and more.</h1>
               <h2>Watch anywhere. Cancel anytime.</h2>
               <EmailForm>
                  <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                  <EmailChecking>
                     <div>
                        <label htmlFor="email">
                           <input type="text" name="email" id="email" required />
                           <span>Email address</span>
                        </label>
                     </div>
                     <div>
                        <button type="submit">
                           <span>Get Started</span>
                           <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                     </div>
                  </EmailChecking>
               </EmailForm>
            </CTA>
         </Content>
         <WatchOnTv />
         <DownloadAndWatch />
         <KidsValueProp />
         <FreePlanAndroid />
      </Container>
   );
};

export default Login;
