export enum SupportiveContentType {
    Description = 'Description',
    Video = 'Video',
    SoundClip = 'SoundClip',
}

export interface Description {
    type: SupportiveContentType.Description;
    description: string;
}

export interface Video {
    type: SupportiveContentType.Video;
    url: string;
    description?: string;
}

export interface SoundClip {
    type: SupportiveContentType.SoundClip;
    url: string;
    description?: string;
}

export type SupportiveContent = Description | Video | SoundClip;
