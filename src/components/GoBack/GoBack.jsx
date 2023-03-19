import { RxDoubleArrowLeft } from 'react-icons/rx';
import { GoBackBox, GoBackLink } from './GoBack.styled';

export const GoBack = ({ to }) => {
  return (
    <GoBackBox>
      <GoBackLink to={to}>
        {' '}
        <RxDoubleArrowLeft size={16} /> Go back{' '}
      </GoBackLink>
    </GoBackBox>
  );
};
