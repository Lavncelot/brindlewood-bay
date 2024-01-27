import { SCHEMAS } from './schemas/_index.js';

Hooks.once('pbtaSheetConfig', () => {
  game.settings.set('pbta', 'sheetConfigOverride', true);

  game.pbta.sheetConfig = SCHEMAS[game.i18n.lang] ?? SCHEMAS['en'];
});
