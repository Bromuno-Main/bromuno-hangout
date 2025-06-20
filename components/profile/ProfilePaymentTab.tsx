"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/Button';

export const ProfilePaymentTab: React.FC = () => {
    const subscriptionDetails = {
        plan: "Pro Plan",
        status: "Active",
        nextBilling: "July 16, 2025",
        amount: "$29.99"
    };

    const paymentMethods = [
        {
            type: "Visa",
            lastFour: "4242",
            expiryDate: "12/25",
            isDefault: true
        }
    ];

    const billingHistory = [
        {
            date: "June 16, 2025",
            description: "Pro Plan Subscription",
            amount: "$29.99",
            status: "Paid"
        },
        {
            date: "May 16, 2025",
            description: "Pro Plan Subscription",
            amount: "$29.99",
            status: "Paid"
        }
    ];

    return (
        <div className="space-y-8">
            {/* Current Subscription */}
            <section className="space-y-4">
                <h3 className="font-semibold text-lg">Current Subscription</h3>
                <div className="bg-white border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="font-semibold text-lg">{subscriptionDetails.plan}</h4>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                                {subscriptionDetails.status}
                            </span>
                        </div>
                        <Button variant="outline">Change Plan</Button>
                    </div>
                    <div className="space-y-2 text-gray-600">
                        <p>Next billing date: {subscriptionDetails.nextBilling}</p>
                        <p>Amount: {subscriptionDetails.amount}/month</p>
                    </div>
                </div>
            </section>

            {/* Payment Methods */}
            <section className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Payment Methods</h3>
                    <Button variant="outline">Add New</Button>
                </div>
                <div className="space-y-4">
                    {paymentMethods.map((method, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-blue-600 rounded"></div>
                                <div>
                                    <p className="font-semibold">
                                        {method.type} ending in {method.lastFour}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Expires {method.expiryDate}
                                    </p>
                                </div>
                            </div>
                            {method.isDefault && (
                                <span className="text-sm text-gray-600">Default</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Billing History */}
            <section className="space-y-4">
                <h3 className="font-semibold text-lg">Billing History</h3>
                <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Description</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {billingHistory.map((bill, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 text-sm text-gray-600">{bill.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{bill.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{bill.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                                            {bill.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Cancel Subscription */}
            <section className="border-t pt-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-lg text-red-600">Cancel Subscription</h3>
                        <p className="text-sm text-gray-600">
                            Your subscription will remain active until the end of your current billing period
                        </p>
                    </div>
                    <Button variant="destructive">Cancel Subscription</Button>
                </div>
            </section>
        </div>
    );
};
