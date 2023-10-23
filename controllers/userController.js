import db from "../configs/mysql-connect.js";

export const getAllUsers = (req, res) => {
  db.query("CALL get_all_user()", (err, results) => {
    res.status(200).json({
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
      res.status(201).json({
        status: "success",
        payload: results,
      });
    }
  );
};

export const editUsername = (req, res) => {
  const { body } = req;
  try {
    db.query(
      `CALL add_new_user('${body.old_name}','${body.new_name}')`,
      (err, results) => {
        res.status(200).json({
          status: "success",
          payload: results,
        });
      }
    );
  } catch (error) {
    res.status(500).json({});
  }
};
export const deleteUserByName = (req, res) => {
  const { body } = req;
  db.query(`CALL add_new_user('${body.name}')`, (err, results) => {
    res.status(200).json({
      status: "success",
      payload: results,
    });
  });
};
