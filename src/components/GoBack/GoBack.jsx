import { Link } from "react-router-dom"
import { RxDoubleArrowLeft }  from 'react-icons/rx';
export const GoBack = ({ to}) => {
    return (
        <Link to={to}> <button type="button" > <RxDoubleArrowLeft size={16}/> Go back</button> </Link>
    )
}
