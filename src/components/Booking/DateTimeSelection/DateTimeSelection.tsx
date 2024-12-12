import * as S from './DateTimeSelection.styles';

interface DateTimeSelectionProps {
  isActive: boolean;
  onNext: () => void;
}

function DateTimeSelection({ isActive, onNext }: DateTimeSelectionProps) {
  return (
    <S.SelectionSection>
      <S.SelectionTitleWrapper>
        <S.SelectionNum>2</S.SelectionNum>
        <S.SelectionTitle>Choose Date & Time</S.SelectionTitle>
      </S.SelectionTitleWrapper>
      <S.SelectionContentWrapper isActive={isActive}>
        <S.ButtonContainer>
          <S.NextButton type="button" onClick={onNext}>
            NEXT STEP
          </S.NextButton>
        </S.ButtonContainer>
      </S.SelectionContentWrapper>
    </S.SelectionSection>
  );
}

export default DateTimeSelection;
