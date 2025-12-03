"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import TestimonialCardThree from "@/components/sections/testimonial/TestimonialCardThree";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Sparkles, Calendar, MapPin, Users, Cake, Star, Music, UtensilsCrossed, Trophy, Camera, Clock, Utensils, Gift, Smile, Heart, PartyPopper, Zap, Laugh } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Happy Birthday Party"
          button={{
            text: "RSVP Now",
            href: "contact"
          }}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764757014782-sobpktpy.jpg"
          logoAlt="Party Logo"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Let's Celebrate Together"
          description="Join us for an unforgettable birthday party filled with joy, laughter, and wonderful memories"
          tag="Birthday Celebration"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764757016021-gxzraxak.jpg"
          imageAlt="Birthday party celebration with balloons and confetti"
          textPosition="center"
          showDimOverlay={true}
          showBlur={true}
          buttons={[
            {
              text: "RSVP Now",
              href: "contact"
            },
            {
              text: "Event Details",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="This is going to be the best birthday party ever! Join us for cake, games, music, and tons of fun with friends and family."
          metrics={[
            {
              icon: Calendar,
              label: "Date",
              value: "TBA"
            },
            {
              icon: MapPin,
              label: "Location",
              value: "TBA"
            },
            {
              icon: Users,
              label: "Expected Guests",
              value: "50+"
            },
            {
              icon: Cake,
              label: "Activities",
              value: "Fun & Games"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="What to Expect"
          description="Here's what makes this birthday celebration special"
          tag="Highlights"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          features={[
            {
              icon: Music,
              title: "Live Music & DJ",
              description: "Great music and entertainment to keep the party going all night long"
            },
            {
              icon: UtensilsCrossed,
              title: "Amazing Food & Drinks",
              description: "Delicious catering, birthday cake, and refreshing beverages for everyone"
            },
            {
              icon: Trophy,
              title: "Games & Activities",
              description: "Fun games, contests, and activities with prizes for the winners"
            },
            {
              icon: Camera,
              title: "Photo Memories",
              description: "Professional photos and video to capture all the special moments"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Party Stats"
          description="Here's what we're planning to make this birthday unforgettable"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              icon: Clock,
              title: "Hours of Fun",
              value: "8+"
            },
            {
              id: "2",
              icon: Utensils,
              title: "Food Items",
              value: "20+"
            },
            {
              id: "3",
              icon: Gift,
              title: "Party Favors",
              value: "For All"
            },
            {
              id: "4",
              icon: Smile,
              title: "Fun Level",
              value: "Maximum"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Guests Are Saying"
          description="Excited reactions from people coming to the party"
          tag="Guest Excitement"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarah_friend",
              testimonial: "Can't wait for this party! I heard it's going to be absolutely amazing with great music and food.",
              icon: PartyPopper,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764757018148-phcchc1z.jpg",
              imageAlt: "Sarah"
            },
            {
              id: "2",
              name: "Mike",
              handle: "@mike_excited",
              testimonial: "This is going to be legendary! Best birthday celebration ever. Already cleared my calendar!",
              icon: Zap,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764757019182-ek3fono9.jpg",
              imageAlt: "Mike"
            },
            {
              id: "3",
              name: "Emma",
              handle: "@emma_party",
              testimonial: "So thrilled to be part of this special day. The planning looks incredible!",
              icon: Star,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764757020179-0oyb8pub.jpg",
              imageAlt: "Emma"
            },
            {
              id: "4",
              name: "James",
              handle: "@james_loves_party",
              testimonial: "This party is going to be unforgettable. Can't wait to celebrate with everyone!",
              icon: Laugh,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764757021233-qn2bgqvr.jpg",
              imageAlt: "James"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="RSVP to the Party"
          description="Let us know if you're coming! Fill out the form below with your details and we'll confirm your attendance."
          buttonText="RSVP"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "guests",
            placeholder: "Number of guests and any dietary restrictions...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764757017153-6ce0ytug.jpg"
          imageAlt="Birthday party venue"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Event Info",
              items: [
                {
                  label: "Date",
                  href: "#"
                },
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Schedule",
                  href: "#"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "RSVP",
                  href: "contact"
                },
                {
                  label: "Share Event",
                  href: "#"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Photo Gallery",
                  href: "#"
                },
                {
                  label: "Event Map",
                  href: "#"
                },
                {
                  label: "FAQ",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Happy Birthday Party | Made with celebration and joy"
        />
      </div>
    </ThemeProvider>
  );
}