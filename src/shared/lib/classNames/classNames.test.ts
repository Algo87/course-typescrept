import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('classNames with only one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('classNames with additional classes', () => {
        const expected = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(expected);
    });

    test('classNames with mods', () => {
        const expected = 'someClass cls1 cls2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });

    test('classNames with mods false', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });

    test('classNames with mods undefined', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['cls1', 'cls2'],
        )).toBe(expected);
    });
});
