const sql = require('mssql');
const debug = require('debug')('app:todoservice');

const sqlConfig = require('../commons/db-config');

class TodoService {
  async get(id, req, next) {
    if (id) {
      (async () => {
        try {
          const pool = await sql.connect(sqlConfig);
          const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM DBO.ToDo where id=@id;');
          debug(result);
          req.item = result.recordset[0];
          debug(req.item);
          sql.close();
          next();
        } catch (e) {
          throw e;
        }
      })();
    }
  }
}


module.exports = TodoService;
