import { Link, Snippet, Code, button as buttonStyles } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell,getKeyValue} from "@nextui-org/table";
import DefaultLayout from "@/layouts/default";
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
            <div className="flex justify-center md:justify-start">
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
          <div className="md:w-1/2 flex justify-center">
            <img src="/pregnancy_picture-2.jpg" alt="Baby" className="w-full h-auto max-w-sm rounded-lg" />
          </div>
        </div>
      </section>
      <hr className="my-8 border-gray-300" />

      {/* Section 2 */}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-pink-500">Care - Gynecology & pregnancy</h2>
          <br />
          <p className="text-lg">Woman's health undergoes myriad changes throughout her life journey. Dr. Gershia Borges, an esteemed female Gynecologist & Obstetrician, brings forth her seasoned expertise. With a comprehensive approach, she extends a spectrum of obstetric, gynecologic, and pregnancy care services, tailored to meet the diverse needs of women at every stage of their lives.</p>
          <br />
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/services"
          >
            View All Services
          </Link>
        </div>
      </section>
      <hr className="my-8 border-gray-300" />

      {/* Section 3 */}

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Table aria-label="Example table with dynamic content">
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
      <hr className="my-8 border-gray-300" />
      

    </DefaultLayout>
  );
}
