import styled, { css } from 'styled-components';
import { ClipLoader } from 'react-spinners';

export const Loading = styled(ClipLoader).attrs({
  css: css`
    position: absolute;
    left: 48%;
    top: 50%;
  `,
})``;
