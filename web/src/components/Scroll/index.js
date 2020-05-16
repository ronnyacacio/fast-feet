import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Scroll = styled(PerfectScrollbar)`
  padding: 0 80px;
  height: 380px;

  > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 18px;
    color: #7d40e3;
  }
`;

export default Scroll;
