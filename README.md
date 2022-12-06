# Clean Architecture
- # Folder style 1
.
├── adapters
├── domain
│   ├── transaction
│   │   ├── transaction.entity.ts
│   │   ├── transaction.model.ts
│   │   └── transaction.repository.ts
│   └── user
├── presentations
│   ├── transaction
│   │   ├── TransactionCreate
│   │   │   ├── style.css
│   │   │   └── TransactionCreate.tsx
│   │   └── TransactionList
│   │       ├── style.css
│   │       ├── TransactionItem.tsx
│   │       └── TransactionList.tsx
│   └── user
├── use-cases
│   ├── transaction
│   │   ├── createTransactionUseCase.ts
│   │   ├── deleteTransactionUseCase.ts
│   │   └── listTransactionUseCase.ts
│   └── user
├── utils
│   ├── exceptionUtil.ts
│   └── toastUtil.ts
├── App.tsx

- # Folder style 2