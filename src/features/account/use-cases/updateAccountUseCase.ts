import { Account } from "../aggregates/domain-models/account.model";
import { AccountService } from "../aggregates/domain-services/account.service";

export const updateAccountUseCase = async (account: Account) => {
    if(!account.id){
        throw new Error("Id is required");
    }
    const accountService = new AccountService();
    return await accountService.updateAccountById(account, account.id);
}