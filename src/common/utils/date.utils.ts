export function surveyDateToLocaleString(unixtime: number): string {
    return new Date(unixtime * 1000).toLocaleString();
}
