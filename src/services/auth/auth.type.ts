import { ERole } from "./auth.enum";

export type TUser = {
    email?: string;
    fullName?: string;
    username?: string;
    phone?: string;
    role?: ERole;
}