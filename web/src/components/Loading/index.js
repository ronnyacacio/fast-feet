import styled, { css } from 'styled-components';
import { ClipLoader } from 'react-spinners';

const Loading = styled(ClipLoader).attrs({
  css: css`
    position: absolute;
    left: 48%;
    top: 50%;
  `,
})``;

export default Loading;
