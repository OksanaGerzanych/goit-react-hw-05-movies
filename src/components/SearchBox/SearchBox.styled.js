import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  outline: none;
  font: inherit;
`;


export const SearchFormButton = styled.button`
  display: inline-block;
  width: 38px;
  height: 38px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  
  &:hover {
   opacity: 1; 
  }
`
export const Icon = styled(HiSearch)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 7px;
  top: 9px;
`;