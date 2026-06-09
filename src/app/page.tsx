"use client";

import {
  ArrowRight,
  ChevronRight,
  CircleCheck,
  Factory,
  Hammer,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  TreePine,
  Truck,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const companyName = "Yoezer Wood Integrated";
const whatsappNumber = "97517617896";
const contactPhoneNumbers = "+975 17 61 78 96 / +975 17612560";
const defaultWhatsAppMessage =
  "Hello Yoezer Wood Integrated, I want to inquire about your mobile sawmill service.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  defaultWhatsAppMessage,
)}`;
const logoImage = "/yoezer-logo.png";
const logoMark = "/yoezer-logo-mark.png";

const imageUrls = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Photograph_of_Portable_Sawmill_Cutting_Government_Logs_-_NARA_-_2129331.jpg?width=1800",
  logs:
    "https://commons.wikimedia.org/wiki/Special:FilePath/358_%28maybe%29_Stack_of_Spruce_Logs_%2821419226993%29.jpg?width=1600",
  planks:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Stacked_wood_planks_%28Unsplash%29.jpg?width=1600",
  lumber:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Lumber_at_a_Sawmill.jpg?width=1600",
  timberYard:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Stacked_Lumber_%2853832000192%29.jpg?width=1600",
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mobile Sawmill", href: "#mobile-sawmill" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const mobileFeatures: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "On-site log cutting",
    description: "Cut logs where they are stored, subject to road access and availability.",
    icon: Truck,
  },
  {
    title: "Custom plank and beam sizes",
    description: "Discuss the sizes you need before the work is scheduled.",
    icon: Ruler,
  },
  {
    title: "Lower transport cost",
    description: "Reduce unnecessary log handling by processing closer to your site.",
    icon: Leaf,
  },
  {
    title: "Useful for local sites",
    description: "A practical option for farms, forests, construction, and private customers.",
    icon: CircleCheck,
  },
];

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Mobile Sawmill Service",
    description:
      "Requested on-site cutting for customers who need logs processed at their location.",
    icon: Truck,
  },
  {
    title: "Timber Cutting",
    description: "Careful cutting for usable planks, boards, beams, and project timber.",
    icon: TreePine,
  },
  {
    title: "Wood Processing",
    description: "Practical preparation support for timber that needs to be cut and sorted.",
    icon: Factory,
  },
  {
    title: "Custom Planks and Beams",
    description: "Custom sizes for homes, sheds, furniture work, and site requirements.",
    icon: Ruler,
  },
  {
    title: "Construction Timber Supply",
    description: "Timber prepared for building work, repairs, and local construction needs.",
    icon: Hammer,
  },
  {
    title: "Wood Consultation",
    description: "Simple guidance on suitable cuts, sizes, and timber preparation.",
    icon: MessageCircle,
  },
];

const galleryItems = [
  {
    label: "On-site Sawmill Work",
    image: imageUrls.hero,
    className: "lg:row-span-2 lg:min-h-[620px]",
  },
  {
    label: "Processed Timber",
    image: imageUrls.planks,
    className: "lg:min-h-[300px]",
  },
  {
    label: "Custom Wood Orders",
    image: imageUrls.timberYard,
    className: "lg:min-h-[380px]",
  },
  {
    label: "Planks and Beams",
    image: imageUrls.lumber,
    className: "lg:col-span-2 lg:min-h-[360px]",
  },
];

function BackgroundImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized
      sizes="100vw"
      className={`object-cover ${className}`}
    />
  );
}

function WhatsAppButton({
  children,
  variant = "gold",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "gold" | "cream" | "outline";
  className?: string;
}) {
  const variants = {
    gold:
      "bg-[#C89B3C] text-[#12372A] shadow-[0_18px_42px_rgba(200,155,60,0.24)] hover:bg-[#d6aa4a]",
    cream:
      "bg-[#FFF9F0] text-[#12372A] shadow-[0_18px_42px_rgba(0,0,0,0.18)] hover:bg-white",
    outline:
      "border border-[#FFF9F0]/45 text-[#FFF9F0] hover:border-[#FFF9F0] hover:bg-[#FFF9F0]/10",
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      <MessageCircle aria-hidden="true" size={18} strokeWidth={2} />
      {children}
    </a>
  );
}

function ExploreButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#FFF9F0]/45 px-6 py-3 text-sm font-bold text-[#FFF9F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFF9F0] hover:bg-[#FFF9F0]/10"
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "border-[#FFF9F0]/10 bg-[#12372A]/88 text-[#FFF9F0] shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl"
    : "border-transparent bg-transparent text-[#FFF9F0]";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${navClass}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#FFF9F0]/45 bg-[#FFF9F0] shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition group-hover:scale-[1.03]">
            <Image
              src={logoMark}
              alt=""
              fill
              sizes="44px"
              className="object-contain p-1"
            />
          </span>
          <span className="font-serif text-lg font-bold tracking-wide sm:text-xl">
            {companyName}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#FFF9F0]/82 transition hover:text-[#C89B3C]"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton variant="gold" className="min-h-10 px-5 py-2">
            WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFF9F0]/30 bg-[#FFF9F0]/10 text-[#FFF9F0] transition hover:bg-[#FFF9F0]/20 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`mx-5 overflow-hidden rounded-[1.5rem] bg-[#12372A]/96 text-[#FFF9F0] shadow-2xl transition-all duration-300 sm:mx-8 lg:hidden ${
          menuOpen ? "max-h-[520px] border border-[#FFF9F0]/10 p-4" : "max-h-0 p-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-full px-4 py-3 text-sm font-semibold text-[#FFF9F0]/86 transition hover:bg-[#FFF9F0]/10 hover:text-[#C89B3C]"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton variant="gold" className="mt-3 w-full">
            Contact on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-[#F5EFE6] text-[#1E1E1E]">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden text-[#FFF9F0]">
        <BackgroundImage
          src={imageUrls.hero}
          alt="Portable sawmill cutting timber logs"
          priority
          className="scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,55,42,0.96),rgba(18,55,42,0.72)_46%,rgba(30,30,30,0.42)),linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.62))]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:pt-24">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex border-l-2 border-[#C89B3C] pl-4 text-sm font-bold uppercase tracking-[0.24em] text-[#F5EFE6]">
              Mobile Sawmill & Timber Processing
            </p>
            <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl">
              Yoezer Wood Integrated
            </h1>
            <p className="mt-7 max-w-3xl text-2xl font-semibold leading-tight text-[#FFF9F0] sm:text-3xl lg:text-4xl">
              Premium Timber Solutions, Delivered to Your Site
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#FFF9F0]/84 sm:text-xl">
              We provide reliable wood processing, custom timber cutting, and
              mobile sawmill services for customers who need logs cut at their
              own location.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton variant="cream">Contact on WhatsApp</WhatsAppButton>
              <ExploreButton href="#services">Explore Services</ExploreButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,#F5EFE6)]" />
      </section>

      <section id="about" className="relative scroll-mt-24 px-5 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-28">
        <div className="absolute left-0 top-0 h-40 w-full bg-[radial-gradient(circle_at_25%_20%,rgba(200,155,60,0.18),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(18,55,42,0.2)]">
              <BackgroundImage src={imageUrls.logs} alt="Stacked logs for timber processing" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(18,55,42,0.28))]" />
            </div>
            <div className="absolute bottom-0 right-0 h-[44%] w-[55%] overflow-hidden rounded-[1.5rem] border-8 border-[#F5EFE6] shadow-[0_22px_60px_rgba(30,30,30,0.2)]">
              <BackgroundImage src={imageUrls.planks} alt="Processed timber planks" />
            </div>
          </div>

          <div className="lg:pl-6">
            <span className="mb-6 block h-1 w-20 rounded-full bg-[#C89B3C]" />
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#8B5A2B]">
              About Yoezer Wood Integrated
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#12372A] sm:text-5xl">
              Reliable timber work with the convenience of on-site cutting.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#1E1E1E]/76">
              {companyName} provides sawmill and wood processing services with a
              focus on practical quality, clear communication, and customer
              convenience. We help customers prepare timber for construction,
              private projects, and local site needs.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#1E1E1E]/76">
              For customers who already have logs at their location, mobile
              sawmill support can be requested through WhatsApp. Share your
              location, log quantity, access details, and preferred sizes so we
              can discuss availability and pricing clearly.
            </p>
          </div>
        </div>
      </section>

      <section id="mobile-sawmill" className="relative scroll-mt-24 overflow-hidden bg-[#FFF9F0] px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFF9F0,#F5EFE6_54%,rgba(139,90,43,0.18))]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#C89B3C]/14 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#12372A]/12 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#8B5A2B]">
                Main service
              </p>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight text-[#12372A] sm:text-5xl lg:text-6xl">
                Mobile Sawmill Available for On-Site Cutting
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#1E1E1E]/76">
                Customers can request the mobile sawmill to cut logs at their
                own location. Send us your location, approximate log quantity,
                preferred timber sizes, and site access details through
                WhatsApp. We will discuss availability, service location, and
                pricing before the work is confirmed.
              </p>
              <div className="mt-7">
                <WhatsAppButton>Book Mobile Sawmill via WhatsApp</WhatsAppButton>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 border-y border-[#8B5A2B]/18 py-10 lg:flex-row lg:items-start lg:justify-between">
            {mobileFeatures.map(({ title, description, icon: Icon }) => (
              <div key={title} className="group max-w-sm lg:max-w-[260px]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#12372A] text-[#C89B3C] transition group-hover:-translate-y-1 group-hover:bg-[#8B5A2B] group-hover:text-[#FFF9F0]">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.9} />
                </div>
                <h3 className="text-xl font-semibold text-[#12372A]">{title}</h3>
                <p className="mt-3 leading-7 text-[#1E1E1E]/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-[#F5EFE6] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="mb-6 block h-1 w-20 rounded-full bg-[#C89B3C]" />
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#8B5A2B]">
              Services
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#12372A] sm:text-5xl">
              Timber services shaped around real project needs.
            </h2>
          </div>

          <div className="divide-y divide-[#12372A]/14">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className="group grid gap-5 py-8 transition lg:grid-cols-[110px_0.7fr_1fr_40px] lg:items-center"
              >
                <div className="font-serif text-3xl text-[#12372A]/30">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12372A] text-[#C89B3C] transition group-hover:bg-[#8B5A2B] group-hover:text-[#FFF9F0]">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.9} />
                  </span>
                  <h3 className="text-2xl font-semibold text-[#12372A]">{title}</h3>
                </div>
                <p className="leading-7 text-[#1E1E1E]/70">{description}</p>
                <ChevronRight
                  aria-hidden="true"
                  className="hidden text-[#C89B3C] transition group-hover:translate-x-1 lg:block"
                  size={25}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="scroll-mt-24 bg-[#12372A] px-5 py-24 text-[#FFF9F0] sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#C89B3C]">
                Works
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                A natural look at timber processing work.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#FFF9F0]/76">
              The gallery can be updated with real project photos as work is
              documented, from on-site sawmill service to processed timber and
              custom wood orders.
            </p>
          </div>

          <div className="grid auto-rows-[240px] gap-5 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure
                key={item.label}
                className={`group relative min-h-[280px] overflow-hidden rounded-[1.5rem] ${item.className}`}
              >
                <BackgroundImage
                  src={item.image}
                  alt={`${item.label} for ${companyName}`}
                  className="transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,55,42,0.04),rgba(18,55,42,0.72))]" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex border-l-2 border-[#C89B3C] pl-4 text-xl font-semibold">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-24 overflow-hidden px-5 py-24 text-[#FFF9F0] sm:px-8 lg:py-32">
        <BackgroundImage src={imageUrls.timberYard} alt="Timber yard and stacked lumber" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,55,42,0.96),rgba(18,55,42,0.74),rgba(30,30,30,0.42))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#C89B3C]">
              Contact
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Need timber cut at your location?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#FFF9F0]/82 sm:text-xl">
              Contact {companyName} on WhatsApp to check mobile sawmill
              availability, pricing, and service location.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton variant="cream">Contact on WhatsApp</WhatsAppButton>
              <div className="space-y-2 text-sm font-semibold text-[#FFF9F0]/74">
                <p className="flex items-center gap-2">
                  <MapPin aria-hidden="true" size={17} className="text-[#C89B3C]" />
                  Bhutan, location to be updated
                </p>
                <p className="flex items-center gap-2">
                  <Phone aria-hidden="true" size={17} className="text-[#C89B3C]" />
                  {contactPhoneNumbers}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contact ${companyName} on WhatsApp`}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center gap-3 rounded-full bg-[#C89B3C] text-[#12372A] shadow-[0_18px_42px_rgba(18,55,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6aa4a] sm:bottom-6 sm:right-6 sm:w-auto sm:px-5"
      >
        <MessageCircle aria-hidden="true" size={22} strokeWidth={2} />
        <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
      </a>

      <footer className="bg-[#12372A] px-5 py-8 text-[#FFF9F0]/72 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-28 overflow-hidden rounded-[1rem] bg-[#FFF9F0] p-2 shadow-[0_16px_34px_rgba(0,0,0,0.18)]">
              <Image
                src={logoImage}
                alt={`${companyName} logo`}
                fill
                sizes="112px"
                className="object-contain p-2"
              />
            </div>
            <p className="font-serif text-lg font-semibold text-[#FFF9F0]">
              {companyName}
            </p>
          </div>
          <p>
            Copyright {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
