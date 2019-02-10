export const epochToLocaleString = (epoch: number): string => new Date(epoch * 1000).toLocaleString();
