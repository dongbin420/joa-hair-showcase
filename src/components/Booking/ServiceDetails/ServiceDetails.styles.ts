import styled from 'styled-components';
import { MinusGray, MinusRed, PlusGray, PlusBlue } from '@/assets/imgs/svg/index';

export const ServiceDetailsContainer = styled.div`
  overflow-y: auto;
  max-height: 300px;

  > div:not(:last-child) {
    border-bottom: 1px solid #ccc; /* 마지막 요소를 제외한 경계선 추가 */
  }
`;

export const ServiceContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.spacing2};
  align-items: center;
`;

export const ServiceTextWrapper = styled.div``;

export const ServiceTitle = styled.p`
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const ServiceTime = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray600};
  font-size: ${({ theme }) => theme.text.sm.fontSize};
`;

export const ServiceSelectWrapper = styled.div``;

export const ServiceSelectButton = styled.button`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
  color: #1976d2;
  border-radius: 0 5px 5px 0;
  border: 0.5px solid #1976d2;
`;

export const ServiceDeleteButton = styled.button`
  background-color: white;
  border-right: none;
  padding: ${({ theme }) => theme.spacing.spacing2} ${({ theme }) => theme.spacing.spacing4};
  color: ${({ theme }) => theme.color.gray300};
  border-radius: 5px 0 0 5px;
  border: 0.5px solid ${({ theme }) => theme.color.gray300};
`;

export const StyledMinusGray = styled(MinusGray)`
  width: 20px;
  height: 20px;
`;

export const StyledMinusRed = styled(MinusRed)`
  width: 20px;
  height: 20px;
`;

export const StyledPlusGray = styled(PlusGray)`
  width: 20px;
  height: 20px;
`;

export const StyledPlusBlue = styled(PlusBlue)`
  width: 20px;
  height: 20px;
`;
