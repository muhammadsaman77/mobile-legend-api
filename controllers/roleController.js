import db from "../configs/mysql-connect.js";

export const addNewRole = (req, res) => {
  const { body } = req;
  db.query(`CALL add_new_role('${body.new_role}')`, (err, results) => {
    res.status(201).json({
      status: "success",
      payload: results,
    });
  });
};

export const getAllRole = (req, res) => {
  db.query("CALL get_all_role()", (err, results) => {
    res.status(200).json({
      status: "success",
      payload: results,
    });
  });
};
