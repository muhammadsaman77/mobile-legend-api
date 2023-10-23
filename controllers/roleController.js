import db from "../configs/mysql-connect.js";
import { errorServer } from "../utils/errorRespon.js";

export const addNewRole = (req, res) => {
  const { body } = req;
  db.query(`CALL add_new_role('${body.new_role}')`, (err, results) => {
    res.status(201).json({
      status: "success",
      message: "Created new role succesfully",
    });
  });
};

export const getAllRole = (req, res) => {
  try {
    db.query("CALL get_all_role()", (err, results) => {
      res.status(200).json({
        status: "success",
        payload: results[0],
      });
    });
  } catch (error) {
    errorServer(res, error);
  }
};
