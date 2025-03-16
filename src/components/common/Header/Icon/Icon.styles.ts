import styled from 'styled-components';

export const IconLink = styled.a``;

export const Icon = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 40px;
    height: 40px;
  }
`;
