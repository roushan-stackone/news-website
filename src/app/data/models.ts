export interface Article {
    id: number;
    title: string;
    subTitle: string;
    content: string;
    image: string;
    country: Country;
}

export enum Country {
    INDIA = 'India',
    TURKEY = 'Turkey',
    AMERICA = 'America',
    AUSTRALIA = 'Australia'
}