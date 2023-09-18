export interface IAuth {

    execute: (email: string, password: string) => Promise<Session>

}


export type Session = {
    auth: boolean,
    token: string,
    data: any,
}