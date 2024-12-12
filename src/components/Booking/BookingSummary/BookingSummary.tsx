import * as S from './BookingSummary.styles';

function BookingSummary() {
  return (
    <S.SelectionSection>
      <S.SelectionTitleWrapper>
        <S.SelectionNum>3</S.SelectionNum>
        <S.SelectionTitle>Booking Summary</S.SelectionTitle>
      </S.SelectionTitleWrapper>
      <S.SelectionContentWrapper noneBorder>
        <S.ButtonContainer></S.ButtonContainer>
      </S.SelectionContentWrapper>
    </S.SelectionSection>
  );
}

export default BookingSummary;
