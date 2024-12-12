import * as S from './ServiceSelection.styles';
import Accordion from '@/components/Accordion/Accordion';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { BOOKING_SERVICES } from '@/constants/bookingData';

interface ServicesSelectionProps {
  isActive: boolean;
  onNext: () => void;
  selectedServices: string[];
  addService: (service: string) => void;
  removeService: (service: string) => void;
}

function ServiceSelection({
  isActive,
  onNext,
  selectedServices,
  addService,
  removeService,
}: ServicesSelectionProps) {
  const handleNext = () => {
    if (selectedServices.length < 1) {
      return;
    }

    onNext();
  };

  return (
    <S.SelectionSection>
      <S.SelectionTitleWrapper>
        <S.SelectionNum>1</S.SelectionNum>
        <S.SelectionTitleTextWrapper>
          <S.SelectionTitle>Choose Your Services</S.SelectionTitle>
          <S.SelectedServices>{selectedServices.join(', ')}</S.SelectedServices>
        </S.SelectionTitleTextWrapper>
      </S.SelectionTitleWrapper>
      <S.SelectionContentWrapper isActive={isActive}>
        <Accordion>
          {BOOKING_SERVICES.map((question, questionIdx) => {
            const selectedCnt = question.answer.options.filter((option) =>
              selectedServices.includes(option.menu),
            ).length;

            return (
              <Accordion.Item key={questionIdx}>
                <Accordion.Header idx={questionIdx}>
                  <S.SelectedTextWrapper>
                    <div>{question.question}</div>
                    <S.SelectedText>{selectedCnt ? `${selectedCnt} selected` : ''}</S.SelectedText>
                  </S.SelectedTextWrapper>
                </Accordion.Header>
                <Accordion.Body idx={questionIdx}>
                  <ServiceDetails
                    details={question.answer}
                    addService={addService}
                    removeService={removeService}
                    selectedServices={selectedServices}
                  />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
        {selectedServices.length < 1 && (
          <S.SelectNote>
            Please select at least one service for your appointment to continue.
          </S.SelectNote>
        )}
        <S.ButtonContainer>
          <S.NextButton type="button" onClick={handleNext} isActive={selectedServices.length >= 1}>
            NEXT STEP
          </S.NextButton>
        </S.ButtonContainer>
      </S.SelectionContentWrapper>
    </S.SelectionSection>
  );
}

export default ServiceSelection;
