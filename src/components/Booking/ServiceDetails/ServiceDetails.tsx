import * as S from './ServiceDetails.styles';

interface Option {
  menu: string;
  time: string;
}

interface ServiceDetailsProps {
  details: {
    options: Option[];
  };
}

function ServiceDetails({ details }: ServiceDetailsProps) {
  return (
    <S.ServiceDetailsContainer>
      {details.options.map((option) => (
        <S.ServiceContentContainer key={option.menu}>
          <S.ServiceTextWrapper>
            <S.ServiceTitle>{option.menu}</S.ServiceTitle>
            <S.ServiceTime>{option.time}</S.ServiceTime>
          </S.ServiceTextWrapper>
          <S.ServiceSelectWrapper>
            <S.ServiceDeleteButton>
              <S.StyledMinusGray />
            </S.ServiceDeleteButton>
            <S.ServiceSelectButton>
              <S.StyledPlusBlue />
            </S.ServiceSelectButton>
          </S.ServiceSelectWrapper>
        </S.ServiceContentContainer>
      ))}
    </S.ServiceDetailsContainer>
  );
}

export default ServiceDetails;
