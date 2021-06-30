import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the header', async function (assert) {
    await render(hbs`<AddHeader />`);

    assert.dom('.header-main').exists();
    assert.dom('.header-main #header-container').exists();
  });
});
