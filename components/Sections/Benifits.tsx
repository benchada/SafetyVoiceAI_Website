import React from "react";
import EmblaCarousel from "../feature-carousel";
import { BarChart3, FileText, Globe2, Mic, ShieldCheck } from "lucide-react";

function Benifits() {
  const OPTIONS = { loop: true, align: "center" };

  const SvgIcon1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="60"
      viewBox="0 0 56 60"
      fill="none"
      className="w-16 h-16 object-contain"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M7.19705 35.416C6.70498 35.4176 6.22254 35.2799 5.80577 35.0187C5.389 34.7576 5.05502 34.3837 4.84262 33.9406C4.63021 33.4975 4.54811 33.0033 4.60586 32.5155C4.6636 32.0277 4.85882 31.5662 5.16882 31.1847L30.9117 4.70685C31.1048 4.48433 31.3679 4.33397 31.6579 4.28043C31.9479 4.2269 32.2475 4.27337 32.5076 4.41223C32.7676 4.55108 32.9726 4.77407 33.089 5.04459C33.2054 5.31511 33.2261 5.61708 33.1479 5.90095L28.1554 21.5281C28.0082 21.9214 27.9587 22.3445 28.0113 22.7611C28.0639 23.1777 28.2169 23.5754 28.4572 23.92C28.6976 24.2646 29.0181 24.5458 29.3912 24.7396C29.7644 24.9333 30.179 25.0339 30.5996 25.0325H48.8017C49.2937 25.0308 49.7762 25.1686 50.1929 25.4297C50.6097 25.6909 50.9437 26.0647 51.1561 26.5078C51.3685 26.9509 51.4506 27.4451 51.3929 27.933C51.3351 28.4208 51.1399 28.8823 50.8299 29.2638L25.087 55.7416C24.8939 55.9641 24.6308 56.1145 24.3408 56.168C24.0508 56.2216 23.7512 56.1751 23.4912 56.0362C23.2311 55.8974 23.0261 55.6744 22.9097 55.4039C22.7934 55.1333 22.7726 54.8314 22.8508 54.5475L27.8433 38.9204C27.9906 38.5271 28.04 38.1039 27.9874 37.6873C27.9348 37.2707 27.7818 36.8731 27.5415 36.5285C27.3011 36.1839 26.9806 35.9027 26.6075 35.7089C26.2343 35.5151 25.8197 35.4146 25.3991 35.416H7.19705Z"
        fill="#4685F0"
        stroke="#4685F0"
        strokeWidth="7.43952"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SvgIcon2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="78"
      viewBox="0 0 64 78"
      fill="none"
      className="w-16 h-16 object-contain"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M59.3652 42.6547C59.3652 59.8275 47.3932 68.414 33.1635 73.3941C32.4184 73.6476 31.609 73.6355 30.8717 73.3598C16.6078 68.414 4.63574 59.8275 4.63574 42.6547V18.6126C4.63574 17.7017 4.99613 16.8281 5.63761 16.184C6.2791 15.5399 7.14914 15.1781 8.05634 15.1781C14.8975 15.1781 23.449 11.0566 29.4008 5.83603C30.1255 5.21437 31.0474 4.8728 32.0005 4.8728C32.9536 4.8728 33.8755 5.21437 34.6001 5.83603C40.5862 11.0909 49.1035 15.1781 55.9446 15.1781C56.8518 15.1781 57.7219 15.5399 58.3634 16.184C59.0049 16.8281 59.3652 17.7017 59.3652 18.6126V42.6547Z"
        fill="#4685F0"
        stroke="#EDF3FE"
        strokeWidth="8.27084"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SvgIcon3 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="53"
      viewBox="0 0 54 53"
      fill="none"
      className="w-16 h-16 object-contain"
      aria-hidden="true"
      role="img"
    >
      <rect
        x="0.799805"
        y="0.0239258"
        width="52.4006"
        height="52.4006"
        rx="6.98674"
        fill="#4685F0"
      />
      <path
        d="M26.999 34.9585V45.8753"
        stroke="white"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.7354 30.5918V45.8753"
        stroke="white"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.4678 21.8594V45.8763"
        stroke="white"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SvgIcon4 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      className="w-16 h-16 object-contain"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M48.6067 7.20215H19.7864C18.0878 7.20215 16.4588 7.87691 15.2577 9.07799C14.0566 10.2791 13.3818 11.9081 13.3818 13.6067V64.8428C13.3818 66.5414 14.0566 68.1704 15.2577 69.3715C16.4588 70.5725 18.0878 71.2473 19.7864 71.2473H58.2134C59.912 71.2473 61.541 70.5725 62.7421 69.3715C63.9432 68.1704 64.618 66.5414 64.618 64.8428V23.2134L48.6067 7.20215Z"
        fill="#4685F0"
        stroke="#EDF3FE"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.4033 7.20215V20.0112C45.4033 21.7098 46.0781 23.3388 47.2792 24.5399C48.4802 25.7409 50.1093 26.4157 51.8078 26.4157H64.6169"
        stroke="#EDF3FE"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5949 29.6162H26.1904"
        stroke="#EDF3FE"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.8085 42.4268H26.1904"
        stroke="#EDF3FE"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.8085 55.2363H26.1904"
        stroke="#EDF3FE"
        strokeWidth="2.32891"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SLIDES = [
    {
      title: "Faster Incident Management",
      description:
        "Reduce response time with immediate incident reporting and management.",
      color: "#06b6d4",
      icon: SvgIcon1,
    },
    {
      title: "Enhanced Safety",
      description:
        "Time-saving features that reduce errors and enhance overall safety.",
      color: "#10B981",
      icon: SvgIcon2,
    },
    {
      title: "Enhanced Productivity",
      description:
        "Boost efficiency and productivity in the field with streamlined processes.",
      color: "#06a6f0",
      icon: SvgIcon3,
    },
    {
      title: "Streamlined Compliance",
      description:
        "Simplify documentation processes to meet regulatory requirements.",
      color: "#3B82F6",
      icon: SvgIcon4,
    },
  ];

  return (
    <section
      className="mx-auto overflow-hidden text-center lg:px-0 px-7 py-8 md:py-28 flex flex-col gap-[4px] lg:gap-[19px] bg-[#EDF3FE]"
      aria-labelledby="features-heading"
    >
      <h2
        id="features-heading"
        className="text-balance text-center text-sec-h1 font-semibold"
      >
        Key Benefits
      </h2>
      <p className="mt-3 text-[#5B5B5B] text-txt1 mb-6 lg:mb-20 font-medium">
        Our platform delivers tangible improvements to your safety operations.
      </p>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}

export default Benifits;
