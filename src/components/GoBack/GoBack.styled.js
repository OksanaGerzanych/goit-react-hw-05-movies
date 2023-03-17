import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLink = styled(Link)`
  &.focus {
    color: white;
    background-color: orangered;
  }
`;

export const GoBackButton = styled.button`
  margin-bottom: 20px;
  width: 180px;
  border-radius: 4px;
  padding: 8px 16px;
  color: black;
  background-color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;
