import { classNames } from './classNames';

describe('classNames', () => {
    test('baseClass', () => {
        expect(classNames('class')).toBe('class');
    });

    test('withAddiction', () => {
        expect(classNames('baseClass', {}, ['addictionClass'])).toBe('baseClass addictionClass');
    });

    test('multipleAddictionClasses', () => {
        expect(classNames('baseClass', {}, ['addictionClass1', 'addictionClass2']))
            .toBe('baseClass addictionClass1 addictionClass2');
    });

    test('withTrueMod', () => {
        expect(classNames('baseClass', { modeClass: true })).toBe('baseClass modeClass');
    });

    test('withFalseMod', () => {
        expect(classNames('baseClass', { modeClass: false })).toBe('baseClass');
    });

    test('withTrueModeAndAddictions', () => {
        expect(classNames('baseClass', { modeClass: true }, ['addictionClass']))
            .toBe('baseClass addictionClass modeClass');
    });
});
