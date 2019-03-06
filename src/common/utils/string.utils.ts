export const matchesQuery = (field: string, query: string): boolean => {
    return query ? field.toLowerCase().includes(query.toLowerCase()) : true;
};
