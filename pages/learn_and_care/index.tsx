import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Link, Snippet, Divider, button as buttonStyles } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function DocsPage() {
  return (
    <DefaultLayout>
      {/* Section 1 */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-pink-500">Knowledge to Pregnancy and Women&apos;s Health & Wellness</h2>
          <br />
        </div>
      </section>
      <Divider className="my-4" />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className={title({ color: "pink" })}>Pregnancy</h1>
            <br />
            <h4 className={subtitle({ class: "mt-4" })}>
              Pregnancy is a unique and transformative journey that typically lasts around 40 weeks, divided into three trimesters. It begins with conception and progresses through the development of the fetus until childbirth.
            </h4>
            <br />
            <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/blog"
          >
            View Pregnacy Articles
          </Link>
            <br />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/pregnancy_picture-4.jpg" alt="Baby" className="w-full h-auto max-w-sm rounded-lg" />
          </div>
        </div>
        <br />
      <Divider className="my-4" />

        <br />
        <br />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className={title({ color: "pink" })}>Contraception</h1>
            <br />
            <h4 className={subtitle({ class: "mt-4" })}>
            Contraception encompasses various methods to prevent pregnancy, allowing individuals to choose if and when to have children. These methods range from hormonal options like birth control pills to barrier methods such as condoms.
            </h4>
            <br />
            <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/blog"
          >
            View Contraception Articles
          </Link>
            <br />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/contraception-pill.jpg" alt="contraception-pill" className="w-full h-auto max-w-sm rounded-lg" />
          </div>
        </div>
        <br />

        <Divider className="my-4" />

        <br />
        <br />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className={title({ color: "pink" })}>Women Wellness</h1>
            <br />
            <h4 className={subtitle({ class: "mt-4" })}>
            Women&apos;s health and wellness focus on maintaining physical, mental, and emotional well-being throughout all stages of life. This includes regular health check-ups, balanced nutrition, and stress management.
            </h4>
            <br />
            <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/blog"
          >
            View Women Wellness Articles
          </Link>
            <br />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/womens-wellness.jpg" alt="contraception-pill" className="w-full h-auto max-w-sm rounded-lg" />
          </div>
        </div>

      </section>
      <br/>
      <Divider className="my-4" />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-pink-500">Book Appointment</h2>
          <br />
          <p className="text-lg text-center mt-5">
        For private visits or consultations, please connect with {siteConfig.nav_logo_name_small_devices} and make sure to have an appointment beforehand to avoid any inconvenience.</p>
        <p className="text-lg text-center mt-5">In times of medical emergency, contact via mobile or WhatsApp for a fast response.
      </p>
        </div>
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
      </section>
    </DefaultLayout>
  );
}
