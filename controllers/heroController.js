import db from "../configs/mysql-connect.js";
export const addNewHero = (req, res) => {
  const { body } = req;
  db.query(
    `CALL add_new_hero('${body.name}','${body.first_role}','${body.second_role}')`,
    (err, results) => {
      res.status(201).json({
        status: "success",
        payload: results,
      });
    }
  );
};
