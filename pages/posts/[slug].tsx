import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/default";

const blogPosts = [
  {
    category: "Nutrition",
    title: "Healthy Eating During Pregnancy",
    image: "/healthy_eating.jpg",
    link: "healthy-eating-during-pregnancy",
    content: (
        <div>
          <p>Maintaining a balanced and nutritious diet during pregnancy is crucial for both the mother&apos;s health and the baby&apos;s development. During this period, the body requires additional nutrients to support the growth and well-being of the fetus.</p><br></br>
          <p>Incorporating a variety of fruits, vegetables, whole grains, lean proteins, and dairy products into your meals can ensure that you&apos;re getting essential vitamins and minerals. Staying hydrated is equally important, so aim to drink plenty of water throughout the day.</p><br></br>
          <p>It&apos;s also advisable to limit consumption of caffeine, processed foods, and foods high in sugar or saturated fats. By making healthy food choices, you can promote a healthy pregnancy and set the stage for your baby&apos;s lifelong well-being.</p><br></br>
          <p>Additionally, eating well during pregnancy can help prevent common complications such as gestational diabetes and pre-eclampsia. Some key nutrients to focus on include folic acid, iron, calcium, and omega-3 fatty acids.</p><br></br>
          <p>While it&apos;s normal to experience cravings during pregnancy, try to balance indulgences with nutrient-rich options to ensure you&apos;re meeting your dietary needs. Another important aspect of healthy eating during pregnancy is food safety.</p><br></br>
          <p>Avoid consuming raw or undercooked meats, seafood, eggs, and unpasteurized dairy products, as they may harbor harmful bacteria. It&apos;s also wise to wash fruits and vegetables thoroughly before eating them to remove any potential contaminants.</p><br></br>
          <p>If you have any dietary restrictions or concerns, consult with a registered dietitian or healthcare provider for personalized guidance. Remember that every woman&apos;s nutritional needs are unique, so it&apos;s essential to listen to your body and prioritize your health and the health of your baby.</p><br></br>
          <p>In addition to focusing on what you eat, how you eat is also important during pregnancy. Aim to eat regular, balanced meals and snacks throughout the day to maintain steady energy levels and stabilize blood sugar. Eating small, frequent meals can help alleviate common pregnancy symptoms such as nausea and heartburn.</p><br></br>
          <p>If you experience morning sickness, try eating bland, easily digestible foods such as crackers or toast before getting out of bed in the morning. Lastly, don&apos;t forget to take prenatal vitamins as recommended by your healthcare provider to fill any nutritional gaps in your diet.</p><br></br>
          <p>Overall, healthy eating during pregnancy is essential for both maternal and fetal health. By prioritizing nutrient-rich foods, staying hydrated, practicing food safety, and listening to your body&apos;s hunger and fullness cues, you can support a healthy pregnancy and set the stage for your baby&apos;s optimal development and future well-being.</p><br></br>
        </div>
      )
},
  {
    category: "Reproductive Health",
    title: "Choosing the Right Contraception Method",
    image: "/contraception-pill.jpg",
    link: "choosing-the-right-contraception-method",
    content: (
        <div>
      <p>Choosing the right contraception method is an important decision for individuals who wish to prevent pregnancy. With various options available, it&apos;s essential to consider factors such as effectiveness, convenience, health considerations, and personal preferences.</p><br></br>
      <p>One common contraception method is the birth control pill, which is taken orally and contains hormones to prevent ovulation. Other hormonal options include the contraceptive patch, vaginal ring, and injection, each offering different levels of effectiveness and convenience.</p><br></br>
      <p>For those who prefer non-hormonal options, barrier methods such as condoms, diaphragms, and cervical caps can be effective in preventing pregnancy. These methods create a physical barrier that prevents sperm from reaching the egg.</p><br></br>
      <p>Long-acting reversible contraception (LARC) methods, such as intrauterine devices (IUDs) and contraceptive implants, offer highly effective and convenient options for preventing pregnancy. These methods provide protection for several years without requiring daily or monthly maintenance.</p><br></br>
      <p>When choosing a contraception method, it&apos;s important to consider individual health factors and potential side effects. Some individuals may have contraindications to certain methods or may experience side effects such as weight gain, mood changes, or irregular bleeding.</p><br></br>
      <p>Additionally, discussing contraception options with a healthcare provider can provide valuable guidance and support in selecting the most suitable method. They can assess individual health considerations, provide information about each method&apos;s effectiveness and side effects, and address any questions or concerns.</p><br></br>
      <p>Ultimately, the right contraception method is one that aligns with individual preferences, lifestyle, and health needs. By exploring available options and consulting with a healthcare provider, individuals can make informed decisions to protect their reproductive health and prevent unintended pregnancy.</p><br></br>
    </div>
      )
},
  {
    category: "Mental Health",
    title: "Managing Stress and Anxiety During Pregnancy",
    image: "/woman_meditating.jpg",
    link: "managing-stress-and-anxiety-during-pregnancy",
    content: (
        <div>
          <p>Pregnancy is a time of profound physical and emotional changes, and it&apos;s natural to experience stress and anxiety during this period. However, prolonged or excessive stress can have negative effects on both the mother and the baby. Therefore, it&apos;s essential to develop healthy coping mechanisms to manage stress and anxiety effectively.</p><br></br>
          <p>One strategy is practicing relaxation techniques such as deep breathing, meditation, and mindfulness exercises. These techniques can help calm the mind, reduce muscle tension, and promote a sense of inner peace. Additionally, maintaining a support network of friends, family members, and healthcare providers can provide valuable emotional support during pregnancy.</p><br></br>
          <p>Talking openly about your feelings and concerns with trusted individuals can help alleviate stress and anxiety. It&apos;s also important to prioritize self-care activities that promote mental well-being, such as getting enough sleep, eating nutritious foods, and engaging in activities you enjoy.</p><br></br>
          <p>If stress and anxiety become overwhelming or interfere with daily functioning, don&apos;t hesitate to seek professional help. A mental health professional, such as a therapist or counselor, can provide therapeutic interventions and support tailored to your individual needs. They can teach coping skills, provide psychoeducation about pregnancy-related stressors, and offer a safe space to explore emotions.</p><br></br>
          <p>Remember that taking care of your mental health during pregnancy is essential for your overall well-being and the health of your baby. By proactively managing stress and anxiety, you can cultivate a positive mindset and enjoy a more relaxed and fulfilling pregnancy experience. Don&apos;t hesitate to reach out for support if you need it; you&apos;re not alone on this journey.</p><br></br>
        </div>
      )
},
  {
    category: "Parenting",
    title: "Preparing for Parenthood During Pregnancy",
    image: "/family.jpg",
    link: "preparing-for-parenthood",
    content: (
        <div>
          <p>Preparing for parenthood begins long before the baby arrives, and pregnancy is an ideal time to start planning and preparing. One essential aspect of preparing for parenthood is educating yourself about pregnancy, childbirth, and newborn care. Attend prenatal classes, read books, and seek advice from healthcare providers to gain knowledge and confidence in your parenting journey.</p><br></br>
          <p>Another crucial aspect of preparing for parenthood is creating a supportive environment for the baby. This includes setting up a nursery, gathering essential baby items such as clothing, diapers, and feeding supplies, and making any necessary home adjustments to ensure safety and comfort for the baby.</p><br></br>
          <p>Preparing for parenthood also involves emotional and psychological readiness. Take time to discuss your hopes, fears, and expectations with your partner and other family members. Addressing any concerns or uncertainties together can strengthen your bond as a family and help you feel more prepared for the challenges and joys of parenthood.</p><br></br>
          <p>Additionally, consider how parenthood will impact your lifestyle and make any necessary adjustments. This may include changes to your work schedule, budgeting for childcare expenses, and making time for self-care and relaxation. Remember that parenthood is a lifelong journey, and it&apos;s okay to feel a mix of excitement and apprehension as you prepare for this new chapter.</p><br></br>
          <p>In conclusion, preparing for parenthood during pregnancy involves a combination of practical, emotional, and psychological preparations. By gaining knowledge, creating a supportive environment, addressing emotional concerns, and making lifestyle adjustments, you can lay the foundation for a smooth transition into parenthood. Embrace the journey with openness and optimism, knowing that you have the love and support of your growing family.</p><br></br>
        </div>
      )
},
  {
    category: "Wellness",
    title: "Postpartum Care Tips Post Pregnancy",
    image: "/postpartum_care.jpg",
    link: "postpartum-care-tips",
    content: (
        <div>
          <p>The postpartum period, also known as the fourth trimester, is a time of physical and emotional adjustment for new mothers. Taking care of yourself during this period is essential for your recovery and well-being. One important aspect of postpartum care is rest and relaxation. Your body needs time to heal after childbirth, so prioritize rest whenever possible.</p><br></br>
          <p>Accept help from friends and family members, and don&apos;t hesitate to delegate household tasks to lighten your workload. Another key aspect of postpartum care is nutrition. Eating a well-balanced diet rich in nutrients can support your recovery and provide energy for breastfeeding.</p><br></br>
          <p>Focus on nourishing foods such as fruits, vegetables, lean proteins, whole grains, and healthy fats. Stay hydrated by drinking plenty of water throughout the day, especially if you&apos;re breastfeeding. In addition to physical care, don&apos;t neglect your emotional well-being during the postpartum period.</p><br></br>
          <p>It&apos;s common for new mothers to experience a range of emotions, including joy, sadness, anxiety, and overwhelm. Reach out to your support network for emotional support, and consider joining a new mothers&apos; group or seeking professional help if you&apos;re struggling.</p><br></br>
          <p>Prioritize self-care activities that help you relax and recharge, such as taking a warm bath, practicing gentle yoga, or going for a short walk outside. Remember that self-care looks different for every mother, so find activities that resonate with you and make you feel nurtured and rejuvenated.</p><br></br>
          <p>Lastly, don&apos;t hesitate to seek medical attention if you experience any concerning symptoms during the postpartum period, such as excessive bleeding, severe pain, or signs of infection. Your healthcare provider is there to support you and ensure that you receive the care you need as you navigate the early days of motherhood.</p><br></br>
        </div>
      )
},
  {
    category: "Nutrition",
    title: "Best Foods for Breastfeeding For Baby",
    image: "/baby_drinking_milk.jpg",
    link: "best-foods-for-breastfeeding",
    content: (
        <div>
          <p>Breastfeeding is a wonderful way to nourish and bond with your baby, and providing your body with the right nutrients is essential for successful breastfeeding. Certain foods can support milk production, enhance the quality of breast milk, and provide essential nutrients for both you and your baby.</p><br></br>
          <p>One of the best foods for breastfeeding is oatmeal, which is rich in fiber and may help boost milk supply. Other lactation-boosting foods include leafy greens, such as spinach and kale, which are high in iron and calcium.</p><br></br>
          <p>Lean proteins, such as chicken, fish, and tofu, provide essential amino acids for both you and your baby&apos;s growth and development. Fatty fish, such as salmon and sardines, are rich in omega-3 fatty acids, which are important for brain development and may help reduce the risk of postpartum depression.</p><br></br>
          <p>In addition to incorporating lactation-boosting foods into your diet, it&apos;s important to stay hydrated by drinking plenty of water throughout the day. Aim to consume at least 8-10 glasses of water daily to support milk production and prevent dehydration.</p><br></br>
          <p>Limiting caffeine and alcohol intake is also advisable, as these substances can pass into breast milk and affect your baby&apos;s sleep and development. If you have any dietary restrictions or concerns, consult with a registered dietitian or lactation consultant for personalized guidance.</p><br></br>
          <p>Every mother&apos;s breastfeeding journey is unique, so it&apos;s essential to listen to your body and adjust your diet as needed. Remember that providing nourishing breast milk for your baby is a beautiful and natural process, and taking care of yourself is key to ensuring a successful breastfeeding experience.</p><br></br>
          <p>In conclusion, choosing the best foods for breastfeeding is an important aspect of postpartum nutrition. By incorporating lactation-boosting foods, staying hydrated, and seeking guidance from healthcare professionals when needed, you can support your breastfeeding journey and provide your baby with the nutrition they need for healthy growth and development.</p><br></br>
        </div>
      )
},
  {
    category: "Exercise",
    title: "Yoga Execises for Pregnant Women",
    image: "/woman_yoga_exercise.jpg",
    link: "yoga-for-pregnant-women",
    content:(
        <div>
          <p>Yoga is a gentle and effective form of exercise that can provide numerous benefits for pregnant women. Prenatal yoga focuses on poses and breathing techniques that are safe and beneficial during pregnancy, helping to alleviate common discomforts and prepare the body for childbirth.</p><br></br>
          <p>One of the primary benefits of prenatal yoga is improved flexibility and strength, which can help ease the physical strain of pregnancy and promote better posture and alignment. In addition to physical benefits, prenatal yoga also offers mental and emotional support during pregnancy.</p><br></br>
          <p>The practice encourages relaxation, stress reduction, and mindfulness, which can be especially valuable as you navigate the changes and challenges of pregnancy. Many prenatal yoga classes incorporate meditation and visualization exercises to promote a sense of calm and connection with your baby.</p><br></br>
          <p>Before starting a prenatal yoga practice, it&apos;s essential to consult with your healthcare provider to ensure it&apos;s safe for you and your baby. Once you have the green light, look for a qualified prenatal yoga instructor who has experience working with pregnant women.</p><br></br>
          <p>They can provide guidance on modifications and adaptations to accommodate your changing body and address any specific concerns or limitations you may have. During prenatal yoga classes, listen to your body and honor its needs. Avoid poses that feel uncomfortable or put pressure on your abdomen, and focus on gentle stretching and strengthening movements.</p><br></br>
          <p>Remember that prenatal yoga is not about pushing yourself to your limits but rather about tuning into your body and connecting with your baby. As you progress through your pregnancy, you may need to modify your yoga practice to accommodate your growing belly and changing energy levels.</p><br></br>
          <p>Be flexible and adjust your practice as needed, focusing on relaxation and self-care above all. By incorporating prenatal yoga into your routine, you can support your physical and emotional well-being and prepare for a positive birth experience.</p><br></br>
        </div>
      )
},
  {
    category: "Mental Health",
    title: "Coping with Anxiety during Pregnancy Period",
    image: "/pregnancy_picture-5.jpg",
    link: "coping-with-pregnancy-anxiety",
    content: (
        <div>
          <p>Anxiety is a common experience during pregnancy, affecting many expectant mothers to varying degrees. While it&apos;s normal to feel anxious from time to time, excessive worry and fear can have a significant impact on your well-being and may affect your pregnancy.</p><br></br>
          <p>Coping with anxiety during pregnancy involves adopting strategies to manage your symptoms and promote emotional balance. One effective coping strategy is practicing relaxation techniques such as deep breathing, progressive muscle relaxation, and guided imagery. These techniques can help calm the mind and body, reducing the physical symptoms of anxiety such as rapid heartbeat and shallow breathing.</p><br></br>
          <p>Incorporating relaxation exercises into your daily routine can provide relief from stress and promote a sense of calm. It&apos;s also important to address the underlying causes of anxiety and identify any triggers that contribute to your symptoms.</p><br></br>
          <p>Keeping a journal can help you track your thoughts and emotions, allowing you to identify patterns and gain insight into your anxiety triggers. Talking to a trusted friend, family member, or mental health professional can also provide support and perspective as you navigate your feelings.</p><br></br>
          <p>In addition to relaxation techniques and self-reflection, practicing self-care activities can help alleviate anxiety during pregnancy. Engage in activities that bring you joy and relaxation, such as spending time in nature, practicing yoga or meditation, or indulging in a favorite hobby.</p><br></br>
          <p>Taking care of your physical health by eating nutritious foods, getting regular exercise, and prioritizing sleep can also support your mental well-being. If anxiety becomes overwhelming or interferes with your daily functioning, don&apos;t hesitate to seek professional help.</p><br></br>
          <p>A mental health provider, such as a therapist or counselor, can offer therapeutic interventions such as cognitive-behavioral therapy (CBT) or mindfulness-based stress reduction (MBSR) to help you manage your anxiety symptoms. Remember that you&apos;re not alone, and there are resources and support available to help you cope with anxiety and enjoy a healthy pregnancy.</p><br></br>
        </div>
      )
},
  {
    category: "Health",
    title: "Important Prenatal Tests for Pregnancy",
    image: "/woman_prenatal.jpg",
    link: "important-prenatal-tests",
    content: (
        <div>
          <p>Prenatal testing plays a crucial role in monitoring the health and development of both the mother and the baby during pregnancy. These tests can help identify any potential complications or concerns early on, allowing for timely intervention and treatment. Understanding the importance of prenatal tests and undergoing them as recommended by your healthcare provider is essential for ensuring a healthy pregnancy and positive birth outcome.</p><br></br>
          <p>One of the most common prenatal tests is the ultrasound, which uses sound waves to create images of the baby&apos;s development in the womb. Ultrasound scans can provide valuable information about fetal growth, anatomy, and position, as well as detect any abnormalities or congenital anomalies. They are typically performed at different stages of pregnancy to monitor progress and assess the baby&apos;s well-being.</p><br></br>
          <p>Another important prenatal test is the prenatal screening and diagnostic tests for genetic disorders and chromosomal abnormalities. These tests, such as the first-trimester screening and amniocentesis, can assess the risk of conditions such as Down syndrome, trisomy 18, and neural tube defects. While these tests are optional, they can provide valuable information about the baby&apos;s health and help parents make informed decisions about their pregnancy.</p><br></br>
          <p>In addition to ultrasound and genetic screening tests, other prenatal tests may be recommended based on individual risk factors and medical history. These may include blood tests to check for conditions such as gestational diabetes and infections, as well as non-stress tests and biophysical profiles to assess fetal well-being later in pregnancy.</p><br></br>
          <p>It&apos;s essential to discuss prenatal testing options with your healthcare provider and ask any questions you may have to ensure you understand the purpose, benefits, and potential risks of each test. By staying informed and actively participating in your prenatal care, you can empower yourself to make the best decisions for your health and the health of your baby throughout pregnancy.</p><br></br>
        </div>
      )
},
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogPosts.find(post => post.link === slug);

  if (!post) {
    return (
      <DefaultLayout>
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-2xl font-bold">Post Not Found</h1>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
          <h2 className="text-3xl font-bold text-pink-500 mt-6">{post.title}</h2>
          <h3 className="text-xl text-gray-500 mt-2">{post.category}</h3>
          <p className="mt-4 text-gray-700">{post.content}</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
