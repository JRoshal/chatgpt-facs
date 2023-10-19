import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'EPA #1: RLQ Pain and Appendicitis',
    message: `A 25-year-old female presents with right lower quadrant abdominal pain.`
  },
  {
    heading: 'EPA #2: Benign or Malignant Breast Disease',
    message: 'A 49-year-old female presents with a right-sided breast lump.'
  },
  {
    heading: 'EPA #3: Gallbladder Disease',
    message: `A 65-year-old male presents with right upper quadrant abdominal pain and jaundice.`
  },
  {
    heading: 'EPA #4: Acute Abdomen',
    message: `A 56-year-old female presents with sudden-onse severe abdominal pain.`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to ChatGPT, FACS!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an AI-powered surgery trainee ready to be tested!
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
