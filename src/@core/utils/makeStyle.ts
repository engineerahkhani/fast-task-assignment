import cnj from 'classnames';
import { createUseStyles as makeStyles } from 'react-jss';
import { ITheme } from '../types/theme';

type cusType = (obj: ITheme) => Record<string, any>;

const createUseStyles = <T>(
  el: cusType | Record<string, any> // @ts-ignore
): ((props?: any) => ClassNameMap<string>) => makeStyles<any, T>(el);

export { cnj, createUseStyles };
