export type Theme = {
    colors: {
        backgroundColor: string;
        primaryTextColor: string;
        secondaryTextColor: string;
        cardBackgroundColor: string;
        linkHoverColor: string;
    }
    media: {
        medium: string;
        small: string;
        extraSmall: string
    }
}

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}