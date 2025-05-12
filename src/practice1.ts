import { Equal, Expect } from '@total-typescript/helpers';

export const programModes = [
  'group',
  'announcement',
  '1on1',
  'selfDirected',
  'planned1on1',
  'plannedSelfDirected',
] as const;

type AllPrograms = (typeof programModes)[0|1|2|3|4|5];

type test = Expect<
  Equal<
    AllPrograms,
    | 'group'
    | 'announcement'
    | '1on1'
    | 'selfDirected'
    | 'planned1on1'
    | 'plannedSelfDirected'
  >
>;