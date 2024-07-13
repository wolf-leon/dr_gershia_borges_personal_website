import { useState } from 'react';
import DefaultLayout from "@/layouts/default";
import { siteConfig } from '@/config/site';
import { Divider } from '@nextui-org/react';
import { FaCogs, FaHandsHelping, FaUserMd } from 'react-icons/fa';

// Custom hook to return the title styles
function title() {
  return "text-3xl font-bold leading-tight text-gray-900 sm:text-4xl";
}

export default function AboutPage() {
  const [aimSection, setAimSection] = useState('Expertise');

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
        <h2 className="text-3xl font-bold text-pink-500 text-center">About {siteConfig.nav_logo_name}</h2>
        </div>
        <br></br>
        <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="md:w-1/3">
              <img
                src="/Dr.-Gershia-2.jpg" // Replace with the path to the gynecologist's image
                alt={siteConfig.nav_logo_name}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold">{siteConfig.nav_logo_name_small_devices}</h2>
              <p>MBBS, MS(OBGyn), FMAS, DMAS</p>
              <p className="mt-4 text-gray-600">
                {siteConfig.nav_logo_name_small_devices} is a certified and experienced gynecologist and obstetrician. She is registered with the Medical Council of India.She completed her MBBS degree and MS (Obstetrics & Gynecology) at St. John&apos;s Medical College, Bangalore. 
              </p>
              <p className="mt-2 text-gray-600">
              {siteConfig.nav_logo_name_small_devices} has worked extensively in India, gaining expertise in managing complex pregnancies, infertility treatments, and advanced laparoscopic surgeries. She is a registered Laparoscopic Surgeon endorsed by the World Association of Laparoscopic Surgeons for Advancing Minimally Invasive Surgery.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <Divider className="my-4" />
        <div className="inline-block max-w-lg text-center justify-center">
        <h2 className="text-3xl font-bold text-pink-500 text-center">Purpose</h2>
        </div>
        <div className="w-full max-w-4xl mt-8 px-4 md:px-0">
          <div className="flex flex-col">
            <div className="flex">
              <button
                className={`flex-1 px-4 py-2 ${aimSection === 'Expertise' ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setAimSection('Expertise')}
              >
                Expertise
              </button>
              <button
                className={`flex-1 px-4 py-2 ${aimSection === 'Vision' ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setAimSection('Vision')}
              >
              Vision
              </button>
            </div>
            <div className="mt-4 p-4 border rounded-lg text-gray-700 bg-gray-50">
              {aimSection === 'Expertise' && (
                <p>
                 {siteConfig.nav_logo_name_small_devices} has worked extensively in India, where she has honed her expertise in managing complex pregnancies, infertility treatments, and advanced laparoscopic surgeries. As a highly skilled professional, she is a registered Laparoscopic Surgeon endorsed by the World Association of Laparoscopic Surgeons for Advancing Minimally Invasive Surgery, a testament to her dedication to cutting-edge surgical techniques. Dr. Borges has gained invaluable experience through her work in various renowned institutions across the country. {siteConfig.nav_logo_name_small_devices} continues to provide exceptional care and innovative solutions to her patients.
                </p>
              )}
              {aimSection === 'Vision' && (
                <p>
                  {siteConfig.nav_logo_name_small_devices} vision is to pioneer compassionate, evidence-based women&apos;s healthcare, setting new standards in gynecology and obstetrics. She aims to empower every woman to achieve optimal health and well-being throughout every stage of life. Her practice strives for excellence in patient care, ensuring personalized, compassionate service that respects each woman&apos;s individual needs and choices. She envisions leading in women&apos;s health by integrating the latest research, technology, and best practices into our clinical approach, guaranteeing the highest standard of care. She is dedicated to empowering patients through education, fostering informed decision-making and active participation in health management. Collaboration with healthcare professionals and community engagement are integral to the mission, promoting health education and awareness. Innovation and research drive our efforts to enhance diagnostic accuracy and treatment effectiveness.
                </p>
              )}
            </div>
          </div>
        </div>
        <br></br>
        <Divider />
      </section>

       {/* Section 2 */}
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
        <div className="w-full max-w-4xl md:px-0">
        <h2 className="text-3xl font-bold text-pink-500 text-center">Why Choose {siteConfig.nav_logo_name_small_devices}?</h2>
        <br></br>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-6 bg-white border rounded-lg shadow">
              <div className="flex items-center mb-4">
                <FaUserMd className="w-12 h-12 mr-4 text-pink-500"/>
                <h3 className="text-xl font-semibold">Experienced Specialist</h3>
              </div>
              <p className="text-gray-600">
              {siteConfig.nav_logo_name_small_devices} has expertise in managing complex pregnancies, infertility treatments, and advanced laparoscopic surgeries. She is a registered Laparoscopic Surgeon endorsed by the World Association of Laparoscopic Surgeons for Advancing Minimally Invasive Surgery.
              </p>
            </div>
            <div className="flex-1 p-6 bg-white border rounded-lg shadow">
              <div className="flex items-center mb-4">
                <FaCogs className="w-12 h-12 mr-4 text-pink-500"/>
                <h3 className="text-xl font-semibold">Diagnosis</h3>
              </div>
              <p className="text-gray-600">
                Diagnosis and Treatments for addressing different issues related to Preganancy and related issues.Treatments may include lifestyle changes, medications, or surgical interventions depending on the diagnosed condition and its severity, aiming to optimize maternal and fetal health outcomes.
              </p>
            </div>
            <div className="flex-1 p-6 bg-white border rounded-lg shadow">
              <div className="flex items-center mb-4">
                <FaHandsHelping className="w-12 h-12 mr-4 text-pink-500"/>
                <h3 className="text-xl font-semibold">Personal Touch</h3>
              </div>
              <p className="text-gray-600">
              {siteConfig.nav_logo_name_small_devices} believe in creating a supportive and compassionate environment where every patient feels valued, heard, and empowered in their healthcare journey. Our personalized approach ensures that each individual&apos;s unique needs and concerns are addressed with thoroughness and sensitivity throughout the treatment and consulting process.
              </p>
            </div>
          </div>
        </div>
        <br></br>
      </section>

      
    </DefaultLayout>
  );
}
