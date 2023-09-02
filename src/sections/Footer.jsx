import { footerLogo } from "../../public/assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../../public/assets/icons";

const Footer = () => {
  return (
    <>
      <section className="flex gap-24 max-container max-lg:flex-col text-white justify-between">
        <div>
          <img src={footerLogo} alt="#" width="150" height="46" />
          <p className="mt-6 max-lg:max-w-lg lg:max-w-sm font-montserrat text-base leading-7 text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-5 mt-8">
            {socialMedia.map((item) => (
              <div
                key={item.src}
                className=" inline-flex bg-white rounded-full w-12 h-12 items-center justify-center"
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex lg:gap-24 max-lg:justify-between flex-wrap max-sm:gap-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray flex-wrap ">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-between text-white-400 mt-[120px] max-sm:flex-col max-sm:gap-4 max-sm:items-center ">
        <div className="flex items-center gap-2">
          <img src={copyrightSign} alt="" />
          <p className="font-montserrat "> Copyright. All rights reserved.</p>
        </div>
        <a href="#">Terms & Conditions</a>
      </section>
    </>
  );
};

export default Footer;
