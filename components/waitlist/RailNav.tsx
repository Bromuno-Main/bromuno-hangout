"use client";
import Image from "next/image";
import React from "react";

export interface NavProps {
  stage: number;
  setStageAction: (stage: number) => void;
  canMove: boolean[];
};

export function RailNav({ stage, setStageAction, canMove }: NavProps) {
  return (
    <div className="w-full lg:h-[85px] h-[60px] border-b border-[#201c1c] border-dashed">
      <div className="flex items-center gap-3 justify-between h-full px-6 w-full">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((step) => (
            <span
              key={step}
              className={`w-3 h-3 rounded-full ${stage >= step ? 'bg-green' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <button
            disabled={stage === 0 || !canMove[stage - 1]}
            onClick={() => {
              if (stage > 0) setStageAction(stage - 1);
            }}
            className={`p-2 bg-gray-200 rounded-full ${stage > 0 && canMove[stage - 1] ? 'bg-green' : ''}`}
          >
            <Image
              src="/forwardArrow.svg"
              alt="arrow"
              className="rounded-full rotate-180 size-6"
              width={24}
              height={24}
            />
          </button>
          <button
            disabled={stage === 2 || !canMove[stage]}
            onClick={() => {
              if (stage < 2) setStageAction(stage + 1);
            }}
            className={`p-2 bg-gray-200 rounded-full ${stage < 2 && canMove[stage] ? 'bg-green' : ''}`}
          >
            <Image
              src="/forwardArrow.svg"
              alt="arrow"
              className="rounded-full size-6"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
