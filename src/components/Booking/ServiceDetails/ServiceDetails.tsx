import * as S from './ServiceDetails.styles';

interface Option {
  menu: string;
  time: string;
}

interface ServiceDetailsProps {
  details: {
    options: Option[];
  };

  addService: (service: string) => void;
  removeService: (service: string) => void;
  selectedServices: string[];
}

function ServiceDetails({
  details,
  addService,
  removeService,
  selectedServices,
}: ServiceDetailsProps) {
  return (
    <S.ServiceDetailsContainer>
      {details.options.map((option) => {
        const isSelected = selectedServices.includes(option.menu);

        return (
          <S.ServiceContentContainer key={option.menu}>
            <S.ServiceTextWrapper>
              <S.ServiceTitle>{option.menu}</S.ServiceTitle>
              <S.ServiceTime>{option.time}</S.ServiceTime>
            </S.ServiceTextWrapper>
            <S.ServiceSelectWrapper>
              <S.ServiceDeleteButton
                isSelected={isSelected}
                onClick={() => removeService(option.menu)}
                type="button"
              >
                {isSelected ? <S.StyledMinusRed /> : <S.StyledMinusGray />}
              </S.ServiceDeleteButton>
              <S.ServiceSelectButton
                isSelected={isSelected}
                onClick={() => addService(option.menu)}
                type="button"
              >
                {isSelected ? <S.StyledPlusGray /> : <S.StyledPlusBlue />}
                <S.Badge isSelected={isSelected}>1</S.Badge>
              </S.ServiceSelectButton>
            </S.ServiceSelectWrapper>
          </S.ServiceContentContainer>
        );
      })}
    </S.ServiceDetailsContainer>
  );
}

export default ServiceDetails;
