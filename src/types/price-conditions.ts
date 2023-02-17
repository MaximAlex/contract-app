import { TBase } from "./base";

export interface Type {
    id: string;
    value: string;
}

export interface MeasureInputType {
    id: string;
}

export interface Measure {
    id: string;
    value: string;
    type: Type;
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

export interface RootObject {
    measure?: Measure;
    unit?: any;
    timeBasis?: any;
    rounding?: any;
    operator?: Operator;
    value?: string;
    value2?: any;
}

export type TPriceCondition = RootObject & TBase;
