import { SelectProps } from "../components/form-elements/select/Select";

export type FormStateType = {
  consumption: number | null;
  startDate: Date | undefined;
  duration: {
    hours?: number;
    minutes?: number;
  };
};

export const initialFormState: FormStateType = {
  consumption: 0,
  startDate: undefined,
  duration: {
    hours: 0,
    minutes: 30,
  },
};

export const minutesOptionsData: SelectProps["options"] = [
  { value: "0", label: "0 minutes" },
  { value: "15", label: "15 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
];

export const hoursOptionsData: SelectProps["options"] = [...Array(24).keys()].map((hour) => {
  return { value: `${hour}`, label: `${hour} hours` };
});
