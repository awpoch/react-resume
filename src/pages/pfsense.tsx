import {FC, memo} from 'react';

import pfsenseImage from "./../images/portfolio/pfsense.png";

const pfsense: FC = memo(() => {
    return <img alt="Image" src={pfsenseImage} />;
  });
  
  export default pfsense;