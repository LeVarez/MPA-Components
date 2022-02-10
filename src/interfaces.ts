
export interface tagParameters {tag: string, alt: string};

export interface cardParameters {
    tags: tagParameters[],
    cardType: 'chapter' | 'case study',
    category: string,
    title: string,
    previewImage: string
}