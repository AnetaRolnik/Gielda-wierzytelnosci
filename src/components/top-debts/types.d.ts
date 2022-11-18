export type DebtName = string;
export type DebtNIP = string;
export type DebtValue = number;
export type DebtDate = Date;
export type DebtId = number;

export type DebtWithoutId = {
  Name: DebtName;
  NIP: DebtNIP;
  Value: DebtValue;
  Date: DebtDate;
};

export type DebtWithId = Debt & {
  Id: DebtId;
};

export type Debts = DebtWithId[];
