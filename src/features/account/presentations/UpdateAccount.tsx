import { Account } from '../aggregates/domain-models/account.model' 
import { updateAccountUseCase } from '../use-cases/updateAccountUseCase'

type Props = {}

function UpdateAccount({}: Props) {
    const updateAccount = (account: Account) => {
        updateAccountUseCase(account)
    }

  return (
    <div>UpdateAccount
        <button>update account here</button>
    </div>
  )
}

export default UpdateAccount