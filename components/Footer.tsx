import type React from "react";
import iconfooter from "../media/footericon.png";
import Link from "next/link";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-footer-foreground/80 transition hover:text-footer-foreground"
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-footer bg-[#1F2937] text-white pt-5 pb-5">
      <div className="mx-auto px-4 2xl:max-w-[73%] max-w-[95%]">
        {/* Top strip with logo/title/tagline and socials */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <div className="flex lg:flex-row flex-col items-center gap-3 w-full sm:w-auto">
            <div className="flex items-start justify-start">
              <img
                src={iconfooter.src}
                alt="ENTROGX logo"
                className="h-8 sm:h-auto"
              />
            </div>

            <span
              className="hidden sm:block h-12 mx-3 w-1 bg-yellow-400"
              aria-hidden="true"
            />

            <div className="flex-1 flex items-center justify-center sm:justify-start">
              <span className="text-txt1 text-footer-foreground/80 text-center text-[20px] font-medium">
                Enhancing Safety Through Voice Powered Technology
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:mt-0 mt-4 sm:gap-5">
            {/* LinkedIn */}
            <SocialLink
              href="https://www.linkedin.com/company/entrogx/"
              label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="w-6 h-6 lg:w-10 lg:h-10"
                viewBox="0 0 41 41"
                fill="none"
              >
                <path
                  d="M36.4336 0.277344H4.43359C2.23359 0.277344 0.433594 2.07734 0.433594 4.27734V36.2773C0.433594 38.4773 2.23359 40.2773 4.43359 40.2773H36.4336C38.6336 40.2773 40.4336 38.4773 40.4336 36.2773V4.27734C40.4336 2.07734 38.6336 0.277344 36.4336 0.277344ZM12.4336 34.2773H6.43359V16.2773H12.4336V34.2773ZM9.43359 12.8773C7.43359 12.8773 5.83359 11.2773 5.83359 9.27734C5.83359 7.27734 7.43359 5.67734 9.43359 5.67734C11.4336 5.67734 13.0336 7.27734 13.0336 9.27734C13.0336 11.2773 11.4336 12.8773 9.43359 12.8773ZM34.4336 34.2773H28.4336V23.6773C28.4336 22.0774 27.0336 20.6773 25.4336 20.6773C23.8336 20.6773 22.4336 22.0774 22.4336 23.6773V34.2773H16.4336V16.2773H22.4336V18.6773C23.4336 17.0773 25.6336 15.8773 27.4336 15.8773C31.2336 15.8773 34.4336 19.0773 34.4336 22.8773V34.2773Z"
                  fill="white"
                />
              </svg>
            </SocialLink>

            {/* Instagram */}
            <SocialLink href="#" label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 41 41"
                className="w-6 h-6 lg:w-10 lg:h-10"
                fill="none"
              >
                <path
                  d="M30.6841 -0.223633H10.1838C4.52567 -0.223633 -0.0664062 4.36844 -0.0664062 10.0265V30.5269C-0.0664062 36.1849 4.52567 40.777 10.1838 40.777H30.6841C36.3422 40.777 40.9342 36.1849 40.9342 30.5269V10.0265C40.9342 4.36844 36.3422 -0.223633 30.6841 -0.223633ZM20.4339 30.5269C14.7758 30.5269 10.1838 25.9348 10.1838 20.2767C10.1838 14.6186 14.7758 10.0265 20.4339 10.0265C26.092 10.0265 30.6841 14.6186 30.6841 20.2767C30.6841 25.9348 26.092 30.5269 20.4339 30.5269ZM31.4016 11.2976C30.2741 11.2976 29.3516 10.375 29.3516 9.24752C29.3516 8.12 30.2741 7.19748 31.4016 7.19748C32.5291 7.19748 33.4516 8.12 33.4516 9.24752C33.4516 10.375 32.5291 11.2976 31.4016 11.2976Z"
                  fill="white"
                />
                <path
                  d="M20.4353 26.4271C23.8319 26.4271 26.5854 23.6737 26.5854 20.2771C26.5854 16.8804 23.8319 14.127 20.4353 14.127C17.0386 14.127 14.2852 16.8804 14.2852 20.2771C14.2852 23.6737 17.0386 26.4271 20.4353 26.4271Z"
                  fill="white"
                />
              </svg>
            </SocialLink>

            {/* Facebook */}
            <SocialLink href="#" label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 41 41"
                className="w-6 h-6 lg:w-10 lg:h-10"
                fill="none"
              >
                <path
                  d="M35.4336 0.277344H5.43359C2.67609 0.277344 0.433594 2.51984 0.433594 5.27734V35.2773C0.433594 38.0348 2.67609 40.2773 5.43359 40.2773H35.4336C38.1911 40.2773 40.4336 38.0348 40.4336 35.2773V5.27734C40.4336 2.51984 38.1911 0.277344 35.4336 0.277344Z"
                  fill="white"
                />
                <path
                  d="M34.1836 20.2773H27.9336V15.2773C27.9336 13.8973 29.0536 14.0273 30.4336 14.0273H32.9336V7.77734H27.9336C23.7911 7.77734 20.4336 11.1348 20.4336 15.2773V20.2773H15.4336V26.5273H20.4336V40.2773H27.9336V26.5273H31.6836L34.1836 20.2773Z"
                  fill="#1F2937"
                />
              </svg>
            </SocialLink>

            {/* YouTube */}
            <SocialLink href="#" label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="42"
                viewBox="0 0 61 43"
                className="w-6 h-6 lg:w-10 lg:h-10"
                fill="none"
              >
                <path
                  d="M58.9524 6.90645C58.2639 4.34672 56.2457 2.32892 53.6864 1.63967C49.0107 0.360352 30.3079 0.360352 30.3079 0.360352C30.3079 0.360352 11.6057 0.360352 6.93009 1.59116C4.41997 2.27969 2.35257 4.34709 1.66404 6.90645C0.433594 11.5817 0.433594 21.2776 0.433594 21.2776C0.433594 21.2776 0.433594 31.0223 1.66404 35.6487C2.3533 38.2081 4.37073 40.2259 6.93046 40.9151C11.655 42.1948 30.3086 42.1948 30.3086 42.1948C30.3086 42.1948 49.0107 42.1948 53.6864 40.964C56.2461 40.2751 58.2639 38.2573 58.9531 35.698C60.1832 31.0223 60.1832 21.3268 60.1832 21.3268C60.1832 21.3268 60.2325 11.5817 58.9524 6.90645ZM24.3533 30.235V12.3202L39.9056 21.2776L24.3533 30.235Z"
                  fill="white"
                />
              </svg>
            </SocialLink>

            {/* Twitter */}
            <SocialLink href="#" label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                className="w-6 h-6 lg:w-10 lg:h-10"
                height="40"
                viewBox="0 0 49 40"
                fill="none"
              >
                <path
                  d="M48.1836 5.39434C46.3986 6.17734 44.4966 6.69634 42.5136 6.94834C44.5536 5.73034 46.1106 3.81634 46.8426 1.50934C44.9406 2.64334 42.8406 3.44434 40.6026 3.89134C38.7966 1.96834 36.2226 0.777344 33.4146 0.777344C27.9666 0.777344 23.5806 5.19934 23.5806 10.6203C23.5806 11.4003 23.6466 12.1503 23.8086 12.8643C15.6276 12.4653 8.38859 8.54434 3.52559 2.57134C2.67659 4.04434 2.17859 5.73034 2.17859 7.54534C2.17859 10.9533 3.93359 13.9743 6.54959 15.7233C4.96859 15.6933 3.41759 15.2343 2.10359 14.5113C2.10359 14.5413 2.10359 14.5803 2.10359 14.6193C2.10359 19.4013 5.51459 23.3733 9.98759 24.2883C9.18659 24.5073 8.31359 24.6123 7.40759 24.6123C6.77759 24.6123 6.14159 24.5763 5.54459 24.4443C6.81959 28.3413 10.4376 31.2063 14.7396 31.2993C11.3916 33.9183 7.14059 35.4963 2.53859 35.4963C1.73159 35.4963 0.957594 35.4603 0.183594 35.3613C4.54259 38.1723 9.70859 39.7773 15.2796 39.7773C33.3876 39.7773 43.2876 24.7773 43.2876 11.7753C43.2876 11.3403 43.2726 10.9203 43.2516 10.5033C45.2046 9.11734 46.8456 7.38634 48.1836 5.39434Z"
                  fill="white"
                />
              </svg>
            </SocialLink>
          </div>
        </div>

        <hr className="opacity-[60%] mt-6 sm:mt-5 lg:block hidden" />

        {/* Bottom legal row */}
        <div className="flex flex-col items-center justify-between gap-3 py-2 lg:py-6 text-sm sm:flex-row sm:items-center">
          <div className="text-white/60 font-medium text-[10px] lg:text-[18px] text-center sm:text-left lg:order-0 order-2">
            <hr className="opacity-[60%] my-4 lg:hidden block" /> © 2025
            ENTROGX. All Rights Reserved.
          </div>

          <nav className="flex lg:flex-row flex-col w-full justify-center flex-wrap items-center gap-x-12 gap-y-3 text-[18px] sm:w-auto sm:justify-start">
            <Link href="/terms" className="hover:text-footer-foreground">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-footer-foreground">
              Compliance &amp; Security
            </Link>
            <Link href="/privacy" className="hover:text-footer-foreground">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
