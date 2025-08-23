import Section from '@/components/design-components/Section'
import React from 'react'

const page = () => {
  return (
    <Section crosses>
{/* //    <iframe src="/anas-ahmed-resume.pdf" width="100%" height="1000px" ></iframe> */}
   <embed src="/anas-ahmed-resume.pdf" type="application/pdf" width="100%" height="600px" />
    </Section>
  )
}

export default page
