import { helper } from '@ember/component/helper';

function compare([original, target]) {
  return original == target;
}

export default helper(compare);
