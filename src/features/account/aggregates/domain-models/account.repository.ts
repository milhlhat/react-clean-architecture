import { Account } from "./account.model";

export interface AccountRepository {
    getAccountById(id: string): Promise<Account>;
    getAccountByUserName(userName: string): Promise<Account>;
    getAccountByEmail(email: string): Promise<Account>;
    getAccounts(): Promise<Account[]>; 
    createAccount(account: Account): Promise<Account>;
    updateAccountById(account: Partial<Account>, id: string): Promise<Account>;
    deleteAccount(id: string): Promise<void>;
    validateAccount(account: Account): void;
}