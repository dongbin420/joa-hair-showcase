import { useForm } from 'react-hook-form';
import { BookingFormData } from '@/types/bookingType';

const useBookingForm = () => {
  const { register, handleSubmit, setValue, getValues, watch, formState } =
    useForm<BookingFormData>({
      defaultValues: {
        selectedServices: [],
        bookingDate: '',
        bookingTime: '',
        note: '',
      },
    });

  const addService = (service: string) => {
    const currentServices = getValues('selectedServices');

    if (!currentServices.includes(service)) {
      setValue('selectedServices', [...currentServices, service]);
    }
  };

  const removeService = (service: string) => {
    const currentServices = getValues('selectedServices');
    setValue(
      'selectedServices',
      currentServices.filter((item) => item !== service),
    );
  };

  return {
    register,
    handleSubmit,
    watch,
    formState,
    addService,
    removeService,
    getValues,
  };
};

export default useBookingForm;
