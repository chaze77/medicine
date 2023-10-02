export interface IProgram {
  id: string;
  img?: string;
  name: string;
  category?: string | undefined;
  bigCategory?: string | undefined;
  value?: number | undefined;
  group?: string;
}

export interface IHandbookItem {
  storeName: string;
  catalogName: string;
  withInput?: boolean;
  data: IProgram[]; // Массив данных для хранилища
}

export interface IHandbookItemInjection {
  id: string;
  catalogName: string;
  group?: string;
  storeName?: string;
}
