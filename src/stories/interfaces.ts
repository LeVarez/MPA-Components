export interface tagParameters {tag: string, alt: string};

export interface cardParameters {
    tags: tagParameters[],
    cardType: 'chapter' | 'case study',
    category: string,
    title: string,
    previewImage: string,
    active: boolean
}

export interface caseStudyParameters {
    title: string,
    name: string,
    established: string,
    size: string,
    highlight: {lat: number, lon: number},
    governance: string,
    staff: string,
    budget: string,
    b_level: string,
    backgroundImagePath: string
}