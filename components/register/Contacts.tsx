import React from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/Button";
import {StageProps} from "./Register";

export const Contacts: React.FC<StageProps> = ({formData, handleChange, setStage, setFormData}) => {
    return (
        <section className="px-6 lg:px-24 w-full max-w-screen-sm py-10">
            <div className="pb-4 ">
                <h3 className="text-black pb-2 ">Contact details</h3>
                <p className="text-medium">
                    Please provide your contact info
                </p>
            </div>
            <div className="w-full flex gap-2 flex-col pb-4">
                <p>Phone Number</p>
                <div className="flex gap-2 w-full  items-center  ">
            <span className="wire-pill cursor-pointer">
              <select name="" id="">
                <option value="+234" selected>
                  +234
                </option>
              </select>
            </span>

                    <span className="wire-pill w-full ">
              <Input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="focus:outline-none"
              /></span>

                </div>
            </div>
            <div className="w-full flex gap-2 flex-col pb-4">

                <p>Email address</p>
                <span className='wire-pill w-full '>
            <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className=" w-3/5 focus:outline-none"
            /></span>
            </div>
            {/* Submit ==========>>>>>>>>> */}
            <span className="flex justify-between w-full py-6   items-center ">
          <Button
              onClick={(e) => {
                  e.preventDefault();
                  setStage(3);
              }}
              type="submit"
              variant={"ghost"}
              className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          >
            Proceed
          </Button>
          <span className="text-sm font-bold">
            Already have an account?{" "}
              <a href="/login" className="text-[#188268]  cursor:pointer"> Log in </a>
          </span>
        </span>
        </section>
    );
};
