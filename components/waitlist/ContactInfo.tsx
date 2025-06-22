"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";

export interface StageProps {
  formData: any;
  setCanMove: (stage: number, canMove: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setStage: (stage: number) => void;
  setFormData: (data: any) => void;
  handleClick?: () => void;
}

export function ContactInfo({ formData, setCanMove, handleChange, setStage, setFormData, handleClick }: StageProps) {
  const [isFormValid, setIsFormValid] = useState(false);  useEffect(() => {
    const isValid = formData.email && formData.phoneNumber;
    setIsFormValid(!!isValid);
    setCanMove(2, !!isValid);
  }, [formData]);

  return (
    <section className=" w-full mt-2 ">
      <div className="pb-4">
        <h1 className="text-black pb-2">Contact Information</h1>
        <p className="text-medium">How can we reach you?</p>
      </div>

      <div className="flex flex-col w-full py-4 gap-4">
        <div>
          <p className="text-sm ">Email Address</p>
          <span className="wire-pill w-full">
            <Input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email address"
              onChange={handleChange}
              className="focus:outline-none"
            />
          </span>
        </div>

        <div>
          <p className="text-sm  mt-2">Phone Number</p>
          <div className="flex gap-2 w-full items-center">
            <span className="wire-pill cursor-pointer">
              <select name="" id="">
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+234" selected>+234 (Nigeria)</option>
                <option value="+91">+91 (India)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+86">+86 (China)</option>
                <option value="+7">+7 (Russia)</option>
                <option value="+55">+55 (Brazil)</option>
                <option value="+27">+27 (South Africa)</option>
                <option value="+82">+82 (South Korea)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+46">+46 (Sweden)</option>
                <option value="+31">+31 (Netherlands)</option>
                <option value="+41">+41 (Switzerland)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+90">+90 (Turkey)</option>
                <option value="+62">+62 (Indonesia)</option>
                <option value="+63">+63 (Philippines)</option>
                <option value="+60">+60 (Malaysia)</option>
                <option value="+65">+65 (Singapore)</option>
                <option value="+64">+64 (New Zealand)</option>
                <option value="+20">+20 (Egypt)</option>
                <option value="+966">+966 (Saudi Arabia)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+92">+92 (Pakistan)</option>
                <option value="+880">+880 (Bangladesh)</option>
                <option value="+98">+98 (Iran)</option>
                <option value="+972">+972 (Israel)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+43">+43 (Austria)</option>
                <option value="+32">+32 (Belgium)</option>
                <option value="+45">+45 (Denmark)</option>
                <option value="+358">+358 (Finland)</option>
                <option value="+36">+36 (Hungary)</option>
                <option value="+353">+353 (Ireland)</option>
                <option value="+47">+47 (Norway)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+421">+421 (Slovakia)</option>
                <option value="+386">+386 (Slovenia)</option>
                <option value="+380">+380 (Ukraine)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+40">+40 (Romania)</option>
                <option value="+36">+36 (Hungary)</option>
                <option value="+30">+30 (Greece)</option>
                <option value="+386">+386 (Slovenia)</option>
                <option value="+48">+48 (Poland)</option>
                <option value="+372">+372 (Estonia)</option>
                <option value="+371">+371 (Latvia)</option>
                <option value="+370">+370 (Lithuania)</option>
                <option value="+994">+994 (Azerbaijan)</option>
                <option value="+374">+374 (Armenia)</option>
                <option value="+995">+995 (Georgia)</option>
                <option value="+373">+373 (Moldova)</option>
                <option value="+381">+381 (Serbia)</option>
                <option value="+382">+382 (Montenegro)</option>
                <option value="+383">+383 (Kosovo)</option>
                <option value="+389">+389 (North Macedonia)</option>
                <option value="+387">+387 (Bosnia & Herzegovina)</option>
                <option value="+375">+375 (Belarus)</option>
                <option value="+373">+373 (Moldova)</option>
                <option value="+994">+994 (Azerbaijan)</option>
                <option value="+380">+380 (Ukraine)</option>
                <option value="+84">+84 (Vietnam)</option>
                <option value="+66">+66 (Thailand)</option>
                <option value="+65">+65 (Singapore)</option>
                <option value="+60">+60 (Malaysia)</option>
                <option value="+62">+62 (Indonesia)</option>
                <option value="+63">+63 (Philippines)</option>
                <option value="+856">+856 (Laos)</option>
                <option value="+855">+855 (Cambodia)</option>
                <option value="+95">+95 (Myanmar)</option>
                <option value="+94">+94 (Sri Lanka)</option>
                <option value="+880">+880 (Bangladesh)</option>
                <option value="+92">+92 (Pakistan)</option>
                <option value="+977">+977 (Nepal)</option>
                <option value="+960">+960 (Maldives)</option>
                <option value="+93">+93 (Afghanistan)</option>
                <option value="+964">+964 (Iraq)</option>
                <option value="+962">+962 (Jordan)</option>
                <option value="+961">+961 (Lebanon)</option>
                <option value="+965">+965 (Kuwait)</option>
                <option value="+968">+968 (Oman)</option>
                <option value="+974">+974 (Qatar)</option>
                <option value="+973">+973 (Bahrain)</option>
                <option value="+20">+20 (Egypt)</option>
                <option value="+212">+212 (Morocco)</option>
                <option value="+213">+213 (Algeria)</option>
                <option value="+216">+216 (Tunisia)</option>
                <option value="+218">+218 (Libya)</option>
                <option value="+254">+254 (Kenya)</option>
                <option value="+255">+255 (Tanzania)</option>
                <option value="+256">+256 (Uganda)</option>
                <option value="+250">+250 (Rwanda)</option>
                <option value="+263">+263 (Zimbabwe)</option>
                <option value="+260">+260 (Zambia)</option>
                <option value="+258">+258 (Mozambique)</option>
                <option value="+27">+27 (South Africa)</option>
                <option value="+234">+234 (Nigeria)</option>
                <option value="+233">+233 (Ghana)</option>
                <option value="+225">+225 (Ivory Coast)</option>
                <option value="+221">+221 (Senegal)</option>
                <option value="+237">+237 (Cameroon)</option>
                <option value="+249">+249 (Sudan)</option>
                <option value="+251">+251 (Ethiopia)</option>
                <option value="+252">+252 (Somalia)</option>
                <option value="+253">+253 (Djibouti)</option>
                <option value="+254">+254 (Kenya)</option>
                <option value="+255">+255 (Tanzania)</option>
                <option value="+256">+256 (Uganda)</option>
                <option value="+257">+257 (Burundi)</option>
                <option value="+258">+258 (Mozambique)</option>
                <option value="+260">+260 (Zambia)</option>
                <option value="+261">+261 (Madagascar)</option>
                <option value="+262">+262 (Reunion)</option>
                <option value="+263">+263 (Zimbabwe)</option>
                <option value="+264">+264 (Namibia)</option>
                <option value="+265">+265 (Malawi)</option>
                <option value="+266">+266 (Lesotho)</option>
                <option value="+267">+267 (Botswana)</option>
                <option value="+268">+268 (Eswatini)</option>
                <option value="+269">+269 (Comoros)</option>
                <option value="+290">+290 (Saint Helena)</option>
                <option value="+291">+291 (Eritrea)</option>
                <option value="+297">+297 (Aruba)</option>
                <option value="+298">+298 (Faroe Islands)</option>
                <option value="+299">+299 (Greenland)</option>
                <option value="+350">+350 (Gibraltar)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+352">+352 (Luxembourg)</option>
                <option value="+353">+353 (Ireland)</option>
                <option value="+354">+354 (Iceland)</option>
                <option value="+355">+355 (Albania)</option>
                <option value="+356">+356 (Malta)</option>
                <option value="+357">+357 (Cyprus)</option>
                <option value="+358">+358 (Finland)</option>
                <option value="+359">+359 (Bulgaria)</option>
                <option value="+370">+370 (Lithuania)</option>
                <option value="+371">+371 (Latvia)</option>
                <option value="+372">+372 (Estonia)</option>
                <option value="+373">+373 (Moldova)</option>
                <option value="+374">+374 (Armenia)</option>
                <option value="+375">+375 (Belarus)</option>
                <option value="+376">+376 (Andorra)</option>
                <option value="+377">+377 (Monaco)</option>
                <option value="+378">+378 (San Marino)</option>
                <option value="+380">+380 (Ukraine)</option>
                <option value="+381">+381 (Serbia)</option>
                <option value="+382">+382 (Montenegro)</option>
                <option value="+383">+383 (Kosovo)</option>
                <option value="+385">+385 (Croatia)</option>
                <option value="+386">+386 (Slovenia)</option>
                <option value="+387">+387 (Bosnia & Herzegovina)</option>
                <option value="+389">+389 (North Macedonia)</option>
                <option value="+420">+420 (Czech Republic)</option>
                <option value="+421">+421 (Slovakia)</option>
                <option value="+423">+423 (Liechtenstein)</option>
              </select>
            </span>
            <span className="wire-pill w-full">
              <Input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Enter phone number"
                onChange={handleChange}
                className="focus:outline-none"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Submit */}
      <span className="flex justify-between w-full py-6 items-center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (handleClick) {
              handleClick();
            }
          }}
          type="submit"
          variant="default"
          className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          disabled={!isFormValid}
        >
          Submit
        </Button>
       
      </span>
    </section>
  );
}
