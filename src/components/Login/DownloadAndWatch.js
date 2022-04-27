import {AnimationCard, AnimationContainer, AnimationImg, AnimationText, DownloadContainer, DownloadImg, DownloadText, GifDownload} from './DownloadAndWatchStyle';

const DownloadAndWatch = () => {
   return <AnimationCard>
      <AnimationContainer>
         <AnimationImg>
            <div>
               <img src="/images/mobile-download.jpg" alt="" />
               <DownloadContainer>
                  <DownloadImg>
                     <img src="/images/boxshot-download.png" alt="" />
                  </DownloadImg>
                  <DownloadText>
                     <div>Stranger Things</div>
                     <div>Downloading...</div>
                  </DownloadText>
                  <GifDownload>
                     <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                  </GifDownload>
               </DownloadContainer>
            </div>
            <AnimationText>
               <h1>Download your shows to watch offline.</h1>
               <h2>Save your favorites easily and always have something to watch.</h2>
            </AnimationText>
         </AnimationImg>
      </AnimationContainer>
   </AnimationCard>;
}

export default DownloadAndWatch;
