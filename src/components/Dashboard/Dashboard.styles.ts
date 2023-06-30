import { styled } from "styled-components";

export const Component = styled.div``;

export const Wrapper = styled.div``;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 0;
  padding-bottom: 0.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    line-height: 1.6;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
    line-height: 1.6;
    text-align: center;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Content = styled.main`
  max-width: 70rem;
  height: 25rem;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;

  @media (max-width: 900px) {
    margin: 1rem;
  }
`;

export const Footer = styled.form`
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  @media (max-width: 900px) {
    margin: 1rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 0;
    border-radius: 4px;

    &::placeholder {
      opacity: 0.5;
    }

    &:focus::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    color: none;
    border: 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 48px;
    height: 48px;
    cursor: pointer;
    line-height: 0;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: color ${({ theme }) => theme.transitions.fast};
    }
  }
`;

export const Empty = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  svg {
    width: 32px;
    height: 32px;
  }
`;
