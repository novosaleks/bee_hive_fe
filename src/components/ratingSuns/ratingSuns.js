import React, { useState } from 'react';
import reallyBad from '../../assets/sun1.svg';
import bad from '../../assets/sun2.svg';
import nautral from '../../assets/sun3.svg';
import good from '../../assets/sun4.svg';
import reallyGood from '../../assets/sun5.svg';

import { StyledDiv } from '../../common/style/index';
import { StyledImg } from './ratingSuns.style';

const RatingSuns = () => {
   const [sunState, setActiveSunState] = useState({
      activeObject: null,
      objects: [
         { src: reallyBad, alt: 'really bad post' },
         { src: bad, alt: 'just bad post' },
         { src: nautral, alt: 'nautral post' },
         { src: good, alt: 'just good post' },
         { src: reallyGood, alt: 'really good post' },
      ]
   });

   function toggleActive(index) {
      setActiveSunState({ ...sunState, activeObject: sunState.objects[index] })
   }

   function toggleActiveStyles(index) {
      if (sunState.objects[index] === sunState.activeObject) {
         return 'active'
      }
   }
   return (
      <StyledDiv direction="row" content="space-between" width="130px">
         {sunState.objects.map((obj, index) => (
            <StyledImg
               key={index}
               className={sunState.activeObject ? toggleActiveStyles(index) : null}
               onClick={() => { toggleActive(index) }}
               src={obj.src}
               alt={obj.alt}
            />
         ))}

      </StyledDiv>
   );
}

export default RatingSuns;