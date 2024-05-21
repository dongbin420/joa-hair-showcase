import * as S from './Footer.styles';
import instagram from '@/assets/imgs/instagram.png';
import facebook from '@/assets/imgs/facebook.png';

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterSection>
        <S.ContactTitle>CONTACT</S.ContactTitle>
        <S.ContactContents href="tel:+1234567890">0494 112 551</S.ContactContents>
        <S.ContactContents href="mailto:example@example.com">email@gmail.com</S.ContactContents>
        <S.IconWrapper>
          <S.IconLink href="">
            <S.Icon src={instagram} />
          </S.IconLink>
          <S.IconLink href="">
            <S.Icon src={facebook} />
          </S.IconLink>
        </S.IconWrapper>
      </S.FooterSection>
      <S.FooterSection>
        <S.Logo>JOA HAIR</S.Logo>
        <S.Address>Shop 15/803 Stanley St, Woolloongabba QLD 4102</S.Address>
        <S.Copyright>© 2024 JOA HAIR. All rights reserved.</S.Copyright>
      </S.FooterSection>
      <S.FooterSection>
        <S.HoursTitle>HOURS</S.HoursTitle>
        <S.DayWrapper>
          <S.Day>Monday - Saturday</S.Day>
          <S.Time>9am - 5:30pm</S.Time>
        </S.DayWrapper>
        <S.DayWrapper>
          <S.Day>Sunday</S.Day>
          <S.Time>Closed</S.Time>
        </S.DayWrapper>
      </S.FooterSection>
    </S.FooterContainer>
  );
}

export default Footer;
