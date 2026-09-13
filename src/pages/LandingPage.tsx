import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImage from "../assets/images/BannerImage.webp";
import oldPic from "../assets/images/oldpic.jpg";
import wedday from "../assets/images/wedday.webp";
import wedday1 from "../assets/images/WhatsApp Image 2026-09-13 at 11.47.14 AM.jpeg";
import wedday2 from "../assets/images/WhatsApp Image 2026-09-13 at 11.47.15 AM.jpeg";
import wedday3 from "../assets/images/WhatsApp Image 2026-09-13 at 11.47.16 AM (1).jpeg";
import wedday4 from "../assets/images/WhatsApp Image 2026-09-13 at 11.47.16 AM.jpeg";
import wedday5 from "../assets/images/WhatsApp Image 2026-09-13 at 11.57.46 AM.jpeg";
import wedday6 from "../assets/images/WhatsApp Image 2026-09-13 at 11.57.47 AM.jpeg";
import wedday7 from "../assets/images/WhatsApp Image 2026-09-13 at 11.57.49 AM.jpeg";
import wedday8 from "../assets/images/WhatsApp Image 2026-09-13 at 11.57.49 AM (1).jpeg";
import wedday9 from "../assets/images/aa.webp";
import WeddingNav from "../components/WeddingNav";
import HeroSection from "../components/HeroSection";
import StorySection from "../components/StorySection";
import TimelineSection from "../components/TimelineSection";
import MemoriesSection from "../components/MemoriesSection";
import WeddingDaySection from "../components/WeddingDaySection";
import GallerySection from "../components/GallerySection";
import FooterSection from "../components/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      lerp: 0.08,
    });
    let frameId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    });
    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-content > *", {
          opacity: 0,
          y: 60,
          duration: 1.2,
          stagger: 0.12,
        })
        .from(".hero-note", { opacity: 0, x: 50, duration: 1 }, "-=0.7");
      gsap.to(".hero-bg", {
        yPercent: 20,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.utils
        .toArray<HTMLElement>(".reveal-up")
        .forEach((element) =>
          gsap.fromTo(
            element,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                end: "top 55%",
                scrub: 0.8,
              },
            },
          ),
        );
      gsap.utils
        .toArray<HTMLElement>(".fade-section")
        .forEach((element) =>
          gsap.fromTo(
            element,
            { opacity: 0.15, y: 40 },
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "top 45%",
                scrub: 1,
              },
            },
          ),
        );
      gsap.utils
        .toArray<HTMLElement>(".image-reveal")
        .forEach((element) =>
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.88,
              y: 80,
              clipPath: "inset(15% 15% 15% 15%)",
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          ),
        );
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#timeline",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".gallery-item", {
        opacity: 0,
        scale: 0.8,
        y: 60,
        rotation: 5,
        duration: 1,
        stagger: 0.12,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "#gallery",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.utils
        .toArray<HTMLElement>(".section-title")
        .forEach((element) =>
          gsap.fromTo(
            element,
            { opacity: 0, y: 70 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          ),
        );
      gsap.utils
        .toArray<HTMLElement>(".parallax-image")
        .forEach((element) =>
          gsap.to(element, {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }),
        );
      gsap.from(".footer-content", {
        opacity: 0,
        y: 80,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
      ScrollTrigger.refresh();
    });
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      context.revert();
    };
  }, []);

  return (
    <div className="bg-[#F6F1E7] text-stone-800 font-sans antialiased">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Caveat:wght@500;600&family=Inter:wght@300;400;500&display=swap'); .font-serif-display { font-family: 'Playfair Display', serif; } .font-script { font-family: 'Caveat', cursive; } .font-sans { font-family: 'Inter', sans-serif; }`}</style>
      <WeddingNav />
      <HeroSection image={bannerImage} />
      <StorySection image={oldPic} />
      <TimelineSection />
      <MemoriesSection images={[oldPic, wedday5, wedday6, wedday7, wedday8 , wedday9]} />
      <WeddingDaySection image={wedday} />
      <GallerySection images={[wedday1, wedday2, wedday3, wedday4]} />
      <FooterSection image={wedday9} />
    </div>
  );
}
