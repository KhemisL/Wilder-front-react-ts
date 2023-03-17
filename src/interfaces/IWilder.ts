export interface ISkill {
  id: number;
  name: string;
}
export interface IWilder {
  id: number;
  name: string;
  city: number;
  skills: ISkill[];
}
