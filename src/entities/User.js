export default class User {

    constructor(obj) {
        this.id = obj._id;
        this.username = obj.username;
        this.name = obj.name;
        this.surname = obj.surname;
        this.email = obj.email;
        this.provider = obj.provider;
        this.confirmed = obj.confirmed;
        this.blocked = obj.blocked;
        this.role = obj.role;
        this.orders = obj.orders;
        this.thirdname = obj.thirdname;
        this.birthday = obj.birthday;
        this.adress = obj.adress;
    }
}