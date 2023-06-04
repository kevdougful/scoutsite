import { chakra, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import SectionTitle from '../marketing/section-title'
import Section from '../marketing/section-wrapper'

export const Faq = () => {
  return (
    <Section id="faq">
      <SectionTitle title="Frequently asked questions" />

      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <FaqItem
          question="What are Pack 572's values?"
          answer={
            <>
              We strive daily to adhere to the scout oath and law and to remain
              reverent toward all walks of life.
            </>
          }
        />
      </SimpleGrid>
    </Section>
  );
}

const FaqItem = ({ question, answer }: any) => {
  return (
    <chakra.dl>
      <chakra.dt fontWeight="semibold" mb="2">
        {question}
      </chakra.dt>
      <chakra.dd color={useColorModeValue('gray.500', 'gray.400')}>
        {answer}
      </chakra.dd>
    </chakra.dl>
  )
}
