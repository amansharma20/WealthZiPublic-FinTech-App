/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Explore(props) {
  const {focused} = props;
  const selectedHome = (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 17.5a6.5 6.5 0 0111-4.684V0H3a3 3 0 00-3 3v18a3 3 0 003 3h12.5A6.5 6.5 0 019 17.5zM5 5h10v2H5V5zm15.543 18.957L17.886 21.3A4.457 4.457 0 0113 21.242a4.5 4.5 0 117-3.742 4.457 4.457 0 01-.7 2.386l2.657 2.657-1.414 1.414z"
        fill="#1BB18B"
      />
    </Svg>
  );
  const unselectedHome = (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 17.5a6.5 6.5 0 0111-4.684V0H3a3 3 0 00-3 3v18a3 3 0 003 3h12.5A6.5 6.5 0 019 17.5zM5 5h10v2H5V5zm15.543 18.957L17.886 21.3A4.457 4.457 0 0113 21.242a4.5 4.5 0 117-3.742 4.457 4.457 0 01-.7 2.386l2.657 2.657-1.414 1.414z"
        fill="#B4B4B4"
        
      />
    </Svg>
  );
  return focused ? selectedHome : unselectedHome;
}

export default Explore;
