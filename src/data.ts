import errorIcon from './assets/error-vector.png';
import successIcon from './assets/correct-vector.png';

export interface InputProps {
  label: string;
  placeholder?: string;
  validation?: string;
  id: string;
  type: string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  errorIcon?: string;
  successIcon?: string;
  name: string;
  handleChange?: (e: {
    target: {
      name: string;
      value: string;
    }
  }) => void;
  handleFile?: (e: any) => void;
  value?: string;
  inputVal?: string;
}

export const inputFields: InputProps[] = [
  {
    label: 'სახელი',
    placeholder: 'ანზორ',
    validation: 'მინიმუმ 2 ასო, ქართული ასოები',
    id: "name",
    type: "text",
    required: true,
    pattern: "[\u10A0-\u10FF]+",
    minLength: 2,
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'name',
  },
  {
    label: "გვარი",
    placeholder: "მუმლაძე",
    validation: "მინიმუმ 2 ასო, ქართული ასოები",
    id: "lastname",
    type: "text",
    required: true,
    pattern: "[\u10A0-\u10FF]+",
    minLength: 2,
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'lastname'
  },
  {
    label: "პირადი ფოტოს ატვირთვა",
    type: "file",
    required: true,
    id: "file-input",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'file'
  },
  {
    label: "ჩემ შესახებ (არასავალდებულო)",
    placeholder: "ზოგადი ინფო შენ შესახებ",
    required: false,
    type: "textarea",
    id: "about-me-textarea",
    name: 'text'
  },
  {
    label: "ელ.ფოსტა",
    placeholder: "anzorr666@redberry.ge შესახებ",
    required: true,
    type: "email",
    id: "email",
    validation: "უნდა მთავრდებოდეს @redberry.ge-ით",
    pattern: ".+@redberry.ge$",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'email'
  },
  {
    label: "მობილურის ნომერი",
    placeholder: "+995 551 12 34 56",
    required: true,
    type: "text",
    id: "mobile-number",
    validation: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
    minLength: 9,
    pattern: "5[0-9]{8}",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'number'
  }
]

export const expInputFields: InputProps[] = [
  {
    label: "თანამდებიბა",
    placeholder: "დეველოპერი, დიზაინერი, ა.შ.",
    required: true,
    type: "text",
    id: "position-input",
    validation: "მინიმუმ 2 სიმბოლო",
    pattern: ".{2,}",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'position'
  },
  {
    label: "დამსაქმებელი",
    placeholder: "დამსაქმებელი",
    required: true,
    type: "text",
    id: "employer-input",
    validation: "მინიმუმ 2 სიმბოლო",
    pattern: ".{2,}",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'employer'
  },
  {
    label: 'დაწყების რიცხვი',
    placeholder: 'test',
    required: true,
    type: 'date',
    id: 'startDate',
    name: 'startDate'
  },
  {
    label: 'დამთავრების რიცხვი',
    placeholder: 'test',
    required: true,
    type: 'date',
    id: 'endDate',
    name: 'endDate'
  },
  {
    label: "აღწერა",
    placeholder: "როლი თანამდებობაზე და ზოგადი აღწერა",
    required: true,
    type: "textarea",
    id: "position-textarea",
    name: 'positionText'
  },
]

export const eduInputFields: InputProps[] = [
  {
    label: 'სასწავლებელი',
    placeholder: "სასწავლებელი",
    required: true,
    type: "text",
    id: "education-input",
    validation: "მინიმუმ 2 სიმბოლო",
    pattern: ".{2,}",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'education'
  },
  {
    label: 'ხარისხი',
    placeholder: "აირჩიეთ ხარისხი",
    required: true,
    type: "text",
    id: "degree-input",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'degree'
  },
  {
    label: 'დამთავრების რიცხვი',
    required: true,
    type: "date",
    id: "education-end-input",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'educationEnd'
  },
  {
    label: "აღწერა",
    placeholder: "განათლების აღწერა",
    required: true,
    type: "textarea",
    id: "education-textarea",
    name: 'educationText'
  }
]

export const expInputFieldsAddit: InputProps[] = [
  {
    label: "თანამდებიბა",
    placeholder: "დეველოპერი, დიზაინერი, ა.შ.",
    required: true,
    type: "text",
    id: "position-input-addit",
    validation: "მინიმუმ 2 სიმბოლო",
    pattern: ".{2,}",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'positionAddit'
  },
  {
    label: "დამსაქმებელი",
    placeholder: "დამსაქმებელი",
    required: true,
    type: "text",
    id: "employer-input-addit",
    validation: "მინიმუმ 2 სიმბოლო",
    pattern: ".{2,}",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'employerAddit'
  },
  {
    label: 'დაწყების რიცხვი',
    placeholder: 'test',
    required: true,
    type: 'date',
    id: 'startDateAddit',
    name: 'startDateAddit'
  },
  {
    label: 'დამთავრების რიცხვი',
    placeholder: 'test',
    required: true,
    type: 'date',
    id: 'endDateAddit',
    name: 'endDateAddit'
  },
  {
    label: "აღწერა",
    placeholder: "როლი თანამდებობაზე და ზოგადი აღწერა",
    required: true,
    type: "textarea",
    id: "position-textarea-addit",
    name: 'positionTextAddit'
  },
]

export const eduInputFieldsAddit: InputProps[] = [
  {
    label: 'სასწავლებელი',
    placeholder: "სასწავლებელი",
    required: true,
    type: "text",
    id: "educationAddit-input",
    validation: "მინიმუმ 2 სიმბოლო",
    pattern: ".{2,}",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'educationAddit'
  },
  {
    label: 'ხარისხი',
    placeholder: "აირჩიეთ ხარისხი",
    required: true,
    type: "text",
    id: "degreeAddit-input",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'degreeAddit'
  },
  {
    label: 'დამთავრების რიცხვი',
    required: true,
    type: "date",
    id: "educationAddit-end-input",
    errorIcon: errorIcon,
    successIcon: successIcon,
    name: 'educationEndAddit'
  },
  {
    label: "აღწერა",
    placeholder: "განათლების აღწერა",
    required: true,
    type: "textarea",
    id: "educationAddit-textarea",
    name: 'educationTextAddit'
  }
]