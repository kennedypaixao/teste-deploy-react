export interface IReportFilter {
  name: string;
  nameFilter: string;
  order: number;
  required: boolean;
  properties: string;
  type: string
}

export interface IFields {
  [key: string]: any;
}