import { Format } from './Format';

describe('Format', () => {

  let instance: Format;
  const DIALOG = '- {0}, yo soy tu {1}';
  const VADER_TEXT = '- Luke, yo soy tu padre';
  const LUKE_TEXT = '- Vader, yo soy tu hijo';
  const VOID_TEXT = '- , yo soy tu ';
  const OVER_TEXT = 'Hola papi!';
  const I_HAVE_SQUADS = 'Tengo {0} cazas imperiales';
  const I_HAVE_1000_SQUADS = 'Tengo 1000 cazas imperiales';

  beforeEach(() => {
    instance = new Format();
  });

  it('existe la instancia', () => {
    expect(instance).toBeDefined();
  });

  it('tiene un método de interpolación', () => {
    expect(Format.interpolate).toBeDefined();
  });

  describe('la interpolación para el texto ', () => {
    it('debe devolver ' + `${VADER_TEXT}`, () => {
      expect(Format.interpolate(DIALOG, 'Luke', 'padre')).toBe(VADER_TEXT);
    });
    it('debe devolver ' + `${LUKE_TEXT}`, () => {
      expect(Format.interpolate(DIALOG, 'Vader', 'hijo')).toBe(LUKE_TEXT);
    });
    it('si no hay valores ' + `${VOID_TEXT}`, () => {
      expect(Format.interpolate(DIALOG)).toBe(VOID_TEXT);
    });
    it('si hay valores pero no interpolaciones' + `${OVER_TEXT}`, () => {
      expect(Format.interpolate(OVER_TEXT, 'Vader', 'Luke')).toBe(OVER_TEXT);
    });
    it('los argumentos deben ser strings' + `${I_HAVE_SQUADS}`, () => {
      const A_THOUSHAND = 1000;
      // expect(Format.interpolate(I_HAVE_SQUADS, A_THOUSHAND)).toBe(I_HAVE_1000_SQUADS);
      expect(Format.interpolate(I_HAVE_SQUADS, A_THOUSHAND.toString())).toBe(I_HAVE_1000_SQUADS);
    });
  });

});
