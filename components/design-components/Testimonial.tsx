import React from 'react'
import Section from './Section'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { feedbacks } from '@/lib/constants'
import Heading from './Heading'

const Testimonial = ({ isCrosses=true }: { isCrosses?: boolean }) => {
    return (
        <Section crosses={isCrosses} id='testimonials' crossesOffset="lg:translate-y-[5.25rem]"
        >
            <div className="flex py-10 flex-col justify-center items-center">

                <Heading
                    modeForSplit='chars'
                    title="Testimonial"
                />
                <InfiniteMovingCards speed='normal' items={feedbacks.slice(0, 3)} />
                <InfiniteMovingCards speed='normal' direction='right' items={feedbacks.slice(4, 8)} />
            </div>
        </Section>
    )
}

export default Testimonial
