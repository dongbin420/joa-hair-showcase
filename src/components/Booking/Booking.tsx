import * as S from './Booking.styles';
import Accordion from '@/components/Accordion/Accordion';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import { BOOKING_SERVICES } from '@/constants/bookingData';

function Booking() {
  return (
    <S.BookingContainer>
      <S.SelectionSection>
        <S.SelectionTitleWrapper>
          <S.SelectionNum>1</S.SelectionNum>
          <S.SelectionTitle>Choose Your Services</S.SelectionTitle>
        </S.SelectionTitleWrapper>
        <S.SelectionContentWrapper>
          <Accordion>
            {BOOKING_SERVICES.map((question, questionIdx) => (
              <Accordion.Item key={questionIdx}>
                <Accordion.Header idx={questionIdx}>{question.question}</Accordion.Header>
                <Accordion.Body idx={questionIdx}>
                  <ServiceDetails details={question.answer} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </S.SelectionContentWrapper>
      </S.SelectionSection>

      <S.SelectionSection>
        <S.SelectionTitleWrapper>
          <S.SelectionNum>2</S.SelectionNum>
          <S.SelectionTitle>Choose Date & Time</S.SelectionTitle>
        </S.SelectionTitleWrapper>
        <S.SelectionContentWrapper></S.SelectionContentWrapper>
      </S.SelectionSection>

      <S.SelectionSection>
        <S.SelectionTitleWrapper>
          <S.SelectionNum>3</S.SelectionNum>
          <S.SelectionTitle>Booking Summary</S.SelectionTitle>
        </S.SelectionTitleWrapper>
      </S.SelectionSection>
      <S.SelectionContentWrapper noneBorder={true}></S.SelectionContentWrapper>
    </S.BookingContainer>
  );
}

export default Booking;
