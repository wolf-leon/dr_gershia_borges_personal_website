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
  Link,
  Snippet,
  button as buttonStyles ,
  Image
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { FaEnvelope, FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

interface ExpertiseArea {
  title: string;
  body: string;
}


export default function DocsPage() {
  const { isOpen, onOpen, onClose,onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState<ExpertiseArea>({ title: "", body: "" });
  const { isOpen: isQRCodeModalOpen, onOpen: onQRCodeModalOpen, onClose: onQRCodeModalClose } = useDisclosure();

  const handleOpenModal = (title: string, body: string) => {
    setModalContent({ title, body });
    onOpen();
  };

  const handleOpenQRCodeModal = () => {
    onQRCodeModalOpen();
  };

  const expertiseAreas: ExpertiseArea[] = [
    { 
      title: "Preconception Care", 
      body: "Preconception Care also Called Pregnancy Counselling involves discussing various aspects of family planning and pregnancy preparation with individuals or couples who are planning to conceive. During these sessions, healthcare providers offer guidance on optimizing health before pregnancy, such as achieving a healthy weight, managing chronic conditions, and adopting healthy lifestyle habits. They may also discuss genetic testing, vaccinations, and screening for infectious diseases to ensure a safe and healthy pregnancy. Additionally, preconception counselling addresses potential risks and complications, helping individuals make informed decisions and plan for a successful pregnancy journey."
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
      title: "Fibroids", 
      body: "Uterine fibroids are non-cancerous growths in the uterus that can cause heavy menstrual bleeding, pelvic pain, and frequent urination. They can vary in size and are typically diagnosed through pelvic ultrasound or MRI. Treatment options include medications, non-surgical procedures like uterine fibroid embolization, and surgical options such as myomectomy or hysterectomy, depending on the severity of symptoms and individual health goals.Many women with fibroids experience no symptoms and may require no treatment, but those with significant symptoms should consult their healthcare provider to explore appropriate management options."
    },
    { 
      title: "Gynaecology Cancers", 
      body: "Gynaecological cancers are cancers that affect the female reproductive system, including the cervix, uterus, ovaries, fallopian tubes, vulva, and vagina. The most common types of gynaecological cancers are cervical cancer, endometrial (uterine) cancer, ovarian cancer, and vulvar cancer. Risk factors for gynaecological cancers may include genetic predisposition, exposure to certain viruses (such as HPV), hormonal factors, and lifestyle factors such as smoking or obesity. Early detection and treatment are critical for improving outcomes in gynaecological cancers, and screening tests such as Pap tests, HPV tests, and pelvic exams can help detect these cancers at an early stage when they are most treatable."
    },
    { 
      title: "Health Checkup", 
      body: "Woman health check-up is a comprehensive medical evaluation aimed at assessing and promoting overall health and well-being in women. It typically includes a review of medical history, physical examination, and screening tests for common health issues that affect women, such as breast cancer, cervical cancer, osteoporosis, and cardiovascular disease. Depending on individual risk factors and age, additional tests or evaluations may be recommended, such as mammograms, bone density scans, cholesterol screenings, or pelvic exams. Women health check-ups are important for early detection of health problems, prevention of disease, and promotion of healthy lifestyle behaviors."
    },
    { 
      title: "Pregnancy care", 
      body: "Pregnancy care involves regular prenatal check-ups to monitor the health of both the mother and the developing baby, ensuring proper growth and development through routine ultrasounds and tests. It includes maintaining a balanced diet rich in essential nutrients, staying physically active with appropriate exercises, and avoiding harmful substances such as alcohol and tobacco. Emotional support and education on childbirth and parenting are also crucial aspects of comprehensive pregnancy care, helping to prepare for a healthy delivery and postpartum recovery."
    },
    { 
      title: "Endometriosis", 
      body: "Endometriosis is a chronic condition where tissue similar to the lining of the uterus grows outside the uterine cavity, commonly affecting the ovaries, fallopian tubes, and pelvic lining. This can lead to severe pelvic pain, especially during menstruation, and may cause fertility issues. Management of endometriosis often involves pain relief through medications, hormonal therapies to limit endometrial growth, and sometimes surgical interventions to remove the abnormal tissue."
    },
    
  ];
  
  
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
      <p className="text-md mt-5">Dr. Gershia Borges is a  Obstetrician and Gynaecologist and Laparoscopic Surgeon having obtained her post graduation in MS (OBGyn) from the prestigious St. John&apos;s Medical College,Bangalore. She is also a trained Laparoscopic Surgeon from World Laparoscopy Hospital.</p>
      <p className="text-md mt-5">Her passion for patient care drives Dr. Gershia to deliver the highest quality medical services. She is committed to ensuring that every woman receives the best medical expertise to improve their overall quality of life.</p>
      <p className="text-md mt-5">Continuing her education is a priority for Dr. Gershia, who remains a &apos;forever student&apos; in the fields of gynaecology and obstetrics. Her rigorous training and qualifications enable her to provide the latest, evidence-based treatments to her patients, ensuring they benefit from proven and effective medical practices.</p>
      <p className="text-md mt-5">Dr. Gershia also values the importance of a holistic approach to healthcare. She works closely with her patients to address not only their immediate medical needs but also their emotional and psychological well-being. By fostering a supportive and compassionate environment, she ensures that each patient feels heard and cared for throughout their treatment journey.</p>
      
    </div>
  </div>
  
  <div className="max-w-4xl text-center">
    <p className="text-md mt-5">Dr. Gershia is dedicated to empowering women by sharing valuable health information through social media. Her platform provides insights into various women&apos;s health issues, including PCOS, Endometriosis, Fertility, Menstrual problems, Contraception, Fibroids, Sexual Health, and Menopause.</p>
    <p className="text-md mt-5">Her goal is to debunk myths and deliver accurate health information, countering the misinformation often found online. Dr. Gershia strives to educate women, helping them access reliable sources and make informed decisions about their health.</p>
    <p className="text-md mt-5">Beyond her clinical practice, Dr. Gershia actively engages in community outreach and health education. She regularly participates in seminars and workshops to share her knowledge and advocate for women&apos;s health issues. Her commitment extends beyond the walls of the hospital, as she strives to make a positive impact on the broader community through her educational efforts and advocacy work.</p>
    <br />
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-5">
      <a href="/doctor-gershia-borges#appointment" className="bg-primary text-white rounded-full py-2 px-4 shadow">Book Appointment</a>
    </div>
  </div>
</section>


      <Divider className="my-4" />

      {/* Section 2 */}
      <section id="services" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h2 className="text-3xl font-bold text-pink-500 text-center">Professional Work Expertise</h2>
        <div className="max-w-4xl text-center">
        <p className="text-lg text-center mt-5">
          {siteConfig.nav_logo_name_small_devices} has extensive expertise in various areas of gynecology and obstetrics, providing comprehensive care for women&apos;s health. Her professional work expertise includes:
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

      <section id="appointment" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-pink-500">Follow On Instagram</h2>
          <br />
         {/* Instagram Section  */}
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
      <div className="max-w-lg w-full p-4 md:p-6 bg-white rounded-lg shadow-lg relative overflow-hidden border-pink-200 border-2 md:max-w-md lg:max-w-lg">
        {/* Profile Picture with Instagram Story Outline */}
        <div className="relative flex items-center justify-center mt-4 mb-2">
          <div className="w-40 h-40 bg-gradient-to-r from-pink-800 to-red-800 rounded-full absolute"></div> {/* Instagram Story Outline */}
          <img
            src="/Dr.-Gershia-2.jpg" // Replace with the actual URL of the profile picture
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full z-10"
          />
        </div>

        {/* Username */}
        <div className="text-center mb-4">
          <p className="text-xl font-semibold text-pink-500">@dr.wombate</p>
        </div>

        {/* Bio Section */}
        <div className="p-4 text-center">
          <p className="text-sm text-gray-700 mt-2">👩‍⚕️ Dr. Gershia Borges<br />
          🔹 MBBS, MS (OBGyn), FMAS, DMAS<br />
          🔹 Passionate OB-GYN Specialist<br />
          🔹 Women&apos;s Health Advocate<br />
          🔹 Minimally Invasive Surgery Expert<br />
          🌟 Empowering Women Every Day<br />
          📍 Goa<br />
          💌 {siteConfig.links.email}<br />
          Website: {siteConfig.links.websitelink}</p>
        </div>

        {/* Follow Button */}
        <div className="p-4 text-center">
          <a 
            href="https://www.instagram.com/dr.wombmate?igsh=ampndmQ4d2dlcjA1" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full py-2 px-6 shadow-lg hover:bg-gradient-to-l transition duration-300"
          >
            <FaInstagram className="inline mr-2" /> Follow on Instagram
          </a>
        </div>
        

        {/* QR Code Button */}
        <div className="p-4 text-center">
          <Button
            onPress={() => handleOpenQRCodeModal()}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full py-2 px-6 shadow-lg hover:bg-gradient-to-l transition duration-300"
          >
            Follow Using QR Code
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isQRCodeModalOpen} placement="center" onClose={onQRCodeModalClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{siteConfig.nav_logo_name_small_devices} Instagram QR Code</ModalHeader>
          <ModalBody>
            <Image
              width={400}
              alt="QR Code"
              src="/qrcode.jpg" // Replace with the actual URL of the QR code image
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="solid"  onPress={onQRCodeModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>

        </div>
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
          height="476"
          width="300"
        ></iframe> 
        <iframe
          src="https://www.youtube.com/embed/EUgFgOqnGWw?si=zihfKM3QsJuW-Oxi"
          title="Gershia Borges 2 video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          height="476"
          width="300"
        ></iframe>
      </div>

      {/* Container for Facebook videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <iframe
          title="Gershia Borges 3 video"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fvictorhospitalgoa%2Fvideos%2F175796568893483%2F&show_text=false&width=300&t=0"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
           height="476"
          width="300"
        ></iframe>
        <iframe
        title="Gershia Borges 4 video"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fvictorhospitalgoa%2Fvideos%2F804970777610862%2F&show_text=false&width=300&t=0"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          height="476"
          width="300"
        ></iframe>
      </div>
    </section>
    <Divider className="my-4" />


{/* Gallery Section */}

<section className="flex flex-wrap justify-center gap-4 py-8 md:py-10">
<div className="md:w-1/2 flex flex-col justify-center items-center md:text-center">
      <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center justify-center items-center">Highlights of Commitment to Women&apos;s Health</h2>
      <p className="text-lg text-center md:mt-5">
      Explore moments from various initiatives and engagements where {siteConfig.nav_logo_name_small_devices} has actively contributed to advancing women&apos;s health. It captures her participation in health checkups, educational talks, and community events, underscoring her commitment to enhancing the well-being of women and imparting knowledge for their safe health.
      </p>
      <br></br>
  </div>
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
    {[
      "/highligt.jpg",
      "/highlight-1.jpeg",
      "/highlight-2.jpeg",
      "/highlight-3.jpeg",
      "/highlight-7.jpeg",
      "/highlight-5.jpeg",
      "/highlight-4.jpeg",
    ].map((src, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 flex justify-center">
        <Image
        isZoomed
        alt={`Gallery image ${index + 1}`}
        src={src}
        className="w-full h-auto max-w-xl rounded-xl"
      />
      </div>
    ))}
  </div>
</section>
        
    </DefaultLayout>
  );
  
}
