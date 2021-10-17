export interface Subtitle {
    original: string;
    second: number;
    translate: string;
}

export type Subtitles = {
    [key: number]: Subtitle;
}