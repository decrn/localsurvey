import moment from 'moment';

export const epochToLocaleString = (epoch: number): string => new Date(epoch * 1000).toLocaleString();

export const epochFromNow = (epoch: number): string => moment(epoch * 1000).fromNow();
