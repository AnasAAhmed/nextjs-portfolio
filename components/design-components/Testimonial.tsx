import React from 'react'
import Section from './Section'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { feedbacks } from '@/lib/constants'
import Heading from './Heading'

const Testimonial = () => {
    return (
        <Section crosses id='testimonials' crossesOffset="lg:translate-y-[5.25rem]"
        >
            <div className="flex py-10 flex-col justify-center items-center">

                <Heading
                    modeForSplit='chars'
                    className="md:max-w-md mt-8 text-center lg:max-w-2xl"
                    title="Testimonial"
                />
                <InfiniteMovingCards speed='normal' items={feedbacks.slice(0, 3)} />
                <InfiniteMovingCards speed='normal' direction='right' items={feedbacks.slice(4, 8)} />
            </div>
        </Section>
    )
}

export default Testimonial
