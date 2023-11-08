export type Theme = {
    backgroundColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    cardBackgroundColor: string
}

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}