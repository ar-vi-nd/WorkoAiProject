class createAdminDTO {
    constructor({ email, password, name,age,city,zipcode }) {
        this.email = email
        this.password = password
        this.name = name
        this.age = age
        this.city = city
        this.zipcode = zipcode
    }
}
class loginAdminDTO {
    constructor({ email, password, name }) {
        this.email = email;
        this.password = password;
    }
}

export  {createAdminDTO,loginAdminDTO};