export interface TagParameters {
    tag: string,
    alt: string
};

export interface CardParameters {
    tags: TagParameters[],
    cardType: 'chapter' | 'case study',
    category: string,
    title: string,
    previewImage: string
}

export interface TinyCardParams {
    previewImage : string;
    title : string;
    tags : TagParameters[];
}