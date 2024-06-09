import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import { Divider } from "@nextui-org/react";
import { FaGoogle, FaYoutube } from 'react-icons/fa';

export default function BlogPage() {
  const blogPosts = [
    {
      category: "Nutrition",
      title: "Healthy Eating During Pregnancy",
      image: "/healthy_eating.jpg",
      link: "/posts/healthy-eating-during-pregnancy",
    },
    {
      category: "Reproductive Health",
      title: "Choosing the Right Contraception Method",
      image: "/contraception-pill.jpg",
      link: "/posts/choosing-the-right-contraception-method",
    },
    {
      category: "Mental Health",
      title: "Managing Stress and Anxiety During Pregnancy",
      image: "/woman_meditating.jpg",
      link: "/posts/managing-stress-and-anxiety-during-pregnancy",
    },
  ];

  const blogPostsSection2 = [
    {
      category: "Parenting",
      title: "Preparing for Parenthood During Pregnancy",
      image: "/family.jpg",
      link: "/posts/preparing-for-parenthood",
    },
    {
      category: "Wellness",
      title: "Postpartum Care Tips Post Pregnancy",
      image: "/postpartum_care.jpg",
      link: "/posts/postpartum-care-tips",
    },
    {
      category: "Nutrition",
      title: "Best Foods for Breastfeeding For Baby",
      image: "/baby_drinking_milk.jpg",
      link: "/posts/best-foods-for-breastfeeding",
    },
  ];

  const blogPostsSection3 = [
    {
      category: "Exercise",
      title: "Yoga Execises for Pregnant Women",
      image: "/woman_yoga_exercise.jpg",
      link: "/posts/yoga-for-pregnant-women",
    },
    {
      category: "Mental Health",
      title: "Coping with Anxiety during Pregnancy Period",
      image: "/pregnancy_picture-5.jpg",
      link: "/posts/coping-with-pregnancy-anxiety",
    },
    {
      category: "Health",
      title: "Important Prenatal Tests for Pregnancy",
      image: "/woman_prenatal.jpg",
      link: "/posts/important-prenatal-tests",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pt-8 md:pt-10">
        <div className="inline-block max-w-lg text-center">
          <h2 className="text-3xl font-bold text-pink-500 max-w-4xl text-center">
            Blog about Pregnancy and Women&apos;s Health
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase">{post.category}</h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-2">{post.title}</h2>
                <Link
                  className="mt-4 inline-block px-4 py-2 bg-pink-500 text-white text-sm rounded-full"
                  href={post.link}
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 pb-2">
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {blogPostsSection2.map((post, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase">{post.category}</h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-2">{post.title}</h2>
                <Link
                  className="mt-4 inline-block px-4 py-2 bg-pink-500 text-white text-sm rounded-full"
                  href={post.link}
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 pb-8">
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {blogPostsSection3.map((post, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase">{post.category}</h3>
                <h2 className="text-lg font-semibold text-gray-900 mt-2">{post.title}</h2>
                <Link
                  className="mt-4 inline-block px-4 py-2 bg-pink-500 text-white text-sm rounded-full"
                  href={post.link}
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <br />
      <Divider className="my-4" />


      <section className="flex flex-col items-center justify-center gap-4 py-8">
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">For More Articles and Knowledge</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://www.google.com/search?q=Pregnancy+women+wellness+articles*&safe=active&sca_esv=b6848266329b4871&rlz=1C1GCEB_enIN1019IN1019&ei=GQtmZpKxMKzDvr0P0oq20A8&ved=0ahUKEwjSoYn3qM-GAxWsoa8BHVKFDfoQ4dUDCBA&uact=5&oq=Pregnancy+women+wellness+articles*&gs_lp=Egxnd3Mtd2l6LXNlcnAiIlByZWduYW5jeSB3b21lbiB3ZWxsbmVzcyBhcnRpY2xlcypI1yxQ1QdY7ilwAXgBkAEAmAHsAaAB2xWqAQYwLjEwLjW4AQPIAQD4AQGYAgagAs4HwgIKEAAYsAMY1gQYR8ICCBAAGAcYCBgewgIGEAAYDRgewgIIEAAYBRgNGB7CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEwgIIEAAYogQYiQWYAwCIBgGQBgiSBwUxLjMuMqAHyUU&sclient=gws-wiz-serp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600"
        >
          <FaGoogle className="w-5 h-5 mr-2" />
          Google
        </a>
        <a
          href="https://www.google.com/search?q=site%3Ayoutube.com+Pregnancy+women+wellness++videos&safe=active&sca_esv=b6848266329b4871&rlz=1C1GCEB_enIN1019IN1019&ei=YQtmZvKVLcjk1e8P8fuvkAE&ved=0ahUKEwiyyrCZqc-GAxVIcvUHHfH9CxIQ4dUDCBA&uact=5&oq=site%3Ayoutube.com+Pregnancy+women+wellness++videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiMXNpdGU6eW91dHViZS5jb20gUHJlZ25hbmN5IHdvbWVuIHdlbGxuZXNzICB2aWRlb3NIspcBUPkEWP2PAXABeAGQAQCYAcsBoAGDEKoBBjAuMTAuMrgBA8gBAPgBAvgBAZgCAaACCMICChAAGLADGNYEGEeYAwCIBgGQBgiSBwExoAecBA&sclient=gws-wiz-serp#ip=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white text-sm rounded-full hover:bg-red-600"
        >
          <FaYoutube className="w-5 h-5 mr-2" />
          YouTube
        </a>
      </div>
    </section>

    </DefaultLayout>
  );
}
