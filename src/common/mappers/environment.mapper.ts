import { Environment } from '../types/environment.type';

export const mapStringToEnvironment = (value?: string): Environment => {
    switch (value) {
        case 'development':
            return Environment.Development;
        case 'production':
        default:
            return Environment.Production;
    }
};
