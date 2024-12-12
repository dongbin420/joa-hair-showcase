import styled from 'styled-components';

export const SelectionSection = styled.div``;

export const SelectionTitleWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

export const SelectionNum = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.color.orange600};
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const SelectionTitle = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

export const SelectionContentWrapper = styled.div<{
  noneBorder?: boolean;
  isActive?: boolean;
  height?: number;
}>`
  border-left: ${({ noneBorder, theme }) =>
    noneBorder ? 'none' : `1px solid ${theme.color.gray500}`};
  padding-bottom: ${({ noneBorder, theme, isActive }) =>
    !isActive || noneBorder ? 'none' : `${theme.spacing.spacing6}`};
  margin-left: ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  margin-bottom: ${({ theme }) => theme.spacing.spacing2};
  padding-left: ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing6};

  height: ${({ isActive }) => (isActive ? 'auto' : 0)};
  overflow: hidden;
  transition: height 0.3s ease;
`;

export const ButtonContainer = styled.div``;
