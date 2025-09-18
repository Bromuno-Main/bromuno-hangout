"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/Button';
import axios from 'axios';
import axiosInstance from '../../../utils/axiosInstance';
import { JobInterface } from '../../../types/Jobs';



export default function Jobs() {
  const [jobListings, setJobListings] = useState<JobInterface[]>([]);

  // fetch jobs
  //erooroo
  useEffect(() => {

    const getJobs = async () => {
      try {
        const res = await axiosInstance.get("/jobs")
        console.log(res.data)
        setJobListings(res.data)
      } catch (error) {
        console.log("Error gettting jobs:: ", error)
      }
    }

    getJobs()

  }, [])


  // const jobListings = [
  //   {
  //     title: "Senior Frontend Developer",
  //     company: "TechCorp",
  //     location: "Remote",
  //     type: "Full-time",
  //     salary: "$100k - $150k",
  //     description: "We're looking for an experienced frontend developer...",
  //     logo: "/company1.svg"
  //   },
  //   {
  //     title: "Backend Engineer",
  //     company: "DataSystems",
  //     location: "Hybrid",
  //     type: "Full-time",
  //     salary: "$90k - $130k",
  //     description: "Join our backend team to build scalable systems...",
  //     logo: "/company2.svg"
  //   }
  // ];


  return (
    <div className="w-full h-full gap-4 p-6 flex flex-col">
      {/* Header Section */}
      <div className="flex gap-3 items-center justify-between">
        <div className="flex gap-3 items-center">
          <p className="text-lg font-bold text-[#188268] border-b-[2px] border-b-[#188268]">
            Latest
          </p>
          <p className="text-lg font-bold">Jobs</p>
        </div>
        <Button className="bg-[#188268] text-white hover:bg-[#156B55]">
          Post a Job
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search jobs..."
          className="flex-1 min-w-[200px] p-2 border rounded-md"
        />
        <select className="p-2 border rounded-md">
          <option value="">All Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>
        <select className="p-2 border rounded-md">
          <option value="">All Locations</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="onsite">On-site</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobListings.map((job) => (
          <div key={job?._id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative bg-[#E4FBEC] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={"/profile.svg"}
                  alt={job.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{job.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
                  <span>{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-[#188268] font-semibold mt-1">{job?.salaryRange}</p>
                <p className="mt-2 text-gray-600">{job.description}</p>
              </div>
              <Button className="bg-[#188268] hover:bg-[#156B55] text-white">
                Apply Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
