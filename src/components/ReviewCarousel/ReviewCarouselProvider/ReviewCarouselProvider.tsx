import { createContext, useState, useCallback } from 'react';
import type { PropsWithChildren } from 'react';

interface ReviewCarouselProviderContextProps {
  activeIndex: number;
  total: number;
  clickPrevious: () => void;
  moveNextImage: () => void;
  clickIndicator: (index: number) => void;
  isTransition: boolean;
  transitionEnd: () => void;
}

export const ReviewCarouselContext = createContext<ReviewCarouselProviderContextProps | undefined>(
  undefined,
);

function ReviewCarouselProvider({ children, total }: PropsWithChildren<{ total: number }>) {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isTransition, setIsTransition] = useState<boolean>(false);

  const clickPrevious = useCallback(() => {
    if (!isTransition) {
      setIsTransition(true);
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  }, [isTransition]);

  const moveNextImage = useCallback(() => {
    if (!isTransition) {
      setIsTransition(true);
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  }, [isTransition]);

  const transitionEnd = useCallback(() => {
    setIsTransition(false);

    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return total;
      } else if (prevIndex === total + 1) {
        return 1;
      } else {
        return prevIndex;
      }
    });
  }, [total]);

  const clickIndicator = useCallback((index: number) => {
    setActiveIndex(index + 1);
    setIsTransition(true);
  }, []);

  return (
    <ReviewCarouselContext.Provider
      value={{
        activeIndex,
        total,
        clickPrevious,
        moveNextImage,
        clickIndicator,
        isTransition,
        transitionEnd,
      }}
    >
      {children}
    </ReviewCarouselContext.Provider>
  );
}

export default ReviewCarouselProvider;
