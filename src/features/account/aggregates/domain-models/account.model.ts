export interface Account {
    id: string | null;
    fullName: string;
    email?: string;
    userName: string;
    roles?: string[];
}

export interface ExcelAccount {
    fullNameExcel: string;
    emailExcel?: string;
    userNameExcel: string;
}