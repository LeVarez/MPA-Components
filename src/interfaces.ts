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

export interface StickyMenuOption{
    title : string;
    id : string;
}

export interface TagParameters {
    tag : string;
    alt : string;
    group? : number;
};

export interface TagsMenu {
    circularMenuConfig : CircleMenuConfig;
    wherein : TagParameters[];
    whatsabout : TagParameters[];
    goodfor : TagParameters[];
};

export interface Segment {
    startAngle : number;
    endAngle : number;
    element : MenuElement;
}
export interface MenuElement {
    percentatge : number;
    group : number;
    title : string;
}

export interface CircleMenuThickness{
    unselected : number;
    group : number;
    gain : number;
}

export interface CircleMenuColors{
    selected : string;
    unselected : string;
    border : string;
}

export interface CircleMenuConfig{
    radius : number;
    thickness : CircleMenuThickness
    x : number;
    y : number;
    gap : number;
    color : CircleMenuColors;
    initialIndex: number;
    width? : number;
    height? : number;
    animationDuration? : number; //seconds
}

export interface TextSlide{
    title: string;
    content: string;
}