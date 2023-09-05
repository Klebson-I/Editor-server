import { User } from "./types";


export class UserManager {
    users: User[] = [];
    private static instance: UserManager;

    constructor () {
        if (UserManager.instance) {
            return UserManager.instance;
        }
        UserManager.instance = this;
    }

    addUser (user: User) {
        this.users.push(user);
    }

    getUsers () {
        return this.users;
    }
};