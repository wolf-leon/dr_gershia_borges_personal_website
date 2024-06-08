import { title ,subtitle} from "@/components/primitives";
import { Link,Snippet, Divider,button as buttonStyles } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaEnvelope, FaPhone,FaMapMarkerAlt } from 'react-icons/fa';


export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-pink-500">Contact</h1>
        <br />
        <h4 className={subtitle({ class: "mt-4" })}>
        {siteConfig.nav_logo_name_small_devices} currently works and is associated with Victor Hospital Goa. For availability, contact on any one of the following:
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col items-center p-4 md:p-6">
            <FaWhatsapp style={{ color: '#25D366', fontSize: '3rem' }} />
            <Link
              className={buttonStyles({
                color: "success",
                radius: "full",
                variant: "shadow",
                className: "mt-4 md:mt-6"
              })}
              href={siteConfig.links.whatsapp}
            >
              Whatsapp Message
            </Link>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6">
            <FaPhone style={{ color: '#87CEEB', fontSize: '3rem' }} />
            <Snippet hideSymbol className="mt-4 md:mt-6">{siteConfig.links.mobile}</Snippet>
          </div>
          <div className="flex flex-col items-center p-4 md:p-6">
            <FaEnvelope style={{ color: '#d3d3d3', fontSize: '3rem' }} />
            <Snippet hideSymbol variant="bordered" className="mt-4 md:mt-6">{siteConfig.links.email}</Snippet>
          </div>
        </div>
        </div>
      </section>
      <Divider className="my-4" />


      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-pink-500">Current Practice and Consultation Location</h1>
          <br />
          <div className="flex flex-col md:flex-row items-center p-4 md:p-6">
            <div className="flex flex-col items-center md:items-center md:w-1/2 justify-center text-center">
              <FaMapMarkerAlt style={{ color: 'red', fontSize: '3rem' }} className="items-center justify-center" />
              <br />
              <Snippet hideSymbol hideCopyButton variant="bordered" className="text-xl">Goa, India</Snippet>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
              <iframe
              title="Goa map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365410.3415982797!2d73.77704083555209!3d15.441332125298365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1717861614480!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Divider className="my-4" />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-pink-500">FAQS</h2>
          <br />
          <p className="text-lg">For Frequently Asked Questions, Please Refer the FAQs Section.</p>
          <br />
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/faqs"
          >
            View FAQs Section
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
