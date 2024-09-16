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
          <div className='w-1/2 m-2'>
            <h1 className='text-xl font-bold'>New board 2024</h1>
            <p className=''>Testing the function of this plugin to see what is possible</p>
          </div>
        </div>
        <div className="embla__slide flex justify-center items-center bg-esn-cyan">
          <img className='w-1/2 object-contain' src="\images\events\campfire1709.png" alt="logo" />
          <div className='w-1/2 m-2 text-white'>
            <h1 className='text-xl font-bold'>Campfire</h1>
            <p className='max-h-24 overflow-hidden text-ellipsis'>Welcome to Kortrijk! 🎉🔥

Join us for a cozy campfire night to meet new friends and celebrate your arrival! 

When: Tuesday, September 17th at 8:00 PM
Where: Nelson Mandelapark, Kortrijk

We'll have delicious pizza for everyone, and we'll also be selling drinks at great prices! 🍕🥤

Don't forget to pick up your ESN card at the event! 💳

If you have any questions, please don't hesitate to reach out to us. 

Don't miss out on this fun event to kick off your adventure in Kortrijk! 
</p>
<p>...</p>
          </div>
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
