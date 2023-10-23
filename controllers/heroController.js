import db from "../configs/mysql-connect.js";
import { errorServer } from "../utils/errorRespon.js";
export const addNewHero = (req, res) => {
  const { body } = req;
  try {
    db.query(
      `CALL add_new_hero('${body.name}','${body.first_role}','${body.second_role}')`,
      (err, results) => {
        res.status(201).json({
          status: "success",
          message: "Created new hero succesfully",
        });
      }
    );
  } catch (error) {
    errorServer(res, error);
  }
};
