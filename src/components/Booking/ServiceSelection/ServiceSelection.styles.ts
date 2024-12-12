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

export const SelectionTitleTextWrapper = styled.div``;

export const SelectedServices = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  font-weight: 300;
`;

export const SelectedTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: ${({ theme }) => theme.spacing.spacing4};
`;

export const SelectedText = styled.p``;

export const ButtonContainer = styled.div``;

export const NextButton = styled.button<{ isActive?: boolean }>`
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing6};
  background-color: ${({ isActive, theme }) => (isActive ? '#1976d2' : theme.color.gray300)};
  color: ${({ isActive, theme }) => (isActive ? 'white' : theme.color.gray500)};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.text.sm.fontSize};
  font-weight: 400;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};

  ${({ isActive }) =>
    isActive &&
    `
      &:hover {
        background-color: #1565c0; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
      }
      
      &:active {
        background-color: #1d73ce; 
        transform: scale(0.98); 
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); 
      }
    `}
`;

export const SelectNote = styled.p`
  color: red;
`;
