export type THeaderTable = {
    column: any;
    id: string;
    text: string;
}

export type TBodyTable = {
    id: string;
    column: string;
    children?: any;
}

export type TTables = {
    header: THeaderTable[];
    body?: TBodyTable[];
    data?: any;
}