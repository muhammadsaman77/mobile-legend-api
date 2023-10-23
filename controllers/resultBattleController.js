import db from "../configs/mysql-connect.js";

export const addNewResultBattle = (req, res) => {
  const { body } = req;
  db.query(
    `CALL add_new_user('${body.status}','${body.durasi}','${
      body.mode
    }','${JSON.stringify(body.detail)}')`,
    (err, results) => {
      res.status(201).json({
        status: "success",
        payload: results,
      });
    }
  );
};
