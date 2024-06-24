class UserDTO {
    constructor({ email, name, age, city,zipcode}) {
        this.email = email;
        this.name = name
        this.age = age
        this.city = city
        this.zipcode = zipcode
    }
}

class UserUpdateDTO {
    constructor({ email, name, age, city,zipcode }) {
        if (email) this.email = email;
        if (name) this.name = name;
        if (age) this.age = age
        if (city) this.city = city
        if (zipcode) this.zipcode = zipcode
    }
}

export { UserDTO, UserUpdateDTO };
