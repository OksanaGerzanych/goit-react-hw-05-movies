
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { GoBackButton, ButtonLink } from "./GoBack.styled";


export const GoBack = ({ to }) => {
    return (
        <ButtonLink to={to}> <GoBackButton type="button" > <RxDoubleArrowLeft size={16}/> Go back</GoBackButton> </ButtonLink>
    )
}
