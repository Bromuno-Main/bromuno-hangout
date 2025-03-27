"use client";
import Image from "next/image";
import React from "react";
import {NavProps} from "./Register";


export function RailNav({stage, setStage}: NavProps) {
    return (
        <div className="w-full h-[85px] border-b border-[#201c1c] border-dashed">
            <div className="flex items-center gap-3 justify-between h-full px-6 w-full">
                <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((step) => (
                        <span
                            key={step}
                            className={`w-3 h-3 rounded-full ${stage >= step ? 'bg-green' : 'bg-gray-300'}`}
                        ></span>
                    ))}
                </div>
                <div className="flex gap-3 items-center">
                    <span
                        onClick={() => setStage(stage - 1)}
                        className={`p-2 bg-gray-200 rounded-full ${stage > 1 && stage < 5 ? 'bg-green' : ''}`}
                    >
                        <Image
                            src={'/forwardArrow.svg'}
                            alt={'arrow'}
                            className="rounded-full rotate-180 size-6"
                            width={24}
                            height={24}
                        />
                    </span>
                    <span
                        onClick={() => setStage(stage + 1)}
                        className={`p-2 bg-gray-200 rounded-full ${stage > 1 && stage < 4 ? 'bg-green' : ''}`}
                    >
                        <Image
                            src={'/forwardArrow.svg'}
                            alt={'arrow'}
                            className="rounded-full size-6"
                            width={24}
                            height={24}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
