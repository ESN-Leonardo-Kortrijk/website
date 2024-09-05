"use client";

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla w-full relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        <div className="embla__slide flex justify-center items-center bg-esn-dark-blue">
          <img className='w-1/2 object-contain' src="/images/ESN_Leo_logo.png" alt="logo" />
          <div>
            <h1 className='text-xl font-bold'>New board 2024</h1>
            <p className='w-1/2'>Testing the function of this plugin to see what is possible</p>
          </div>
        </div>
        <div className="embla__slide">
          <img src="/images/ESN_Leo_logo.png" alt="logo" />
        </div>
        <div className="embla__slide">
          <img src="/images/ESN_Leo_logo.png" alt="logo" />
        </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
