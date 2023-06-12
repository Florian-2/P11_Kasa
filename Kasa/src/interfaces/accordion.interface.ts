export type CryptoId = ReturnType<typeof crypto.randomUUID>;

export interface Accordion {
    id: CryptoId;
    title: string;
    description: string;
}