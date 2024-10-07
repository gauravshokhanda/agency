import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio/detail";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Page | Free Next.js Template for Startup and SaaS",
  description: "This is Portfolio Page for Startup Nextjs Template",
  // other metadata
};

const PortfolioPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="A startup is a newly created company that relies on information and communication technologies (ICT) to market its products or services. It features a scalable business model in which its priority is to grow quickly and smoothly."
      />

      <Portfolio/>
    </>
  );
};

export default PortfolioPage;
