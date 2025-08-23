import React from "react";
import { CONTACT_INFO } from "../constants";
import { PhoneIcon, MailIcon, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto border-b-2">
      <div className="my-20">
        <h1 className="text-center -tracking-tight text-xl">Contact US</h1>
        <p className="text-center -tracking-tighter mt-10 mb-10 text-2xl px-4">
          {CONTACT_INFO.text}
        </p>
        <div className="flex flex-col gap-5 px-4 lg:flex-row justify-around">
          <div className="flex items-center gap-3 ">
            <PhoneIcon />
            <div>
              <div className="flex flex-col">{CONTACT_INFO.phone.label}</div>

              <div className="flex flex-col">{CONTACT_INFO.phone.value}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
          <MapPin />
            <div>
              <div className="flex flex-col">{CONTACT_INFO.address.label}</div>

              <div className="flex flex-col">{CONTACT_INFO.address.value}</div>
            </div>
          </div>

          
          <div className="flex items-center gap-3 ">
          <MailIcon/>
            <div>
              <div className="flex flex-col">{CONTACT_INFO.email.label}</div>

              <div className="flex flex-col">{CONTACT_INFO.email.value}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
