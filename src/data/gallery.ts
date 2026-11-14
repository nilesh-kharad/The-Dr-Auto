export type GalleryPhoto = {
  src: string
  alt: string
  caption: string
}

export type GalleryComparison = {
  id: string
  left: GalleryPhoto
  right: GalleryPhoto
  /**
   * Keep true until both photographs are real workshop shots of the same car.
   * Placeholder pairs are labelled as stock photos, not as customer repairs.
   */
  isPlaceholder: boolean
  caption: string
}

export const galleryNotice =
  "These photographs are royalty-free stock images used to lay out the page. They are not repairs carried out by THE DR AUTO."

export const comparisons: GalleryComparison[] = [
  {
    id: "sample-body",
    isPlaceholder: true,
    caption:
      "Photograph A and Photograph B are different stock images. They are not a before-and-after of one car, and they are not a THE DR AUTO job.",
    left: {
      src: "/images/service-denting.jpg",
      alt: "Stock photo of a car with worn paint, used only as a layout sample.",
      caption: "Photograph A",
    },
    right: {
      src: "/images/gallery-paint.jpg",
      alt: "Stock photo of a car with a clean paint finish, used only as a layout sample.",
      caption: "Photograph B",
    },
  },
  {
    id: "sample-workshop",
    isPlaceholder: true,
    caption:
      "These two workshop photographs are unrelated stock frames, shown so the comparison slider can be tried. Replace them with a real before photo and after photo of the same vehicle.",
    left: {
      src: "/images/gallery-lift.jpg",
      alt: "Stock photo of a car raised on a workshop lift.",
      caption: "Photograph A",
    },
    right: {
      src: "/images/gallery-workshop.jpg",
      alt: "Stock photo of an engine bay during inspection.",
      caption: "Photograph B",
    },
  },
]

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/about.jpg",
    alt: "Stock photo of a technician working at an open bonnet in a workshop.",
    caption: "Workshop bay",
  },
  {
    src: "/images/gallery-lift.jpg",
    alt: "Stock photo of a car on a lift inside a workshop.",
    caption: "Vehicle on a lift",
  },
  {
    src: "/images/service-mechanical.jpg",
    alt: "Stock photo of tools laid out in an automotive workshop.",
    caption: "Workshop tools",
  },
  {
    src: "/images/gallery-wheel.jpg",
    alt: "Stock photo of a technician working at a car wheel.",
    caption: "Wheel work",
  },
  {
    src: "/images/service-wash.jpg",
    alt: "Stock photo of a car being washed.",
    caption: "Washing",
  },
  {
    src: "/images/gallery-wash-detail.jpg",
    alt: "Stock photo of a person washing the front of a car.",
    caption: "Exterior cleaning",
  },
  {
    src: "/images/service-engine.jpg",
    alt: "Stock photo of an engine belt and pulleys.",
    caption: "Engine detail",
  },
  {
    src: "/images/service-diagnostics.jpg",
    alt: "Stock photo of a technician inspecting an engine bay.",
    caption: "Inspection",
  },
]

export function galleryUsesPlaceholders() {
  return comparisons.some((item) => item.isPlaceholder)
}
