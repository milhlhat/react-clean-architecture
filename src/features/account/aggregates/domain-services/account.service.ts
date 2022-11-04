import { Account } from "../domain-models/account.model";
import { AccountRepository } from "../domain-models/account.repository";

export class AccountService implements AccountRepository {
    validateAccount(account: Partial<Account>): boolean {
        //validate domain rules, for example: roles must be in the list of roles and unique
        if (!account.roles || account.roles.length === 0) {
            throw new Error("Roles must be provided");
        }
        if (account.roles.length !== new Set(account.roles).size) {
            throw new Error("Roles must be unique");
        } else {
            return true;
        }
    }
    updateAccountById(account: Partial<Account>, id: string): Promise<Account> {
        if (this.validateAccount(account)) {
            // call api to update account
        }
        throw new Error("Method not implemented.");
    }
    createAccount(account: Account): Promise<Account> {
        if (this.validateAccount(account)) {
            // call api to update account
        }
        throw new Error("Method not implemented.");
    }
    getAccountById(id: string): Promise<Account> {
        throw new Error("Method not implemented.");
    }
    getAccountByUserName(userName: string): Promise<Account> {
        throw new Error("Method not implemented.");
    }
    getAccountByEmail(email: string): Promise<Account> {
        throw new Error("Method not implemented.");
    }
    getAccounts(): Promise<Account[]> {
        throw new Error("Method not implemented.");
    }

    deleteAccount(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export const accountService = new AccountService();