import React from 'react'
import { Account } from '../aggregates/domain-models/account.model'
import { createAccountUseCase, importAccountFromExcel } from '../use-cases/createAccountUseCase'

function CreateAccount() {
    const createAccount = (account: Account) => {
        createAccountUseCase(account)
    }

    const createAccountByExcel = (file: File) => {
        importAccountFromExcel(file);
    }

    return (
        <div>CreateAccount
            <button>create account manual here</button>
            <button>create account by excel here</button>

        </div>
    )
}

export default CreateAccount