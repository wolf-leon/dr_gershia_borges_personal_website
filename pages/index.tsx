import { Link, Card, CardHeader, Button,CardBody, CardFooter,Snippet,Image, Divider,button as buttonStyles } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell,getKeyValue} from "@nextui-org/table";
import DefaultLayout from "@/layouts/default";
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const rows = [
  {
    key: "1",
    Day: "Monday",
    Morning: "10:00am-12:30pm",
    Evening: "17:00pm-19:30pm",
  },
  {
    key: "2",
    Day: "Tuesday",
    Morning: "10:00am-12:30pm",
    Evening: "17:00pm-19:30pm",
  },
  {
    key: "3",
    Day: "Wednesday",
    Morning: "10:00am-12:30pm",
    Evening: "17:00pm-19:30pm",
  },
  {
    key: "4",
    Day: "Thursday",
    Morning: "10:00am-12:30pm",
    Evening: "17:00pm-19:30pm",
  },
  {
    key: "5",
    Day: "Friday",
    Morning: "10:00am-12:30pm",
    Evening: "17:00pm-19:30pm",
  },
  {
    key: "6",
    Day: "Saturday",
    Morning: "10:00am-12:30pm",
    Evening: "17:00pm-19:30pm",
  },
  {
    key: "7",
    Day: "Sunday",
    Morning: "Closed",
    Evening: "Closed",
  },
];

const columns = [
  {
    key: "Day",
    label: "Day",
  },
  {
    key: "Morning",
    label: "Morning",
  },
  {
    key: "Evening",
    label: "Evening",
  },
];
export default function IndexPage() {
  return (
    <DefaultLayout>

      {/* Section 1 */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className={title()}>A baby is like the&nbsp;</h1>
            <h1 className={title({ color: "pink" })}>beginning&nbsp;</h1>
            <h1 className={title()}>
              of all things.
            </h1>
            <br />
            <h4 className={subtitle({ class: "mt-4" })}>
              - wonder, hope, a dream of possibilities.
            </h4>
            <br />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/pregnancy_picture-2.jpg" alt="Baby" className="w-full h-auto max-w-sm rounded-lg" />
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
            href="/learn_and_care"
          >
            View All Services
          </Link>
        </div>
      </section>
      <Divider className="my-4" />

      {/* Section 3 */}

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
      <Divider className="my-4" />

      {/* Section 4 */}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">Open Consultation Hours</h2>
      <p className="text-lg text-center mt-5">
        {siteConfig.nav_logo_name_small_devices} offers open consultation hours for patients seeking medical advice or treatment. 
        Whether you need a routine check-up or have specific health concerns, She is available to provide personalized care and support. 
        </p>
        <p className="text-lg text-center mt-5">Feel free to schedule an appointment or visit during the specified consultation hours.
      </p>
      <br />
      <Table className="mx-auto" aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </section>
      <Divider className="my-4" />

      {/* Section 5 */}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">{siteConfig.nav_logo_name}</h2>
      <br />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="md:w-1/2 flex justify-center">
            <img src="Dr.-Gershia-2.jpg" alt="Dr.-Gershia" className="w-full h-auto max-w-sm rounded-lg" />
          </div>

          <div className="text-center md:text-left md:w-1/2">
            <p className="text-lg text-center mt-5">
            {siteConfig.nav_logo_name_small_devices} is a full-time Obstetrician and Gynaecologist, holding an MS in Obstetrics and Gynaecology from St. John&apos;s Medical College, Bangalore.</p>
            <p className="text-lg text-center mt-5">Specializing in high-risk obstetrics and gynaecological disorders, She leverages her experience and exceptional skills to provide transformative care and guidance. She has impacted the lives of countless patients with her dedicated and compassionate approach.
            </p>
            <br />
            <div className="flex items-center justify-center md:justify-center">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href="/doctor"
              >
                View {siteConfig.nav_logo_name_small_devices} Profile
              </Link>
            </div>
          </div>
      </div>
      </section>
      <Divider className="my-4" />

      {/* Testimonials Section 6*/}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">Patient Testimonials</h2>
      <br />
      <div className="max-w-[900px] flex flex-wrap justify-center gap-7">
        <Card className="h-auto w-full sm:w-auto md:w-[calc(33%-16px)]">
          <CardBody className="p-4">
            <p className="text-lg font-semibold text-gray-800">{siteConfig.card_testimonial_data.client1_name}</p>
            <p className="text-base text-gray-600 mt-2">
            &quot;{siteConfig.card_testimonial_data.client1_testimonial}&quot;
            </p>
          </CardBody>
        </Card>
        <Card className="h-auto w-full sm:w-auto md:w-[calc(33%-16px)]">
          <CardBody className="p-4">
            <p className="text-lg font-semibold text-gray-800">{siteConfig.card_testimonial_data.client2_name}</p>
            <p className="text-base text-gray-600 mt-2">
            &quot;{siteConfig.card_testimonial_data.client2_testimonial}&quot;
            </p>
          </CardBody>
        </Card>
        <Card className="h-auto w-full sm:w-auto md:w-[calc(33%-16px)]">
          <CardBody className="p-4">
            <p className="text-lg font-semibold text-gray-800">{siteConfig.card_testimonial_data.client3_name}</p>
            <p className="text-base text-gray-600 mt-2">
            &quot;{siteConfig.card_testimonial_data.client3_testimonial}&quot;
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
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
