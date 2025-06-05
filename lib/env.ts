import { z } from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'production', 'test']),
    // Add other environment variables here
});

export const validateEnv = () => {
    try {
        const env = envSchema.parse({
            NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
            NODE_ENV: process.env.NODE_ENV,
            // Add other environment variables here
        });
        return { env, error: null };
    } catch (error) {
        console.error('Invalid environment variables:', error);
        return { env: null, error };
    }
};

export const getValidatedEnv = () => {
    const { env, error } = validateEnv();
    if (error) throw new Error('Invalid environment variables');
    return env;
};
