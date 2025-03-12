export interface User {
    _id: string; // Unique ID for the user (MongoDB ObjectId as string)
    fullName: string | null; // Full name of the user
    occupation: string | null; // Occupation of the user
    dateOfBirth: string | null; // Date of birth in ISO string format
    country: string | null; // Country of the user
    address: string | null; // Address of the user
    phoneNumber: string; // Phone number (in E.164 format)
    email: string; // Email address
    password: string; // Password (hashed in backend)
    role: 'admin' | 'moderator' | 'user'; // Role of the user
    purposeOfJoining: string[]; // List of reasons for joining
    verificationToken: string | null; // Token for email verification
    isVerified: boolean; // Whether the user is verified or not
    resetPasswordToken: string | null; // Token for password reset
    resetPasswordExpires: string | null; // Expiry date for password reset
    createdAt: string; // Account creation timestamp
    updatedAt: string; // Account update timestamp
}
