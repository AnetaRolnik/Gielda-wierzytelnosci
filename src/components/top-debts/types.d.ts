export type DebtName = string;
export type DebtNIP = string;
export type DebtValue = number;
export type DebtDate = Date;
export type DebtId = number;
export type SortBy = string;
export type SortOrder = string;

export type DebtWithoutId = {
  Name: DebtName;
  NIP: DebtNIP;
  Value: DebtValue;
  Date: DebtDate;
};

export type DebtWithId = DebtWithoutId & {
  Id: DebtId;
};

export type Debts = DebtWithId[] | [];

export type SortHandler = (sortBy: SortBy, sortOrder: SortOrder) => void;
