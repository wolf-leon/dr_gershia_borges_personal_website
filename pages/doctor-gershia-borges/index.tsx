import React, { useState } from "react";
import DefaultLayout from "@/layouts/default";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Button,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  TableColumn,
  TableBody,
  getKeyValue,
  Link,
  Snippet,
  button as buttonStyles ,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { FaEnvelope, FaPhone, FaWhatsapp, FaFacebook } from "react-icons/fa";

interface ExpertiseArea {
  title: string;
  body: string;
}

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

export default function DocsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState<ExpertiseArea>({ title: "", body: "" });

  const handleOpenModal = (title: string, body: string) => {
    setModalContent({ title, body });
    onOpen();
  };

  const expertiseAreas: ExpertiseArea[] = [
    { 
      title: "Preconception Counsel", 
      body: "Preconception counselling involves discussing various aspects of family planning and pregnancy preparation with individuals or couples who are planning to conceive. During these sessions, healthcare providers offer guidance on optimizing health before pregnancy, such as achieving a healthy weight, managing chronic conditions, and adopting healthy lifestyle habits. They may also discuss genetic testing, vaccinations, and screening for infectious diseases to ensure a safe and healthy pregnancy. Additionally, preconception counselling addresses potential risks and complications, helping individuals make informed decisions and plan for a successful pregnancy journey."
    },
    { 
      title: "Infertility", 
      body: "Infertility is a medical condition characterized by the inability to conceive or carry a pregnancy to term despite regular unprotected sexual intercourse. It can affect both men and women and may result from various factors, including hormonal imbalances, reproductive disorders, age-related decline in fertility, and lifestyle factors such as smoking or excessive alcohol consumption. Treatment options for infertility depend on the underlying cause and may include lifestyle changes, medication, assisted reproductive technologies like in vitro fertilization (IVF), or surgery. Infertility treatment aims to help individuals or couples achieve their goal of becoming parents."
    },
    { 
      title: "High Risk Pregnancy", 
      body: "A high-risk pregnancy refers to a pregnancy with an increased likelihood of complications for the mother, fetus, or both. Factors that may contribute to a high-risk pregnancy include advanced maternal age, pre-existing medical conditions such as diabetes or hypertension, multiple gestations (twins or higher-order multiples), previous pregnancy complications, or lifestyle factors such as smoking or substance abuse. Management of high-risk pregnancies typically involves close monitoring by healthcare providers, specialized prenatal care, and sometimes interventions to prevent or manage potential complications. The goal is to optimize outcomes for both the mother and baby."
    },
    { 
      title: "Menstrual Health", 
      body: "Menstrual health refers to the overall well-being and normal functioning of the menstrual cycle, including the regularity, duration, and symptoms associated with menstruation. A healthy menstrual cycle typically occurs every 21 to 35 days and involves the shedding of the uterine lining (menstruation), which is regulated by hormonal changes. Menstrual health can be influenced by various factors, including hormonal imbalances, stress, diet, exercise, and underlying medical conditions such as polycystic ovary syndrome (PCOS) or endometriosis. Healthcare providers play a crucial role in assessing and managing menstrual health issues to promote overall reproductive health and well-being."
    },
    { 
      title: "Menopause", 
      body: "Menopause is a natural biological process that marks the end of menstruation and fertility in women. It typically occurs around the age of 45 to 55, although the timing can vary. Menopause is characterized by hormonal changes, specifically a decline in estrogen production by the ovaries, which leads to the cessation of menstrual periods. Symptoms of menopause may include hot flashes, night sweats, mood changes, vaginal dryness, and changes in libido. Management of menopausal symptoms may involve lifestyle modifications, hormone replacement therapy (HRT), or other medications to alleviate symptoms and improve quality of life."
    },
    { 
      title: "Cervical Cancer", 
      body: "Cervical cancer screening is a preventive health measure aimed at detecting abnormal changes in the cells of the cervix early, before they develop into cervical cancer. The most common screening test for cervical cancer is the Pap test (Pap smear), which involves collecting cells from the cervix and examining them under a microscope for abnormalities. Another screening option is the HPV test, which detects the presence of high-risk strains of the human papillomavirus (HPV) that can cause cervical cancer. Regular cervical cancer screening can help detect precancerous changes early when they are most treatable and prevent the development of cervical cancer."
    },
    { 
      title: "Gynaecological Cancers", 
      body: "Gynaecological cancers are cancers that affect the female reproductive system, including the cervix, uterus, ovaries, fallopian tubes, vulva, and vagina. The most common types of gynaecological cancers are cervical cancer, endometrial (uterine) cancer, ovarian cancer, and vulvar cancer. Risk factors for gynaecological cancers may include genetic predisposition, exposure to certain viruses (such as HPV), hormonal factors, and lifestyle factors such as smoking or obesity. Early detection and treatment are critical for improving outcomes in gynaecological cancers, and screening tests such as Pap tests, HPV tests, and pelvic exams can help detect these cancers at an early stage when they are most treatable."
    },
    { 
      title: "Women Health Check-up", 
      body: "Woman health check-up is a comprehensive medical evaluation aimed at assessing and promoting overall health and well-being in women. It typically includes a review of medical history, physical examination, and screening tests for common health issues that affect women, such as breast cancer, cervical cancer, osteoporosis, and cardiovascular disease. Depending on individual risk factors and age, additional tests or evaluations may be recommended, such as mammograms, bone density scans, cholesterol screenings, or pelvic exams. Women health check-ups are important for early detection of health problems, prevention of disease, and promotion of healthy lifestyle behaviors."
    },
    
  ];
  
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">
          {siteConfig.nav_logo_name}
        </h2>
        <br />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
          <div className="md:w-1/2 flex justify-center">
            <img src="Dr.-Gershia-2.jpg" alt="Dr.-Gershia" className="w-full h-auto max-w-sm rounded-lg" />
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-lg text-center mt-5">
              {siteConfig.nav_logo_name_small_devices} is a full-time Obstetrician and Gynaecologist, holding an MS in Obstetrics and Gynaecology from St. John&apos;s Medical College, Bangalore.
            </p>
            <p className="text-lg text-center mt-5">
              Specializing in high-risk obstetrics and gynaecological disorders, she leverages her experience and exceptional skills to provide transformative care and guidance.
              <br />
              <br />
              She has impacted the lives of countless patients with her dedicated and compassionate approach.
            </p>
            <br />
          </div>
        </div>
      </section>
      <Divider className="my-4" />

      {/* Section 2 */}
      <section id="services" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h2 className="text-3xl font-bold text-pink-500 text-center">Professional Work Expertise</h2>
        <div className="max-w-4xl text-center">
        <p className="text-lg text-center mt-5">
          {siteConfig.nav_logo_name_small_devices} has extensive expertise in various areas of gynecology and obstetrics, providing comprehensive care for women&apos;s health. She currently practices at Victor Hospital, Margao, Goa. Her professional work expertise includes:
        </p>
        </div>
        <br />
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl">
          <div className="flex flex-col text-center md:text-left justify-start">
        <br />
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {expertiseAreas.map((area) => (
                <Button
                  key={area.title}
                  className="w-full rounded-full bg-blue-500 text-white ${isSmallScreen ? 'text-sm' : ''}"
                  onPress={() => handleOpenModal(area.title, area.body)}
                >
                  {area.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/baby-picture.jpg" alt="Gynaecology Skills" className="w-full h-auto max-w-sm rounded-lg" />
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} placement="center" onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{modalContent.title}</ModalHeader>
          <ModalBody>
            <p>{modalContent.body}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="shadow" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


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
        {(column) => <TableColumn key={column.key} className="text-center">{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell className="text-center">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </section>
      <Divider className="my-4" />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">Featured</h2>
      <br></br>
      {/* Container for YouTube videos */} 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <iframe
          src="https://www.youtube.com/embed/3try5AAA8I4?si=s3ZQ8RFYmyyb6ZXT"
          title="Gershia Borges 1 video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full sm:w-64 md:w-360 lg:w-96 h-64 md:h-80 lg:h-105"
        ></iframe> 
        <iframe
          src="https://www.youtube.com/embed/EUgFgOqnGWw?si=zihfKM3QsJuW-Oxi"
          title="Gershia Borges 2 video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full sm:w-64 md:w-360 lg:w-96 h-64 md:h-80 lg:h-105"
        ></iframe>
      </div>

      {/* Container for Facebook videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <iframe
          title="Gershia Borges 3 video"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fvictorhospitalgoa%2Fvideos%2F804970777610862%2F&show_text=true&width=267&t=0"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full sm:w-64 md:w-80 lg:w-96 h-80 md:h-96 lg:h-[591px]"
        ></iframe>
        <iframe
        title="Gershia Borges 4 video"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fvictorhospitalgoa%2Fvideos%2F175796568893483%2F&show_text=true&width=267&t=0"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full sm:w-64 md:w-80 lg:w-96 h-80 md:h-96 lg:h-[591px]"
        ></iframe>
      </div>
    </section>

    <Divider className="my-4" />

    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
  <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">Highlights</h2>
  <br />
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl">
    <div className="md:w-1/2 flex justify-center">
      <img src="/highligt.jpg" alt="Baby" className="w-full h-auto max-w-sm rounded-lg" />
    </div>
    <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <p className="text-lg text-center md:text-left mt-5">
        {siteConfig.nav_logo_name} led an enlightening Breast Cancer & Cervical Cancer Awareness Talk, in collaboration with BJP Mahila Morcha, at Rukhmani Hall, Ponda. The event, attended by over 500 individuals, was a significant milestone in spreading awareness about these crucial health issues.
      </p>
      <br></br>
      <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="https://www.facebook.com/victorhospitalgoa/posts/961810859287597/?_rdr"
            target="_blank"
          >
            <FaFacebook className="w-6 h-6 mr-2" />
            See Post on Facebook
          </Link>
    </div>
  </div>
</section>



        
    </DefaultLayout>
  );
  
}
