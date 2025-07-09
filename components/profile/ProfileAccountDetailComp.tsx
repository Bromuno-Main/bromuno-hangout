"use client"
import React from 'react'

function ProfileAccountDetailComp() {
  const [formData, setFormData] = React.useState({
    intro: '',
    username: '',
    fullname: '',
    dob: '',
    address: '',
    state: '',
    city: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    // You can access form data here, e.g.:
    // const formData = new FormData(e.currentTarget);
    // const intro = formData.get('intro');
    // ...submit logic
    alert(formData.intro);
    setFormData(
      {
    intro: '',
    username: '',
    fullname: '',
    dob: '',
    address: '',
    state: '',
    city: '',
  }
    )
  };
  return (
    <div className='w-full h-full flex flex-col items-center justify-start'>
      <header className='w-full h-[63px] border-b py-4 px-[31px] flex items-center justify-start gap-3'>
        <p className='text-sm font-bold'>Account Details</p>
        <button onClick={handleSubmit} className='text-xs py-1 px-3 bg-gray-200 hover:bg-gray-300 text-gray-500 font-semibold'>Save</button>
      </header>
      <form  className="p-8 flex flex-col gap-6 max-w-xl w-full">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="intro">Intro</label>
          

          <textarea
          onChange={handleInputChange}
          value={formData.intro}
            id="intro"
            name="intro"
            className="w-full border rounded px-3 py-2"
            rows={3}
            placeholder="Tell us about yourself"
          />
          
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
          <div className='border rounded-lg w-full'>

          <input
            onChange={handleInputChange}
            value={formData.username}
            id="username"
            name="username"
            type="text"
            className="w-full border h-[36px] rounded px-3 text-xs py-2"
            placeholder="@username"
          />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="fullname">Full Name</label>
          <div className='border rounded-lg w-full'>

          <input
            onChange={handleInputChange}
            value={formData.fullname}
            id="fullname"
            name="fullname"
            type="text"
            className="w-full border h-[36px] rounded px-3 text-xs py-2"
            placeholder="Enter your full name"
          />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="dob">Date of Birth</label>
          <div className='border rounded-lg w-full'>

          <input
            onChange={handleInputChange}
            value={formData.dob}
            id="dob"
            name="dob"
            type="date"
            className="w-full border h-[36px] rounded px-3 text-xs py-2"
          />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
          <div className='border rounded-lg w-full'>

          <input
            onChange={handleInputChange}
            value={formData.address}
            id="address"
            name="address"
            type="text"
            className="w-full border h-[36px] rounded px-3 text-xs py-2"
            placeholder="Enter your address"
          />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="state">State</label>
          <div className='border rounded-lg w-full'>

          <input
            onChange={handleInputChange}
            value={formData.state}
            id="state"
            name="state"
            type="text"
            className="w-full border h-[36px] rounded px-3 text-xs py-2"
            placeholder="Enter your State"
          />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>
          <div className='border rounded-lg w-full'>

          <input
            onChange={handleInputChange}
            value={formData.city}
            id="city"
            name="city"
            type="text"
            className="w-full border h-[36px] rounded px-3 text-xs py-2"
            placeholder="Enter your City"
          />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProfileAccountDetailComp