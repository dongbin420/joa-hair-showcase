import { useContext } from 'react';
import { AccordionContext } from '@/components/common/Accordion/AccordionProvider/AccordionProvider';

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordionContext must be used within an AccordionProvider');
  }

  return context;
};
