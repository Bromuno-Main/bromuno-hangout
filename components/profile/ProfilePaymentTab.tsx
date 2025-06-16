"use client";

import React from 'react';
import Image from 'next/image';

export const ProfilePaymentTab: React.FC = () => {
    return (
        <div className="px-6 space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Current Plan</h3>
                <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-medium">Pro Plan</h4>
                            <p className="text-sm text-gray-500">Billed monthly</p>
                        </div>
                        <span className="text-lg font-semibold">$29/mo</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Payment Method</h3>
                <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded">
                            <Image src="/card-icon.svg" width={24} height={24} alt="card" />
                        </div>
                        <div>
                            <p className="font-medium">•••• 4242</p>
                            <p className="text-sm text-gray-500">Expires 12/24</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Billing History</h3>
                <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                        <div>
                            <p className="font-medium">Dec 1, 2023</p>
                            <p className="text-sm text-gray-500">Pro Plan - Monthly</p>
                        </div>
                        <span className="font-medium">$29.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <div>
                            <p className="font-medium">Nov 1, 2023</p>
                            <p className="text-sm text-gray-500">Pro Plan - Monthly</p>
                        </div>
                        <span className="font-medium">$29.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
