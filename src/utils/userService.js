/**
 * @typedef {Object} User Utenti di sistema
 * @property {string} name nome dell'utente
 */

export default {
    /**
     * @returns {User[]} lista degli utenti
    */
    getUsers: () => {
        return [{
            name: 'Mario'
        }, {
            name: 'Luigi'
        }];
    }
};