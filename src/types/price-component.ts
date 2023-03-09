import { TBase } from "./base";
import { TDatePeriod } from "./common/TDatePeriod";
import { TPriceCondition } from "./price-conditions";
import { TPriceParamters } from "./price-paramters";

export interface Holder {
    id: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code: string;
    name: string;
    supplierCode2: string;
    supplierCode3: string;
    isContractHolder: boolean;
    isCounterParty: boolean;
    isAviationAuthority: boolean;
    isAirportOperator: boolean;
    isBroker: boolean;
    isCustomer: boolean;
    isIntoPlaneAgent: boolean;
    isSupplier: boolean;
    isAirline: boolean;
    isGroundHandler: boolean;
    doAccounting: boolean;
    validityPeriod: TDatePeriod;
    isUsedInForecast?: any;
    isSystem: boolean;
    client?: any;
    airlineCode2: string;
    airlineCode3: string;
    companyGroup?: any;
    portalRefId?: any;
}

export interface Counterparty {
    id: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code: string;
    name: string;
    supplierCode2?: any;
    supplierCode3?: any;
    isContractHolder: boolean;
    isCounterParty: boolean;
    isAviationAuthority: boolean;
    isAirportOperator: boolean;
    isBroker: boolean;
    isCustomer: boolean;
    isIntoPlaneAgent: boolean;
    isSupplier: boolean;
    isAirline: boolean;
    isGroundHandler: boolean;
    doAccounting: boolean;
    validityPeriod: TDatePeriod;
    isUsedInForecast?: any;
    isSystem: boolean;
    client?: any;
    airlineCode2?: any;
    airlineCode3?: any;
    companyGroup?: any;
    portalRefId?: any;
}

export interface ValidityPeriod3 {
    from: string;
    to: string;
}

export interface Customer {
    id: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code: string;
    name: string;
    supplierCode2: string;
    supplierCode3: string;
    isContractHolder: boolean;
    isCounterParty: boolean;
    isAviationAuthority: boolean;
    isAirportOperator: boolean;
    isBroker: boolean;
    isCustomer: boolean;
    isIntoPlaneAgent: boolean;
    isSupplier: boolean;
    isAirline: boolean;
    isGroundHandler: boolean;
    doAccounting: boolean;
    validityPeriod: ValidityPeriod3;
    isUsedInForecast?: any;
    isSystem: boolean;
    client?: any;
    airlineCode2: string;
    airlineCode3: string;
    companyGroup?: any;
    portalRefId?: any;
}

export interface TransactionType {
    id: string;
    value: number;
    description: string;
    name: string;
}

export interface AgreementType {
    id: string;
    description: string;
    name: string;
    value: number;
}

export interface ValidityPeriod4 {
    from: string;
    to: string;
}

export interface Type {
    id: string;
    name: string;
    description: string;
    value: number;
}

export interface Reference {
    id: string;
    value: number;
    name: string;
    description: string;
}

export interface CreditTerm {
    type: Type;
    reference: Reference;
    netTerms: number;
}

export interface AllowedFrequency {
    id: string;
    value: number;
    name: string;
    code: string;
}

export interface Aggregation {
    id: string;
    name: string;
    implemented: boolean;
    allowedFrequencies: AllowedFrequency[];
    value: number;
    code: string;
}

export interface FinancialSource {
    id: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    sourceCode: string;
    isSourceStandard: boolean;
    name?: any;
    comments?: any;
    currency?: any;
    defaultAggregationMethod?: any;
    validity?: any;
}

export interface Offset {
    id: string;
    value: number;
    name: string;
    description: string;
}

export interface Forex {
    aggregation: Aggregation;
    financialSource: FinancialSource;
    offset: Offset;
}

export interface InvoiceFrequency {
    id: string;
    value: number;
    description: string;
    name: string;
}

export interface InvoiceType {
    id: string;
    value: number;
    description: string;
    name: string;
}

export interface PaymentType {
    id: string;
    description: string;
    name: string;
    value: number;
}

export interface PaymentTerm {
    currency: string;
    forex: Forex;
    invoiceFrequency: InvoiceFrequency;
    invoiceType: InvoiceType;
    paymentType: PaymentType;
    paymentComment?: any;
}

export interface CostGroup {
    id: string;
    version: number;
    userCreated: string;
    userModified: string;
    dateCreated: string;
    dateModified: string;
    code: string;
    name: string;
}

export interface Location {
    id: string;
    version: number;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    locationCode: string;
    name: string;
    code3: string;
    code4: string;
    adminUser?: any;
    isAirportFlag?: any;
    validityPeriod?: any;
    hasSupplyChainFlag?: any;
    country?: any;
    subCountry?: any;
    county?: any;
    city?: any;
    timeserie?: any;
    timezoneName?: any;
    latitude?: any;
    longitude?: any;
    defaultQuantityUnit?: any;
    defaultDensity?: any;
    defaultDensityMassUnit?: any;
    defaultDensityVolumeUnit?: any;
}

export interface Scope {
    location: Location;
    country?: any;
}

export interface Status {
    id: string;
}

export interface Contract {
    id: string;
    version: number;
    userCreated: string;
    userModified: string;
    dateCreated: string;
    dateModified: string;
    code: string;
    holder: Holder;
    counterparty: Counterparty;
    customers: Customer[];
    transactionType: TransactionType;
    agreementType: AgreementType;
    validityPeriod: ValidityPeriod4;
    creditTerm: CreditTerm;
    paymentTerm: PaymentTerm;
    costGroups: CostGroup[];
    scopes: Scope[];
    selfReporting: boolean;
    draft: boolean;
    responsible?: any;
    status: Status;
}

export interface Type2 {
    id: string;
    value: string;
}

export interface CostGroup2 {
    id: string;
    version: number;
    userCreated: string;
    userModified: string;
    dateCreated: string;
    dateModified: string;
    code: string;
    name: string;
}

export interface Validity {
    from: string;
    to?: any;
}

export interface Category {
    id?: string;
    code?: string;
    name?: string;
    type?: Type2;
    costGroup?: CostGroup2;
    accounts?: any[];
    templates?: any[];
    validity?: Validity;
    businessUnit?: any;
}

export interface AllowedFrequency2 {
    id: string;
    value: number;
    name: string;
    code: string;
}

export interface Aggregation2 {
    id: string;
    name: string;
    implemented: boolean;
    allowedFrequencies: AllowedFrequency2[];
    value: number;
    code: string;
}

export interface FinancialSource2 {
    id: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    sourceCode: string;
    isSourceStandard: boolean;
    name?: any;
    comments?: any;
    currency?: any;
    defaultAggregationMethod?: any;
    validity?: any;
}

export interface Offset2 {
    id: string;
    value: number;
    name: string;
    description: string;
}

export interface Forex2 {
    aggregation: Aggregation2;
    financialSource: FinancialSource2;
    offset: Offset2;
}

export interface BillingPoint {
    id: string;
}

export interface Validity2 {
    from: string;
    to: string;
}

export interface Rate {
    name: string;
}

export interface UnitType {
    id: string;
    name: string;
    description: string;
    value: number;
}

export interface Type3 {
    id: string;
    value: string;
}

export interface Measure {
    id: string;
    hasUnit: boolean;
    unitType: UnitType;
    value: string;
    type: Type3;
    hasRounding: boolean;
    description: string;
}

export interface Type4 {
    id: string;
    name: string;
    description: string;
    value: number;
}

export interface Unit {
    id: string;
    version?: any;
    userCreated?: any;
    userModified?: any;
    dateCreated?: any;
    dateModified?: any;
    code: string;
    name: string;
    type: Type4;
    factor?: any;
    validity?: any;
}

export interface TCalculation {
    measure: Measure;
    unit: Unit;
    rounding?: any;
    factor: number;
    ponderationPower: number;
    multipliers: any[];
    basedOn: any[];
}

export interface Validity3 {
    from: string;
    to: string;
}

export interface Rate3 {
    name: string;
}

export interface Rate2 {
    rate: Rate3;
    amount: number;
}

export interface TPricing {
    validity: TDatePeriod;
    amount: any;
}

export interface Definition {
    id?: string;
    rate?: Rate;
    calculation: TCalculation;
    conditions: Array<TPriceCondition>;
    parameters: Array<TPriceParamters>;
    pricing?: TPricing[];
}

export interface Type5 {
    id: string;
    value: string;
}

export interface MeasureInputType {
    id: string;
}

export interface Measure2 {
    id: string;
    value: string;
    type: Type5;
    hasRounding: boolean;
    description: string;
    hasUnit: boolean;
    measureInputType: MeasureInputType;
    hasBaseTime: boolean;
    unitType?: any;
}

export interface MeasureInputType2 {
    id: string;
}

export interface Operator {
    id: string;
    measureInputTypes: MeasureInputType2[];
    code: string;
    name: string;
}

export interface Condition {
    measure: Measure2;
    unit?: any;
    timeBasis?: any;
    rounding?: any;
    operator: Operator;
    value: string;
    value2?: any;
}

export interface Validity4 {
    from: string;
    to: string;
}

export interface Rate5 {
    name: string;
}

export interface Rate4 {
    rate: Rate5;
    amount: number;
}

export interface Pricing2 {
    validity: Validity4;
    rates: Rate4[];
}

export interface PriceTier {
    id: string;
    name: string;
    conditions: Array<TPriceCondition>;
    parameters: Array<TPriceParamters>;
    pricing: Pricing2[];
}

export interface Status2 {
    id: string;
}

export interface RootObject {
    contract?: Contract;
    name?: string;
    category?: Category;
    currency?: any;
    forex?: Forex2;
    continuous?: boolean;
    billingPoint?: BillingPoint;
    validity?: Validity2;
    definitions?: Definition[];
    priceTiers?: PriceTier[];
    conditions?: any[];
    draft?: boolean;
    status?: Status2;
}



export type TPriceComponent = RootObject & TBase;

