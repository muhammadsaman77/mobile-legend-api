import db from "../configs/mysql-connect.js";

export const getAllUsers = (req, res) => {
  db.query("CALL get_all_user()", (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const addNewUser = (req, res) => {
  const { body } = req;
  db.query(
    `CALL add_new_user('${body.name}','${body.gender}')`,
    (err, results) => {
      res.json({
        status: "success",
        payload: results,
      });
    }
  );
};

export const editUsername = (req, res) => {
  const { body } = req;
  db.query(
    `CALL add_new_user('${body.old_name}','${body.new_name}')`,
    (err, results) => {
      res.json({
        status: "success",
        payload: results,
      });
    }
  );
};
export const deleteUserByName = (req, res) => {
  const { body } = req;
  db.query(`CALL add_new_user('${body.name}')`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};
