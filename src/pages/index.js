import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {

  return (
    <>
      <Seo title="Charles Lutz" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
