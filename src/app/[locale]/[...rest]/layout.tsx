import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import { BaseLayout } from '@/components/layouts/BaseLayout';

export const metadata: Metadata = {
    title: 'Not Found',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default RootLayout;
