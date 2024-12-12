import * as S from './Booking.styles';
import ServiceSelection from './ServiceSelection/ServiceSelection';
import DateTimeSelection from './DateTimeSelection/DateTimeSelection';
import BookingSummary from './BookingSummary/BookingSummary';
import { useState } from 'react';
import { BookingFormData } from '@/types/bookingType';
import useBookingForm from '@/hooks/useBookingForm';

function Booking() {
  const { register, handleSubmit, watch, addService, removeService } = useBookingForm();
  const selectedServices = watch('selectedServices');
  const [activeStep, setActiveStep] = useState(1);

  const onSubmit = (data: BookingFormData) => {
    // 서버로 폼 데이터 전송 로직
    console.log(data);
  };

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    //(12/6) 후에, e전달해서, onSubmit 함수에서 preventDefault 적용하기(그러면, 아코디언 내 버튼 굳이 type 지정할 필요 없음)
    <S.BookingContainer onSubmit={() => handleSubmit(onSubmit)}>
      <ServiceSelection
        isActive={activeStep === 1}
        onNext={handleNextStep}
        selectedServices={selectedServices}
        addService={addService}
        removeService={removeService}
      />
      <DateTimeSelection isActive={activeStep === 2} onNext={handleNextStep} />
      <BookingSummary />
      <button type="submit">test</button>
    </S.BookingContainer>
  );
}

export default Booking;
