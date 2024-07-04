"use client";
import { Link,Snippet, Divider,button as buttonStyles, Image, Button } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaWhatsapp, FaEnvelope, FaPhone, FaGoogle } from 'react-icons/fa';
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    review:"Thank you Dr. Gershia for another wonderful support provided today. you are awesome may god bless you abundantly keep you blessed.",
    name: "Smitha",
    place: "",
  },
  {
    review:"Hello Dr. Gershia Borges , Good Evening just wanted to let you know that I and my daughter are so grateful to you. Your Gentleness and kindness amazed me. Im doing fine after the Procedure. Hats off to you.",
    name: "Sophie",
    place: "",
  },
  {
    review:"Dr. Gershia Borges performed my surgery with such great care. Im feeling better now thanks to her. Dr.Gershia was very assuring and Helped me a lot. All nurses and staff were very helpful too. Hospital room were clean and well maintained. Special thanks to Dr.Gershia and all. May the Lord shower his blessings on you all",
    name: "Sandra Diniz",
    place: "",
  },
];


export default function IndexPage() {
  return (
    <DefaultLayout>

      {/* Section 1 */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
  <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">{siteConfig.nav_logo_name}</h2>
  <h3 className="text-lg text-pink-400 text-gray-700 max-w-4xl text-center">MBBS, MS(OBGyn), FMAS, DMAS</h3>
  <br />

  <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
    <div className="md:w-1/2 flex justify-center">
      <div className="relative">
        <div className="w-100 h-100 rounded-full overflow-hidden border-8 border-pink-200 flex items-center justify-center shadow-lg">
          <img src="/Dr.-Gershia-2.jpg" alt="Dr. Gershia Borges" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </div>

    <div className="text-center md:text-left md:w-1/2">
      <p className="text-md text-center mt-5">Dr. Gershia Borges is a Gynaecologist and Obstetrician currently working at Victor Hospital, Goa. She has completed her MBBS, MS (OBGyn), FMAS, and DMAS from St. John&apos;s University in Karnataka. She is also a skilled Laparoscopic Surgeon.</p>
      <p className="text-md text-center mt-5">With a passion for understanding her patients, Dr. Gershia aims to provide the highest quality care. She believes that every woman deserves access to the best medical expertise to enhance their quality of life.</p>
      <p className="text-md text-center mt-5">Dr. Gershia remains a &apos;forever student,&apos; continually expanding her knowledge in gynaecology and obstetrics. She is committed to staying updated with the latest advancements in her field through ongoing training and professional development.</p>
    </div>
  </div>
  
  <div className="max-w-4xl text-center">
    <p className="text-md mt-5">Dr. Gershia believes in empowering women to make the right decisions by sharing information on women&apos;s health on social media. Her social media page has informative posts on common problems women may face, such as PCOS, Endometriosis, Fertility, Menstrual problems, Contraception, Fibroids, Sexual Health and well-being, and Menopause, amongst others.</p>
    <p className="text-md mt-5">She aims to bust common myths and share accurate information with her community, as many sources share misinformation on social media. Dr. Gershia wishes to educate women and help them find credible sources of information, promoting informed and empowered decisions about their health.</p>
    <br ></br>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-5">
      <a href="/doctor-gershia-borges" className="bg-primary text-white rounded-full py-2 px-4 shadow">View {siteConfig.nav_logo_name_small_devices} Profile</a>
      <a href="/#appointment" className="bg-primary text-white rounded-full py-2 px-4 shadow md:ml-4">Book Appointment</a>
    </div>
  </div>
</section>

      <Divider className="my-4" />

      {/* Section 2 */}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-pink-500">Care - Gynecology and pregnancy</h2>
          <br />
          <p className="text-lg">Woman&apos;s health undergoes myriad changes throughout her life journey. Dr. Gershia Borges, an esteemed female Gynecologist and Obstetrician, brings forth her seasoned expertise. With a comprehensive approach, she extends a spectrum of obstetric, gynecologic, and pregnancy care services, tailored to meet the diverse needs of women at every stage of their lives.</p>
          <br />
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/doctor-gershia-borges#services"
          >
            View All Services
          </Link>
        </div>
      </section>
      <Divider className="my-4" />

      {/* Section 3 */}

      <section id="appointment" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
      <Divider className="my-4" />

      {/* Section 4 */}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
  <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">Open Consultation Hours</h2>
  <p className="text-lg text-center mt-5">
    {siteConfig.nav_logo_name_small_devices} offers open consultation hours for patients seeking medical advice or treatment. 
    Whether you need a routine check-up or have specific health concerns, she is available to provide personalized care and support.
  </p>
  <p className="text-lg text-center mt-5">
    Feel free to schedule an appointment or visit during the specified consultation hours.
  </p>
  <br />
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-pink-500 mb-4">Monday - Saturday</h3>
      <p className="text-lg">
        <span className="font-medium">Morning:</span> 9:00 AM - 1:00 PM<br />
        <span className="font-medium">Afternoon:</span> 3:00 PM - 7:00 PM
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-pink-500 mb-4">Sunday</h3>
      <p className="text-lg">
        Available by appointment only. Please contact us to schedule.
      </p>
    </div>
  </div>
</section>

      <Divider className="my-4" />

      {/* Section 5 */}

      {/* Testimonials Section 6*/}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center ">Patient Testimonials</h2>
    </section>
    <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <br />
      <div className="text-center my-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="https://g.co/kgs/yN4SR4u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="primary" variant="bordered" className="w-full md:w-auto">
            Read Reviews on <Image src="/google.svg" width={80} height={80} alt="Google" />
          </Button>
        </a>

        <a
          href="https://g.co/kgs/yN4SR4u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="primary" variant="shadow" className="w-full md:w-auto">
            Read Reviews on <Image src="/practo.svg" width={80} height={80} alt="Practo" />
          </Button>
        </a>
      </div>
    </div>
      <Divider className="my-4" />


    {/* Section 7 */}
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">Learning about Gynecology and Women&apos;s Health</h2>
      <br />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
        <div className="md:w-1/2 flex justify-center">
          <img src="/pregnancy_picture-3.jpg" alt="Gynecology_Baby_Image" className="w-full h-auto max-w-sm rounded-lg" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <p className="text-lg text-center mt-5">
            Our mission is to educate and empower girls, women, and individuals of all genders about female health. We believe that knowledge is key to promoting overall well-being and preventing health issues.
          </p>
          <p className="text-lg text-center mt-5">
            Explore our resources and learn about various aspects of gynecology, pregnancy, reproductive health, and more.
          </p>
          <div className="flex flex-col md:flex-row mt-6 gap-4 md:gap-8">
            <div className="flex items-center justify-center md:justify-center">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "bordered",
                })}
                href="/blog"
              >
                Read Blog
              </Link>
            </div>
            <div className="flex items-center justify-center md:justify-center">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "bordered",
                })}
                href="/learn_and_care"
              >
                Learn and care Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </DefaultLayout>
  );
}
