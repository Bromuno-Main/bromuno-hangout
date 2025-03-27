import React, {useState} from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/Button";
import {StageProps} from "./Register";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export const Protect: React.FC<StageProps> = ({formData, handleChange, setStage, setFormData, handleClick}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {status, error} = useSelector((state: RootState) => state.auth);

    return (
        <section className="px-6  lg:px-24 w-full max-w-screen-sm py-10">
            <div className="pb-4 ">
                <h3 className="text-black">Protect your account</h3>
                <p className="text-medium">Create a strong password</p>
            </div>

            <div className="flex flex-col gap-4 py-4 ">
                <p>Create password</p>
                <span className="wire-pill w-full gap-3 items-center relative">
            <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="!bg-transparent focus:!bg-transparent focus:outline-none"
            />
            <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </span>
            </div>
            {/* Submit ==========>>>>>>>>> */}
            <span className="flex justify-between w-full items-center ">
          <Button
              onClick={(e) => {
                  e.preventDefault();
                  if (handleClick) {
                      handleClick();
                  }
              }}
              type="submit"
              variant={"ghost"}
              className="h-[39px] w-[131px] rounded-[32px] py-2 px-8 bg-[#FFCD83] text-black hover:text-[#FFCD83] hover:bg-black"
          >
            Proceed
          </Button>

          <p className="text-sm font-bold">
            Already have an account?{" "}
              <a href="/login" className="text-[#188268] cursor:pointer ">Log in</a>
          </p>
        </span>
            <div className={`w-full flex flex-row items-center justify-center`}>

                {error && <p className="text-red-500">{error}</p>}
            </div>
        </section>
    );
};
