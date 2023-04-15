import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTlhZWVlNmM3ZjllOGRjMDhlOTIzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTQ3MjI3NiwiZXhwIjoxNjgxNzMxNDc2fQ.kIBfjCsXMzNcquroJeUrqUU-2B_U4e7p2fUuPQv2kRw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});