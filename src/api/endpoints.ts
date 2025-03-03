import API_BASE_URL from './config.ts'

const ENDPOINTS = {
    AUTH:{
        LOGIN: `${API_BASE_URL}api/auth/login`,
        REGISTER: `${API_BASE_URL}api/auth/register`
    },
    ACCOUNTS:{
        CREATE: (id: string)=> `${API_BASE_URL}api/accounts/${id}`,
        GET_BY_ID: (id: string) =>`${API_BASE_URL}api/accounts/${id}`,
        DELETE_BY_ID: (id: string) =>`${API_BASE_URL}api/accounts/${id}`
    },
    INCOMES:{
        GET_BY_ID: (id: string) => `${API_BASE_URL}api/incomes/${id}`,
        GET_BY_RANGE:(id: string, startDate: string, endDate:string) => `${API_BASE_URL}api/incomes-range-date/${id}?startDate=${startDate}&endDate=${endDate}`,
        CREATE: `${API_BASE_URL}api/incomes`,
        DELETE_BY_ID: (id: string)=>`${API_BASE_URL}api/incomes/${id}`
    },
    SPENTS:{
        GET_BY_ID: (id: string) => `${API_BASE_URL}api/spents/${id}`,
        GET_BY_RANGE:(id: string, startDate: string, endDate:string) => `${API_BASE_URL}api/spents-range-date/${id}?startDate=${startDate}&endDate=${endDate}`,
        CREATE: `${API_BASE_URL}api/spents`,
        DELETE_BY_ID: (id: string)=>`${API_BASE_URL}api/spents/${id}`
    },
    TRANSFERS:{
        GET_BY_ACCOUNT: (id: string) =>`${API_BASE_URL}api/transfers/${id}`,
        GET_BY_RANGE: (id:string) => `${API_BASE_URL}api/transfers-range-date/${id}`,
        CREATE: `${API_BASE_URL}api/transfers`,
    }
    ,
    USERS:{
        GET_BY_ID: (id: string) => `${API_BASE_URL}api/users/${id}`
    },
    INCOMES_CATEGORIES:{
        GET: `${API_BASE_URL}api/incomes-categories`
    },
    SPENTS_CATEGORIES:{
        GET_BY_ACCOUNT: (id: string) =>`${API_BASE_URL}api/spents-categories/${id}`,
        CREATE: `${API_BASE_URL}api/spents-categories`,
    }

}

export default ENDPOINTS;