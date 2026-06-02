import { FadeIn } from '@/components/fade-in'
import { SectionHeading } from '@/components/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { FaqItem } from '@/lib/data'

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading label="Dúvidas frequentes" title="Perguntas e Respostas" />
        </FadeIn>

        <FadeIn delay={120} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="font-serif text-lg font-semibold text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-text">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
