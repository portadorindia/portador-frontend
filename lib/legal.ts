import { site } from "@/lib/site";

export type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "restricted-goods",
    title: "Restricted Goods",
    description: "Restricted and prohibited goods guidance for PORTADOR SOS time-critical air logistics shipments.",
    updated: "2026",
    sections: [
      {
        title: "Overview",
        body: "PORTADOR SOS coordinates operations-led, time-critical air logistics. Every shipment must comply with applicable law, airline rules, airport cargo terminal requirements, security screening, and regulatory restrictions."
      },
      {
        title: "Prohibited goods",
        body: "Prohibited goods must not be booked, handed over, concealed, misdeclared, or shipped through PORTADOR SOS.",
        items: [
          "Illegal, banned, stolen, counterfeit, or undeclared goods.",
          "Arms, ammunition, explosives, fireworks, weapons, or weapon parts unless specifically permitted by law and accepted through a compliant route.",
          "Narcotics, psychotropic substances, intoxicants, or controlled substances without lawful authorization.",
          "Currency, negotiable instruments, bearer bonds, bullion, precious stones, or similar high-risk valuables unless expressly accepted in writing.",
          "Live animals, human remains, biological substances, infectious materials, or medical specimens unless a compliant specialist movement is approved.",
          "Any item prohibited by airline, airport, customs, IATA, DGCA, security agency, or applicable government authority."
        ]
      },
      {
        title: "Restricted goods",
        body: "Restricted goods may require documentation, declaration, special packing, compliance review, and airline approval before movement can be considered.",
        items: [
          "Lithium batteries, battery-powered equipment, electronics, laptops, power banks, and similar devices.",
          "Dangerous goods, chemicals, aerosols, liquids, powders, paints, adhesives, gases, flammables, corrosives, and regulated materials.",
          "Temperature-sensitive, perishable, medical, pharma, diagnostic, or healthcare cargo.",
          "High-value cargo, confidential documents, luxury goods, prototypes, and sensitive commercial shipments.",
          "Oversized, fragile, sharp, magnetic, pressurized, or specially handled cargo."
        ]
      },
      {
        title: "Shipper responsibility",
        body: "The shipper is responsible for accurate declaration, legal ownership, packing suitability, documents, invoice details, permits, MSDS, declarations, and compliance information. PORTADOR SOS may refuse, hold, return, or cancel a shipment if details are incomplete, misleading, unsafe, non-compliant, or not accepted by airline or airport authorities."
      },
      {
        title: "Acceptance is not guaranteed",
        body: "Urgent movement depends on service feasibility, air cargo timing, cargo type, documentation, packing, regulatory approval, and cargo acceptance. PORTADOR SOS does not guarantee movement for restricted or regulated cargo until feasibility and acceptance are confirmed."
      }
    ]
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How PORTADOR SOS collects, uses, protects, and handles customer and shipment information.",
    updated: "2026",
    sections: [
      {
        title: "Information we collect",
        body: "PORTADOR SOS may collect information needed to check, quote, coordinate, support, and complete time-critical logistics requests.",
        items: [
          "Name, company name, phone number, email address, billing information, and communication details.",
          "Shipment origin, destination, pickup address, delivery address, consignee details, cargo description, weight, dimensions, declared value, documents, and special handling information.",
          "WhatsApp, phone, email, form, and website interaction details related to shipment support.",
          "Device, browser, analytics, cookie, and website usage information where applicable."
        ]
      },
      {
        title: "How we use information",
        body: "Information is used for operations-led logistics coordination and customer support.",
        items: [
          "To respond to enquiries, prepare quotes, check feasibility, and coordinate urgent movement.",
          "To verify shipment information, documentation, compliance requirements, pickup, airport support, and destination coordination.",
          "To communicate service updates, exceptions, payment information, operational instructions, and support responses.",
          "To improve website quality, customer experience, fraud prevention, safety, compliance, and internal operations."
        ]
      },
      {
        title: "Information sharing",
        body: "PORTADOR SOS may share relevant information with operational partners only where needed for service coordination, legal compliance, safety, or support.",
        items: [
          "Airline, airport, terminal, pickup, delivery, documentation, payment, technology, and customer support partners.",
          "Government, regulatory, security, law enforcement, customs, or judicial authorities where required by law.",
          "Professional advisers or service providers under appropriate confidentiality and security obligations."
        ]
      },
      {
        title: "Data security",
        body: "PORTADOR SOS uses reasonable administrative, technical, and operational safeguards to protect information. No digital transmission or storage method is completely risk-free, and customers should avoid sharing unnecessary sensitive information unless required for shipment review."
      },
      {
        title: "Consent and updates",
        body: "By using PORTADOR SOS services or sharing shipment details, you consent to this Privacy Policy. We may update this policy from time to time. Updated versions will be posted on the website with the latest effective period."
      },
      {
        title: "Contact",
        body: `For privacy questions, contact ${site.email} or call ${site.phone}.`
      }
    ]
  },
  {
    slug: "booking-refund-policy",
    title: "Booking & Refund Policy",
    description: "Booking, cancellation, refund, claim, liability, and shipment handling policy for PORTADOR SOS services.",
    updated: "2026",
    sections: [
      {
        title: "Booking basis",
        body: "All bookings are accepted on a said-to-contain basis. PORTADOR SOS relies on the shipper's declaration of contents, weight, dimensions, invoice value, packaging, documentation, and handling requirements."
      },
      {
        title: "Risk items and acceptance",
        body: "Battery cargo, dangerous goods, restricted goods, fragile cargo, high-value cargo, perishables, temperature-controlled cargo, medical equipment, liquids, chemicals, and similar items require accurate declaration and may require additional review. Acceptance depends on airline rules, service feasibility, documentation, packing, regulatory requirements, and cargo handling."
      },
      {
        title: "Freight on value and liability",
        body: "Declared value and freight on value, if applicable and accepted, must be confirmed before shipment movement. Unless expressly agreed in writing, PORTADOR SOS liability is limited and does not include indirect loss, business loss, production loss, profit loss, market loss, emotional loss, consequential damages, or losses caused by incorrect declaration, inadequate packing, regulatory hold, force majeure, airline refusal, airport delay, or consignee unavailability."
      },
      {
        title: "Delay",
        body: "Time-critical logistics depends on pickup readiness, air cargo timing, cargo acceptance, airport operations, flight movement, security checks, weather, traffic, documentation, and destination support. PORTADOR SOS works to coordinate the fastest feasible movement but does not guarantee delivery time unless specifically agreed in writing."
      },
      {
        title: "Cancellation and refund",
        body: "Refund eligibility depends on the booking stage and costs already incurred.",
        items: [
          "If cancellation is requested before operational work, pickup, booking, partner allocation, or airline processing begins, a refund may be considered after deducting applicable administrative or payment gateway charges.",
          "If pickup, documentation, airport processing, airline booking, partner deployment, hand-carry planning, or any operational cost has begun, partial refund or no refund may apply.",
          "No refund is due where shipment movement fails due to false declaration, prohibited goods, missing documents, non-compliant packing, consignee refusal, regulatory hold, airline refusal, or shipper-side delay."
        ]
      },
      {
        title: "Claims",
        body: "Claims must be submitted promptly with booking reference, invoice, proof of value, photographs where applicable, delivery remarks, and supporting documents. Claims are reviewed based on shipment facts, declared value, accepted liability terms, and applicable law."
      },
      {
        title: "Returns, duties, and taxes",
        body: "Return shipment, storage, reattempt, duties, taxes, penalties, demurrage, customs charges, airline charges, terminal charges, and other statutory or operational charges are payable by the customer unless agreed otherwise in writing."
      }
    ]
  },
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    description: "Service terms for PORTADOR SOS, PORTADOR EXPRESS, PORTADOR BLACK, and PORTADOR GLOBAL logistics services.",
    updated: "2026",
    sections: [
      {
        title: "Service agreement",
        body: "By requesting, booking, paying for, or using PORTADOR services, the customer agrees to these Terms & Conditions. PORTADOR Logistics Pvt. Ltd. provides operations-led, time-critical air logistics coordination under the PORTADOR SOS brand and related service lines."
      },
      {
        title: "Service names",
        body: "PORTADOR services are structured as follows.",
        items: [
          "PORTADOR SOS: Same-Day Air Cargo + Next Flight Out / NFO urgent movement feasibility.",
          "PORTADOR EXPRESS: Next Business Day / Second Business Day Premium Air Cargo.",
          "PORTADOR BLACK: OBC / Hand Carry / Runner / VIP Logistics.",
          "PORTADOR GLOBAL: Urgent International Import / Export Air Cargo."
        ]
      },
      {
        title: "User responsibilities",
        body: "The customer must provide complete and accurate shipment details, lawful ownership or authority to ship, accurate declared value, correct addresses, consignee details, documents, permits, invoices, MSDS or declarations where applicable, and timely payment. The customer must also ensure cargo readiness and receiver availability."
      },
      {
        title: "Prohibited and restricted items",
        body: "Customers must not ship prohibited goods. Restricted, dangerous, battery, regulated, high-value, fragile, perishable, medical, or temperature-sensitive cargo must be declared before booking and may be refused if route, documentation, packing, compliance, or airline acceptance is not suitable."
      },
      {
        title: "Packaging",
        body: "The shipper is responsible for suitable packaging unless PORTADOR expressly agrees to provide packing support. Inadequate, unsafe, leaking, weak, mislabelled, or non-compliant packaging may result in refusal, delay, damage, return, or cancellation."
      },
      {
        title: "Liability",
        body: "PORTADOR's liability, if any, is limited to the terms agreed for the shipment and applicable law. PORTADOR is not liable for indirect, consequential, special, business, production, profit, reputation, travel, tender, or opportunity losses. PORTADOR is not liable for delays or losses caused by incorrect declaration, prohibited goods, regulatory action, airline refusal, weather, traffic, security checks, force majeure, airport restrictions, customs issues, consignee unavailability, or third-party operational constraints."
      },
      {
        title: "Flight and operational delay recalculation",
        body: "If a flight is cancelled, delayed, rerouted, offloaded, or impacted by airline, airport, weather, security, or operational reasons, the estimated TAT will be recalculated accordingly and delay claims will not be entertained."
      },
      {
        title: "Payment",
        body: "Charges must be paid as agreed before, during, or after service based on the booking terms. Additional charges may apply for reattempts, waiting, cancellation, storage, return, duties, taxes, terminal charges, airline charges, documentation, special handling, or route changes."
      },
      {
        title: "Cancellation",
        body: "Cancellation requests are handled under the Booking & Refund Policy. Refunds, if any, depend on the stage of operational work and costs already incurred."
      },
      {
        title: "Dispute resolution and jurisdiction",
        body: "These Terms & Conditions are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of competent courts at New Delhi, India."
      },
      {
        title: "Contact",
        body: `For service questions, contact ${site.email}, call ${site.phone}, or write to ${site.address.street}, ${site.address.city} ${site.address.postalCode}, ${site.address.country}.`
      }
    ]
  }
];

export function getLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}
