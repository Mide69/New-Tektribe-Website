"use client";
import React from "react";
import PropTypes from "prop-types";
import { normalizedData } from "@/utils";
import Layout from "@/layouts";
import Header from "@/layouts/header/layout-01";
import Footer from "@/layouts/footer/layout-02";
import HeroArea from "@/containers/hero/layout-12";
import AboutArea from "@/containers/about/layout-02";
import ParallaxArea from "@/containers/parallax";
import PortfolioArea from "@/containers/portfolio/layout-06";
import ClientArea from "@/containers/client/layout-03";
import ResumeArea from "@/containers/resume/layout-01";
import BlogArea from "@/containers/blog/layout-01";
import EducationArea from "@/containers/education/layout-01";
import SkillArea from "@/containers/skill/layout-01";
import ExperienceArea from "@/containers/experience/layout-01";
import PricingArea from "@/containers/pricing/layout-02";
import TestimonialArea from "@/containers/testimonial/layout-03";
import ContactArea from "@/containers/contact/layout-01";
import ServicesArea from "@/containers/service/layout-01";

// import data from "@/lib/data.json";
import data from "@/lib/data.json";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/swiper.css";
import "@/assets/scss/style.scss";
import "aos/dist/aos.css";
import "@/app/custom-style.css";

export default function IndexPage() {
    const content = normalizedData(data?.homePage?.content || []);
    return (
        <Layout pageTitle="Tek Tribe">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea data={content["hero-section"]} />
                <AboutArea data={content["about-section"]} />
                <ServicesArea id="service" data={content["service-section"]} />
                <ParallaxArea data={content["parallax-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
                <ClientArea data={content["client-section"]} />
                <TestimonialArea data={content["testimonial-section"]} />
                <PricingArea data={content["pricing-section"]} />
                <BlogArea
                    data={{
                        ...content["blog-section"],
                        blogs: content["blog-section"]?.items || data?.allArticle?.nodes,
                    }}
                />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                />
            </main>
            <Footer
                className="section-separator"
                data={{
                    ...data.footer,
                    socials: data.site.siteMetadata.socials,
                }}
            />
        </Layout>
    );
};

// Define prop types
IndexPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({
            menu: PropTypes.arrayOf(PropTypes.shape({}))
        }),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};
