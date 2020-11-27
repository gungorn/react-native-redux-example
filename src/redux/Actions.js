import { YER_EKLE } from './ActionTypes';

export const ekleYer = yerAdi => {
    return {
        type: YER_EKLE,
        payload: yerAdi
    }
}