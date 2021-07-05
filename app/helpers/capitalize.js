import { helper } from '@ember/component/helper';

function capitalize([string]) {
  return string.toUpperCase();
}

export default helper(capitalize);
