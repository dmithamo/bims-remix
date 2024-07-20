import { InputType } from '~/components/utils/enums';

export const getInputPattern = (type: InputType): RegExp | undefined => {
  switch (type) {
    case InputType.email:
      return /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
    case InputType.tel:
      return /\+?(254|0)[71]\d{8}/g;
    case InputType.number:
      return /\d/;
    case InputType.date:
      return /\d{4}-\d{2}-\d{2}/;
    case InputType.time:
      return /\d{2}:\d{2}/;
    case InputType.datetime:
      return /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
    default:
      return undefined;
  }
};
