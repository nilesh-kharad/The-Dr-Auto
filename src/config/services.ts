export type ServiceIconName =
  | "paintbrush"
  | "car"
  | "wrench"
  | "cog"
  | "air"
  | "droplets"
  | "fuel"
  | "gauge"

export type Service = {
  slug: string
  name: string
  summary: string
  description: string
  points: string[]
  icon: ServiceIconName
  image: string
  imageAlt: string
  metaTitle: string
  metaDescription: string
}

export const generalEnquiryLabel = "General enquiry"

export const services: Service[] = [
  {
    slug: "denting-painting",
    name: "Denting & Painting",
    summary: "Professional vehicle body restoration, dent removal and paintwork.",
    description:
      "Dents, scratches and tired paint are part of driving in the city. Denting and painting at THE DR AUTO covers body restoration, dent removal and paintwork. The workshop looks at the affected panels and explains the work before it starts.",
    points: ["Dent removal", "Body repair", "Paintwork"],
    icon: "paintbrush",
    image: "/images/service-denting.jpg",
    imageAlt: "Illustrative stock photo of a car with worn paint. Not a THE DR AUTO customer project.",
    metaTitle: "Denting and Painting in Katraj",
    metaDescription:
      "Denting and painting in Katraj at THE DR AUTO. Body repair, dent removal and paintwork for multi-brand cars in Pune, with the work explained before it starts.",
  },
  {
    slug: "periodic-servicing",
    name: "Car Periodic Servicing",
    summary: "Routine vehicle maintenance, inspection and preventive servicing.",
    description:
      "Periodic servicing is the routine visit: inspection, maintenance and preventive checks so small issues are spotted early. Tell the workshop the car’s brand, model and what you have noticed, and the visit can be planned around that.",
    points: ["Routine maintenance", "Inspection", "Preventive servicing"],
    icon: "car",
    image: "/images/service-servicing.jpg",
    imageAlt: "Illustrative stock photo of a technician inspecting an open engine bay.",
    metaTitle: "Periodic Car Servicing in Katraj",
    metaDescription:
      "Periodic car servicing in Katraj, Pune. THE DR AUTO handles routine maintenance, inspection and preventive servicing for multi-brand cars.",
  },
  {
    slug: "mechanical-repairs",
    name: "Mechanical Repairs",
    summary: "General mechanical repairs and component replacement.",
    description:
      "Mechanical repairs cover general workshop jobs and component replacement when a part needs to come off and a new one go on. The exact work depends on the car. The estimate is discussed before the repair proceeds.",
    points: ["General mechanical repairs", "Component replacement", "Estimate before the job"],
    icon: "wrench",
    image: "/images/service-mechanical.jpg",
    imageAlt: "Illustrative stock photo of hand tools arranged in an automotive workshop.",
    metaTitle: "Mechanical Car Repairs in Katraj",
    metaDescription:
      "Mechanical car repairs in Katraj at THE DR AUTO. General repairs and component replacement, with a clear estimate before work begins.",
  },
  {
    slug: "engine-repairs",
    name: "Engine Repairs",
    summary: "Engine-related inspection and repair services.",
    description:
      "Engine repairs start with inspection. If the engine note, temperature or starting has changed, bring that detail when you enquire. THE DR AUTO takes on engine-related inspection and repair for the cars that come into the Katraj workshop.",
    points: ["Engine inspection", "Engine-related repair", "Findings explained before further work"],
    icon: "cog",
    image: "/images/service-engine.jpg",
    imageAlt: "Illustrative stock photo of an engine accessory belt and pulleys.",
    metaTitle: "Engine Repairs in Katraj",
    metaDescription:
      "Engine inspection and repair in Katraj, Pune. THE DR AUTO looks at engine-related problems and explains the work before it goes ahead.",
  },
  {
    slug: "car-ac-service",
    name: "Car AC Service",
    summary: "Air conditioning inspection, maintenance and repair.",
    description:
      "When the cabin is not cooling, the air conditioning needs a proper look. Car AC service at the workshop covers inspection, maintenance and repair. Share the symptoms — weak cooling, odd noise, or a smell — when you get in touch.",
    points: ["AC inspection", "AC maintenance", "AC repair"],
    icon: "air",
    image: "/images/service-ac.jpg",
    imageAlt: "Illustrative stock photo of a car interior with dashboard air vents.",
    metaTitle: "Car AC Repair in Katraj",
    metaDescription:
      "Car AC repair in Katraj at THE DR AUTO. Air conditioning inspection, maintenance and repair for multi-brand cars in Pune.",
  },
  {
    slug: "car-wash-cleaning",
    name: "Car Wash & Cleaning",
    summary: "Vehicle cleaning and appearance maintenance.",
    description:
      "Washing and cleaning keep the car presentable between larger jobs. This service is for vehicle cleaning and appearance maintenance. Ask the workshop what is included when you enquire, so the visit matches what you want done.",
    points: ["Vehicle cleaning", "Appearance maintenance", "Booked around the workshop day"],
    icon: "droplets",
    image: "/images/service-wash.jpg",
    imageAlt: "Illustrative stock photo of a car being washed. Not a THE DR AUTO customer project.",
    metaTitle: "Car Wash and Cleaning in Katraj",
    metaDescription:
      "Car washing and cleaning in Katraj, Pune. THE DR AUTO offers vehicle cleaning and appearance maintenance alongside repair and servicing.",
  },
  {
    slug: "oil-change",
    name: "Oil Change",
    summary: "Engine oil and related maintenance services.",
    description:
      "An oil change is part of keeping the engine on its service rhythm. THE DR AUTO handles engine oil and related maintenance. The grade and quantity depend on the car, and that is confirmed when the car is in the workshop.",
    points: ["Engine oil change", "Related maintenance", "Spec confirmed for your car"],
    icon: "fuel",
    image: "/images/service-oil.jpg",
    imageAlt: "Illustrative stock photo of engine oil being poured during a service.",
    metaTitle: "Oil Change in Katraj",
    metaDescription:
      "Engine oil change in Katraj at THE DR AUTO. Oil and related maintenance for multi-brand cars, confirmed against the vehicle in the workshop.",
  },
  {
    slug: "car-diagnostics",
    name: "Car Diagnostics",
    summary: "Vehicle inspection and diagnostic support.",
    description:
      "Diagnostics is for the warning light, the noise, or the fault you cannot place. THE DR AUTO offers vehicle inspection and diagnostic support so the next repair is based on what the car is actually doing.",
    points: ["Vehicle inspection", "Diagnostic support", "Next step explained before repair"],
    icon: "gauge",
    image: "/images/service-diagnostics.jpg",
    imageAlt: "Illustrative stock photo of a technician inspecting a car with the bonnet open.",
    metaTitle: "Car Diagnostics in Katraj",
    metaDescription:
      "Car diagnostics and inspection in Katraj, Pune. THE DR AUTO helps trace faults before repair work is agreed.",
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getRelatedServices(slug: string, count = 3) {
  const index = services.findIndex((service) => service.slug === slug)
  if (index < 0) return services.slice(0, count)
  return Array.from({ length: count }, (_, offset) => services[(index + offset + 1) % services.length])
}

export function serviceChoices() {
  return [generalEnquiryLabel, ...services.map((service) => service.name)]
}
