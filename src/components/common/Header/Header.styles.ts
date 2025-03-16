import { styled, css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing7} ${theme.spacing.spacing8} ${theme.spacing.spacing6}`};

  // prettier-ignore
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => `${theme.spacing.spacing8} ${theme.spacing.spacing8}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ theme }) => `${theme.spacing.spacing8} ${theme.spacing.spacing4}`};
  }
`;

export const HeaderFirst = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing9};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${(props) => props.theme.spacing.spacing7};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto;
  }
`;

export const HeaderSecond = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing6};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: ${(props) => props.theme.spacing.spacing3};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const ButtonLink = styled.a`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const ButtonCustomCss = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 8px 25px;
    font-size: ${(props) => props.theme.text.md.fontSize};
  }
`;

export const HamburgerCustomCss = {
  wrapper: css`
    display: none;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  `,
};
