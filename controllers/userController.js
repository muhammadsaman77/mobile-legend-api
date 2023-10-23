import db from "../configs/mysql-connect.js";
import { errorServer } from "../utils/errorRespon.js";

export const getAllUsers = (req, res) => {
  try {
    db.query("CALL get_all_user();", (err, results) => {
      res.status(200).json({
        status: "success",
        payload: results[0],
      });
    });
  } catch (error) {
    errorServer(res, error);
  }
};

export const addNewUser = (req, res) => {
  const { body } = req;
  try {
    db.query(
      `CALL add_new_user('${body.name}','${body.gender}');`,
      (err, results) => {
        res.status(201).json({
          status: "success",
          message: "Created new user succesfully",
        });
      }
    );
  } catch (error) {
    errorServer(res, error);
  }
};

export const editUsername = (req, res) => {
  const { body } = req;
  try {
    db.query(
      `CALL edit_user_name('${body.old_name}','${body.new_name}');`,
      (err, results) => {
        res.status(200).json({
          status: "success",
          message: "Updated username succesfully",
        });
      }
    );
  } catch (error) {
    errorServer(res, error);
  }
};
export const deleteUserByName = (req, res) => {
  const { body } = req;
  try {
    db.query(`CALL delete_user_by_name('${body.name}')`, (err, results) => {
      res.status(200).json({
        status: "success",
        message: "Deleted user succesfully",
      });
    });
  } catch (error) {
    errorServer(res, error);
  }
};
