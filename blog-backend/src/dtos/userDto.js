class userDto {
    id;
    email;

    constructor(model) {
        this.id = model._id;
        this.email = model.email
    }
}

export default userDto;