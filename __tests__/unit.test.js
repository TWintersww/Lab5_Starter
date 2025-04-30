// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('test valid phone number of length 10 with hyphens', () => {
  expect(isPhoneNumber('949-949-9449')).toBe(true);
});
test('test valid phone number of length 10 with hyphens and brackets', () => {
  expect(isPhoneNumber('(121)-212-1212')).toBe(true);
});
test('test invalid phone number of length 8', () => {
  expect(isPhoneNumber('79797979')).toBe(false);
});
test('test invalid phone number of length 10 with letter', () => {
  expect(isPhoneNumber('123456789a')).toBe(false);
});

test('test valid email', () => {
  expect(isEmail('bobbarb@gmail.com')).toBe(true);
});
test('test valid email with ucsd domain', () => {
  expect(isEmail('evwu@ucsd.edu')).toBe(true);
});
test('test invalid email without @', () => {
  expect(isEmail('bobdolegmail.com')).toBe(false);
});
test('test invalid email without domain', () => {
  expect(isEmail('bobdole@')).toBe(false);
});

test('test valid strong password', () => {
  expect(isStrongPassword('acbwefoji')).toBe(true);
});
test('test valid strong password with underscore', () => {
  expect(isStrongPassword('p_bawesdo')).toBe(true);
});
test('test invalid strong password starting with number', () => {
  expect(isStrongPassword('8asdfnjkawe')).toBe(false);
});
test('test invalid strong password that is too long', () => {
  expect(isStrongPassword('awoihednskvanfnljksdb')).toBe(false);
});

test('test valid date', () => {
  expect(isDate('12/09/2005')).toBe(true);
});
test('test valid date that is very old', () => {
  expect(isDate('03/24/1802')).toBe(true);
});
test('test invalid date with extra spaces', () => {
  expect(isDate('03 /02/  2005')).toBe(false);
});
test('test invalid date with Y/M/D format', () => {
  expect(isDate('2012/08/09')).toBe(false);
});

test('test valid hex code of length 3 lowercase without #', () => {
  expect(isHexColor('abc')).toBe(true);
});
test('test valid hex code of length 6 uppercse with #', () => {
  expect(isHexColor('#FF00FF')).toBe(true);
});
test('test invalid hex code with non-hex characters', () => {
  expect(isHexColor('#GG00GG')).toBe(false);
});
test('test invalid hex code of length 4', () => {
  expect(isHexColor('#bcde')).toBe(false);
});
