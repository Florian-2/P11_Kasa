export type CryptoId = ReturnType<typeof crypto.randomUUID>;

export interface Accordion {
    title: string;
    description: string | string[];
}