/* some elements of this code contains lines from Browser Base and other respective projects, all credit goes to them for there work */

import styled from 'styled-components';

import { transparency } from '~/renderer/constants';

export const StyledItem = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  font-size: 13px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, ${transparency.dividers});
  }
`;
