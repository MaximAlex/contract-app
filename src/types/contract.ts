import { TDatePeriod } from "./common/TDatePeriod"

export interface Holder {
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code?: string;
    name?: string;
    supplierCode2?: string;
    supplierCode3?: string;
    isContractHolder?: boolean;
    isCounterParty?: boolean;
    isAviationAuthority?: boolean;
    isAirportOperator?: boolean;
    isBroker?: boolean;
    isCustomer?: boolean;
    isIntoPlaneAgent?: boolean;
    isSupplier?: boolean;
    isAirline?: boolean;
    isGroundHandler?: boolean;
    doAccounting?: boolean;
    validityPeriod?: TDatePeriod;
    isUsedInForecast?: any;
    isSystem?: boolean;
    client?: any;
    airlineCode2?: string;
    airlineCode3?: string;
    companyGroup?: any;
    portalRefId?: any;
}

export interface ValidityPeriod2 {
    from?: string;
    to?: string;
}

export interface Counterparty {
    id?: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code?: string;
    name?: string;
    supplierCode2?: any;
    supplierCode3?: string;
    isContractHolder?: boolean;
    isCounterParty?: boolean;
    isAviationAuthority?: boolean;
    isAirportOperator?: boolean;
    isBroker?: boolean;
    isCustomer?: boolean;
    isIntoPlaneAgent?: boolean;
    isSupplier?: boolean;
    isAirline?: boolean;
    isGroundHandler?: boolean;
    doAccounting?: boolean;
    validityPeriod?: ValidityPeriod2;
    isUsedInForecast?: any;
    isSystem?: boolean;
    client?: any;
    airlineCode2?: any;
    airlineCode3?: any;
    companyGroup?: any;
    portalRefId?: any;
}

export interface ValidityPeriod3 {
    from?: string;
    to?: string;
}

export interface Customer {
    id?: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code?: string;
    name?: string;
    supplierCode2?: any;
    supplierCode3?: any;
    isContractHolder?: boolean;
    isCounterParty?: boolean;
    isAviationAuthority?: boolean;
    isAirportOperator?: boolean;
    isBroker?: boolean;
    isCustomer?: boolean;
    isIntoPlaneAgent?: boolean;
    isSupplier?: boolean;
    isAirline?: boolean;
    isGroundHandler?: boolean;
    doAccounting?: boolean;
    validityPeriod?: ValidityPeriod3;
    isUsedInForecast?: any;
    isSystem?: boolean;
    client?: any;
    airlineCode2?: string;
    airlineCode3?: string;
    companyGroup?: any;
    portalRefId?: any;
}

export interface TransactionType {
    id?: string;
    value?: number;
    description?: string;
    name?: string;
}

export interface AgreementType {
    id?: string;
    description?: string;
    name?: string;
    value?: number;
}


export interface Type {
    id?: string;
    name?: string;
    description?: string;
    value?: number;
}

export interface Reference {
    id?: string;
    value?: number;
    name?: string;
    description?: string;
}

export interface CreditTerm {
    type?: Type;
    reference?: Reference;
    netTerms?: number;
}

export interface AllowedFrequency {
    id?: string;
    value?: number;
    name?: string;
    code?: string;
}

export interface Aggregation {
    id?: string;
    name?: string;
    implemented?: boolean;
    allowedFrequencies?: AllowedFrequency[];
    value?: number;
    code?: string;
}

export interface FinancialSource {
    id?: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    sourceCode?: string;
    isSourceStandard?: boolean;
    name?: any;
    comments?: any;
    currency?: any;
    defaultAggregationMethod?: any;
    validity?: any;
}

export interface Offset {
    id?: string;
    value?: number;
    name?: string;
    description?: string;
}

export interface Forex {
    aggregation?: Aggregation;
    financialSource?: FinancialSource;
    offset?: Offset;
}

export interface InvoiceFrequency {
    id?: string;
    value?: number;
    description?: string;
    name?: string;
}

export interface InvoiceType {
    id?: string;
    value?: number;
    description?: string;
    name?: string;
}

export interface PaymentType {
    id?: string;
    description?: string;
    name?: string;
    value?: number;
}

export interface PaymentTerm {
    currency?: string;
    forex?: Forex;
    invoiceFrequency?: InvoiceFrequency;
    invoiceType?: InvoiceType;
    paymentType?: PaymentType;
    paymentComment?: any;
}

export interface CostGroup {
    id?: string;
    version?: number;
    userCreated?: string;
    userModified?: any;
    dateCreated?: string;
    dateModified?: any;
    code?: string;
    name?: string;
}

export interface Country {
    id?: string;
    version?: number;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code?: string;
    name?: string;
    continent?: any;
    refCountry?: any;
}

export interface Scope {
    location?: any;
    country?: Country;
}

export interface Status {
    id?: string;
}

export interface TBase {
    code?: string;
    holder?: Holder;
    counterparty?: Counterparty;
    customers?: Customer[];
    transactionType?: TransactionType;
    agreementType?: AgreementType;
    validityPeriod?: TDatePeriod;
    creditTerm?: CreditTerm;
    paymentTerm?: PaymentTerm;
    costGroups?: CostGroup[];
    scopes?: Scope[];
    selfReporting?: boolean;
    draft?: boolean;
    responsible?: any;
    status?: Status;
}


export type TContract = Type & TBase;