import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
    titleTemplate: "%s | Portfolio",
    defaultTitle: "Portfolio | Full-Stack Developer",
    description: "Full-stack developer crafting beautiful, performant web experiences using React, Next.js, Spring Boot, Node.js, and Cloud technologies.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yourportfolio.com",
        siteName: "Portfolio",
        images: [
            {
                url: "https://yourportfolio.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Portfolio",
            },
        ],
    },
    twitter: {
        handle: "@yourhandle",
        site: "@yourhandle",
        cardType: "summary_large_image",
    },
};
