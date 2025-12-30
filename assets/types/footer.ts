export type FooterItem =
    | FooterLinkItem
    | FooterSocialItem
    | FooterTextItem;

export interface FooterLinkItem {
    type: 'link';
    text: string;
    link: string;
}

export interface FooterSocialItem {
    type: 'social';
    icons: {
        name: string;
        url: string;
        icon: string;
    }[];
}

export interface FooterTextItem {
    type: 'phone' | 'email';
    text: string;
    link: string;
}

export interface FooterData {
    footer: {
        columns: {
            title: string;
            items: FooterItem[];
        }[];
    };
}
