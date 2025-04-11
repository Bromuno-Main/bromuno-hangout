"use client";
import Image from "next/image";
import React from "react";
import {NavProps} from "./Register";


export function RailNav({stage, setStageAction, canMove}: NavProps) {
    console.log(canMove[stage]);
    return (
        <div className="w-full h-[85px] border-b border-[#201c1c] border-dashed">
            <div className="flex items-center gap-3 justify-between h-full px-6 w-full">
                <div className="flex items-center gap-2">
                    {[0, 1, 2, 3].map((step) => (
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
                            if (stage > 0) setStageAction(stage - 1)
                        }}
                        className={`p-2 bg-gray-200 rounded-full ${stage > 0 && stage < 5 ? 'bg-green' : ''}`}
                    >
                        <Image
                            src={'/forwardArrow.svg'}
                            alt={'arrow'}
                            className="rounded-full rotate-180 size-6"
                            width={24}
                            height={24}
                        />
                    </button>
                    <button
                        disabled={stage === 3 || !canMove[stage]}
                        onClick={() => {
                            if (stage < 4) setStageAction(stage + 1);
                        }}
                        className={`p-2 bg-gray-200 rounded-full ${stage > 0 && stage < 4 ? 'bg-green' : ''}`}
                    >
                        <Image
                            src={'/forwardArrow.svg'}
                            alt={'arrow'}
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
