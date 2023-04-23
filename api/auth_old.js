export default (axios) => ({

    /**
     * Api POST endpoint that sends the token in order to allow the user to login and use the api endpoints
     * @param  {String} email The email of the user
     * @param  {String} password The password of the user
     */
    login(email, password) {
        /* return axios.post(`/oauth/token`, {
            username: email,
            password: password
        }); */
        return {
            name: "Dairew",
            token: "testing"
        }
    },

    /**
     * Api POST endpoint that sends an email to the user for resetting their password
     * @param  {String} email The email of the user
     * @return {Promise} The http promise of the api petition
     */
    forgotPassword(email) {
        return axios.post(`/api/forgot-password`, {
            url:
                process.env.CLIENT_SCHEMA +
                "://" +
                process.env.CLIENT_HOST +
                ":" +
                process.env.CLIENT_PORT,
            email: email,
        });
    },

    /**
     * Api POST endpoint that sends a petition to logout the user
     * @return {Promise} The http promise of the api petition
     */
    logout() {
        return axios.post(`${common}/logout`);
    },

    /**
     * Api POST endpoint that sends a petition to change the password because te user forgot theirs
     * @param {String} password The user password
     * @param {String} resetToken The user token to reset the password
     * @return {Promise} The http promise of the api petition
     */
    resetPassword(password, resetToken) {
        return axios.post("/auth/password/reset", {
            password: password,
            token: resetToken,
        });
    },

    /**
     * Api GET endpoint that sends a petition to check if an email is already in our database and if it's verified
     * @param {String} email The email to check
     * @return {Promise} The http promise of the api petition
     */
     getUserExists(email) {
        return axios.get(`api/emailExists/${email}`);
    },

    /**
     * Api POST endpoint that sends a petition to create a new user
     * @param {Object} form The form with all the inputs needed to create an user
     * @return {Promise} The http promise of the api petition
     */
     createUser(form) {
        return axios.post(`api/new-user-account`, form);
    }
});
