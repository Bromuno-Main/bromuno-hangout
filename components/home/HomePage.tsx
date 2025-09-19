import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";
import {
  Calendar, BarChart2, Plus, Download,
  Dumbbell, Briefcase, Radio, Trophy, ArrowUp, Star,
  ArrowUpRight,
  Section,
  Eye
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from 'lucide-react';

// Type definitions
interface Stat {
  label: string;
  value: string;
  change?: string;
  period?: string;
  status?: string;
}

interface ActivityStat {
  label: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  change: string;
  route: string;
}

interface RumbleChallenge {
  title: string;
  type: string;
  prize: string;
  difficulty: 'Hard' | 'Medium';
}

interface GymWorkout {
  title: string;
  type: string;
  duration: string;
  completed: number;
}

interface JobPosting {
  role: string;
  company: string;
  salary: string;
  posted: string;
}

interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  type: string;
}

export default function HomePage() {


  return (
    <div className=" bg-white h-full w-full flex flex-col overflow-hidden overflow-y-scroll scrollbar-hide ">
      <section className="flex flex-shrink-0 flex-col gap-8 w-full rounded-2xl h-[290px] p-8">
        {/* HEADER */}
        <div className="flex flex-col gap-[0.38rem] ">
          <h4>Hello June,</h4>
          <p>What are we doing today?</p>
        </div>
        {/* TASKS AND PERFORMANCE */}
        <div className="flex gap-[0.625rem]  h-[196px] sm:w-[855px] relative">
          <Button className="bg-[#fffa37] absolute right-0 -top-12 rounded-full hover:bg-[#fffa37]/80 hover:text-black">
            <ArrowUpRight />
            Stats
          </Button>
          <div className="sm:w-[204px]  h-full rounded-2xl py-[23px] px-4 gap-[18px] ">
            <div className="flex justify-between items-center h-[24px] w-full">
              <p className="font-sans font-bold text-[16px] leading-[100%] tracking-normal">Your Tasks</p>
              <Eye color="#D9D9D9" />
            </div>
          </div>
          <div className="flex-1  h-full rounded-2xl py-[23px] px-4 gap-[18px] ">
            <div className="flex justify-between items-center h-[24px] w-full">
              <p className="font-sans font-bold text-[16px] leading-[100%] tracking-normal">Team Performance</p>
              <div className="flex justify-between items-center h-[24px] gap-[6px]">
                <Button variant={"ghost"} className="rounded-full">30 days</Button>
                <Eye color="#D9D9D9" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TASKS SCHEDULE JOBS NOTES */}
      <section className="flex flex-1 px-6 flex-shrink-0">
        <div className="w-[65%] ">
          <div className="border-b border-[#ffffff] flex items-center justify-center flex-col py-[15px] px-[20px]">
            <div className="flex w-full flex-shrink-0">
              <Button className="font-bold rounded-full">Tasks</Button>
              <Button className="font-bold rounded-full bg-transparent">Tasks</Button>
              <Button className="font-bold rounded-full bg-transparent">Tasks</Button>
              <Button className="font-bold rounded-full bg-transparent">Tasks</Button>
            </div>
            <div className="flex w-full flex-col gap-2.5 px-[20px] py-[15px] flex-shrink-0">
              <div className="h-[289px] bg-[#fafafa] rounded-2xl p-4 gap-2.5"></div>
              <div className="h-[289px] bg-[#fafafa] rounded-2xl p-4 gap-2.5"></div>
              <div className="h-[289px] bg-[#fafafa] rounded-2xl p-4 gap-2.5"></div>
              <div className="h-[289px] bg-[#fafafa] rounded-2xl p-4 gap-2.5"></div>
              <div className="h-[289px] bg-[#fafafa] rounded-2xl p-4 gap-2.5"></div>
              <div className="h-[289px] bg-[#fafafa] rounded-2xl p-4 gap-2.5"></div>
            </div>
          </div>
        </div>
        {/* box-shadow: 0px 4px 4px 0px #00000014;
 */}
        <div className="flex-1 custom-shadow rounded-2xl">
          <div className="w-full py-[15px] px-[18px] border-b border-white">
            <p className="font-sans font-bold text-[16px] leading-[100%] tracking-normal">Activities</p>
          </div>

          <div className="gap-2.5 flex flex-col">
            <div className="px-[18px] py-[6px] border-b border-b-[#eeeeee]">
              <p className="font-normal leading-[100%] tracking-normal text-[15px]">New order assigned</p>
            </div>
            <div className="px-[18px] py-[6px] border-b border-b-[#eeeeee]">
              <p className="font-normal leading-[100%] tracking-normal text-[15px]">New order assigned</p>
            </div>
            <div className="px-[18px] py-[6px] border-b border-b-[#eeeeee]">
              <p className="font-normal leading-[100%] tracking-normal text-[15px]">New order assigned</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
