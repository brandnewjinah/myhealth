import React, { ChangeEvent, FC } from "react";

//import styles and assets
import styled from "styled-components";
import { ArrowRight, ArrowLeft } from "../assets/Icons";

interface Props {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  imp?: string;
  direction?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
}

export const Button: FC<Props> = ({
  label,
  type,
  value,
  name,
  imp,
  handleClick,
}) => {
  return (
    <Wrapper
      style={{ backgroundColor: imp === "primary" ? "#f2665c" : "#f2665c" }}
      onClick={handleClick}
    >
      {label}
    </Wrapper>
  );
};

export const BtnText: FC<Props> = ({ label, handleClick }) => {
  return <Text onClick={handleClick}>{label}</Text>;
};

export const BtnArrow: FC<Props> = ({ label, direction, handleClick }) => {
  return (
    <Circle onClick={handleClick}>
      {direction === "left" ? (
        <ArrowLeft width="20" height="20" color="#000" stroke="2" />
      ) : (
        <ArrowRight width="20" height="20" color="#000" stroke="2" />
      )}
    </Circle>
  );
};

const Wrapper = styled.button`
  outline: transparent;
  border: transparent;
  border-radius: 3em;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  padding: 1.5em 3.5em;
  cursor: pointer;
  transition: opacity 0.15s linear;

  &:hover {
    opacity: 0.8;
  }
`;

const Text = styled.button`
  outline: transparent;
  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid #444;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const Circle = styled.button`
  display: flex;
  padding: 1em;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;
