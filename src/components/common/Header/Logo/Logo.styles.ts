import styled from 'styled-components';

export const LogoWrapper = styled.div`
  font-family: 'Themunday', 'customArial', Helvetica, sans-serif;
  color: ${(props) => props.theme.color.black};
  margin-right: ${(props) => props.theme.spacing.spacing2};
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  font-size: ${({ theme }) => theme.heading.lg.fontSize};
  line-height: ${({ theme }) => theme.text.xl.lineHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow: visible;
    margin-left: ${(props) => props.theme.spacing.spacing8};

    font-size: ${({ theme }) => theme.heading.xl.fontSize};

    line-height: ${({ theme }) => theme.heading.sm.lineHeight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.heading.lg.fontSize};

    line-height: ${({ theme }) => theme.text.lg.lineHeight};
  }
`;

export const LogoTop = styled.p`
  padding-top: ${(props) => props.theme.spacing.spacing2};
`;

export const LogoBottom = styled.p`
  padding-top: ${(props) => props.theme.spacing.spacing2};
`;
