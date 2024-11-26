import * as S from './BookingPage.styles';
import PageBanner from '@/components/PageBanner/PageBanner';
import bannerImg1 from '@/assets/imgs/webp/bannerImg1.webp';
import { BOOKING_CONTENT } from '@/constants/bannerContent';
import Booking from '@/components/Booking/Booking';

function BookingPage() {
  return (
    <>
      <PageBanner img={bannerImg1} content={BOOKING_CONTENT} />
      <S.BookingPageContainer>
        <Booking />
      </S.BookingPageContainer>
    </>
  );
}

export default BookingPage;
