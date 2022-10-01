import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      
      <Page>
        <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}
