import axios from "axios";

const api = axios.create({
    baseURL: 'LINK DO DEPLOY DO SEU BACK END'
})

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}