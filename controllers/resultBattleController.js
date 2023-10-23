import db from "../configs/mysql-connect.js";
import { errorServer } from "../utils/errorRespon.js";

export const addNewResultBattle = (req, res) => {
  const { body } = req;
  try {
    db.query(
      `CALL add_result_battle("${body.status}","${body.durasi}","${
        body.mode
      }",'${JSON.stringify(body.detail)}')`,
      (err, results) => {
        res.status(201).json({
          status: "success",
          payload: results,
        });
      }
    );
  } catch (error) {
    errorServer(res, error);
  }
};
