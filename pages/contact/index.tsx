import { title, subtitle } from "@/components/primitives";
import { Link, Snippet, Divider, button as buttonStyles } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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

      {/* Location Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-3xl font-bold text-pink-500">Current Practice and Consultation Location</h1>
          <br />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center md:w-1/2 w-full p-4">
              <FaMapMarkerAlt style={{ color: 'red', fontSize: '3rem' }} />
              <br />
              <Snippet hideSymbol hideCopyButton variant="bordered" className="text-xl break-words">
                Shop No 6, Near Aliza classic<br />
                cafe and restaurant,<br />
                Kamarlim Road, Loutolim<br />
                Goa, India
              </Snippet>
            </div>
            <div className="w-full h-64 md:w-1/2 md:h-96 p-4">
              <iframe
                title="Goa map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d705.4788778060546!2d73.98610918096348!3d15.33714358983117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb17e76a6ac23%3A0x8baa58e1352c30!2sDr.%20Gershia%20Borges!5e0!3m2!1sen!2sin!4v1719772744846!5m2!1sen!2sin"
                width="100%"
                height="100%"
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
