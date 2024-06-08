import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function FAQPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
        <h1 className="text-3xl font-bold text-pink-500">Frequently Asked Questions (FAQs)</h1>
        <br />
        <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="What services does a gynecologist provide?">
        {siteConfig.faq_content.faq1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="When should I schedule my first gynecological exam?">
        {siteConfig.faq_content.faq2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="What can I expect during my first prenatal visit?">
        {siteConfig.faq_content.faq3}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="How often should I visit an obstetrician during my pregnancy?">
        {siteConfig.faq_content.faq4}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="What are the signs that I should see a gynecologist immediately?">
        {siteConfig.faq_content.faq5}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="What options are available for birth control?">
        {siteConfig.faq_content.faq6}
      </AccordionItem>
      <AccordionItem key="7" aria-label="Accordion 7" title="What should I do if I miss a birth control pill?">
        {siteConfig.faq_content.faq7}
      </AccordionItem>
      <AccordionItem key="8" aria-label="Accordion 8" title="What are common symptoms of menopause and how can they be managed?">
        {siteConfig.faq_content.faq8}
      </AccordionItem>
      <AccordionItem key="9" aria-label="Accordion 9" title="What should I do if I experience complications during pregnancy?">
        {siteConfig.faq_content.faq9}
      </AccordionItem>
      <AccordionItem key="10" aria-label="Accordion 10" title="How can I prepare for labor and delivery?">
        {siteConfig.faq_content.faq10}
      </AccordionItem>
    </Accordion>
        </div>
      </section>
    </DefaultLayout>
  );
}
