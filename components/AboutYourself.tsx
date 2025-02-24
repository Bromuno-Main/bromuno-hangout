import React, {useState, useRef, useEffect, useMemo} from 'react'
import SideBanner from './SideBanner';
import { useFormContext } from "../lib/hooks";
import { Controller } from 'react-hook-form';
import { Button, Select, SelectItem,Selection } from '@nextui-org/react';
import { businessSectors, nameTitle } from '../data';
import { Country } from 'country-state-city';



    

export default function AboutYourself() {

    const { 
        activeTab, 
        setActiveTab, 
        activeService, 
        setActiveService, 
        offer, 
        setOffer,
        industry, 
        setIndustry,
        country, 
        setCountry,
        business, 
        setBusiness,
        brief, 
        setBrief,
        work, 
        setWork,
        name,
        setName,
        phone, 
        setPhone,
        email, 
        setEmail,
        loading, 
        setLoading,
        projectFor,
        setProjectFor,
        onSubmit,
        prevClicked,
        handleSubmit,
        control,
        errors,
        title,
        setTitle,
        register

     } = useFormContext();


     // Memoized country options
    const countryOptions = useMemo(() =>
        Country.getAllCountries().map((country) => country.name).sort(),
        []
    );

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>(countryOptions);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Filter options based on search term
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        setCountry(term);

        const filtered = countryOptions.filter((option) =>
            option.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredOptions(filtered);
        setIsDropdownOpen(true);
    };

    // Handle option selection
    const handleSelect = (option: string) => {
        setSearchTerm(option);
        setCountry(option);
        setIsDropdownOpen(false);
        setFilteredOptions(countryOptions);
    };

     

  return (
    <div className={`flex flex-col p-2 lg:flex-row  lg:px-20 lg:py-20 min-h-[80vh] justify-center items-center gap-20 `}>

    
    <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col w-full lg:w-1/2 lg:py-10 px-4 gap-4 lg:max-w-[500px]`}>
        <div className='h-[144px] w-full rounded-[16px]'><SideBanner data={offer} /> </div>
        <h4>Tell us about yourself</h4>
        <div className="flex flex-col gap-2">
            <p className="text-base text-green-800">Your Name</p>
            <div className='flex flex-row gap-10 items-center w-full'>
                <div>
                    <Controller
                name="yourTitle"
                control={control}
                render={({ field }) => (
                        <Select
                            {...field}
                            isRequired
                            items={nameTitle}
                            placeholder="Title"
                            selectedKeys={title}
                            onSelectionChange={(keys) => setTitle(keys as Selection)}
                            labelPlacement="outside"
                            className={`select px-0 border-none w-[100px]`}
                            variant="bordered"
                        >

                            {(user) => (
                                <SelectItem key={user.id} textValue={user.sector}   >
                                    <div className="flex gap-2 w-[100px] items-center ">
                                        <div className="flex  flex-col gap-2 ">
                                            <span className="text-small">{user.sector}</span>
                                        </div>
                                    </div>
                                </SelectItem> 
                            )}
                        </Select>
                    )}
                />
                </div>
                <div className='w-full'>
                    <input
                    {...register('yourName')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="shadow-none w-full "
                    />
                    {errors.yourName && <span className="text-red-500">{errors.yourName.message?.toString()}</span>}
                </div>
                
            </div>
            
        </div>
        <div className="flex flex-col gap-2 ">
            <p className="text-base text-green-800"> What business are you into?
            </p>
            <Controller
                name="businessInto"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        isRequired
                        items={businessSectors}
                        placeholder="Select"
                        selectedKeys={business}
                        onSelectionChange={(keys) => setBusiness(keys as Selection)}
                        labelPlacement="outside"
                        className={`select px-0 border-none`}
                        variant="bordered"
                    >

                        {(user) => (
                            <SelectItem key={user.id} textValue={user.sector}   >
                                <div className="flex gap-2  items-center ">
                                    <div className="flex flex-col gap-2 ">
                                        <span className="text-small">{user.sector}</span>
                                    </div>
                                </div>
                            </SelectItem>
                        )}
                    </Select>
                )}
            />

        </div>

        <div className="flex flex-col gap-2">
            <p className="text-base text-green-800"> Where do you work? </p>

            <input
                {...register('yourWork')}
                value={work}
                onChange={(e) => setWork(e.target.value)}
                placeholder="Me"
                className="shadow-none "
            />
            {errors.yourWork && <span className="text-red-500">{errors.yourWork.message?.toString()}</span>}
        </div>
           
           {/* Country Dropdown */}
           <div className="flex flex-col gap-2">
                <p className="text-base text-green-800">Which is your country of residence?</p>
                <div className="w-full relative">
                    <input
                        {...register('yourCountry', {
                            required: 'Country is required',
                            validate: (value) => countryOptions.includes(value!) || 'Please select a valid country'
                        })}
                        type="text"
                        autoComplete='off'
                        placeholder="Select your country"
                        value={searchTerm}
                        onChange={handleSearch}
                        onFocus={() => setIsDropdownOpen(true)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {isDropdownOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-2xl max-h-40 overflow-y-auto z-40"
                        >
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => handleSelect(option)}
                                        className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                                    >
                                        {option}
                                    </div>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-gray-500">No options found</div>
                            )}
                        </div>
                    )}

                    {errors.yourCountry && <span className="text-red-500">{errors.yourCountry.message?.toString()}</span>}
                </div>
            </div>


        <div className={`flex gap-2 w-full justify-between items-center flex-row`}>
            <button onClick={() => prevClicked()} >Back</button>
            <Button type="submit" className="bg-green">Next</Button>
        </div>

    </form>

</div>
  )
}