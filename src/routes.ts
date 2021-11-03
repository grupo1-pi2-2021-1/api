import express from "express";
import knex from "./database/connection";

const routes = express.Router();

//procedureHistory

routes.post("/user", async (request, response) => {
  const { name, phone } = request.body;

  await knex("users").insert({ name, phone });

  return response.json({ name, phone });
});

routes.get("/ambulances", async (request, response) => {
  const ambulances = await knex("ambulate").select("*");

  const serializedItems = ambulances.map((item) => {
    return {
      title: item.title,
      description: item.description,
      //type: item.type,
    };
  });

  return response.json(serializedItems);
});

routes.get("/procedures", async (request, response) => {
  const procedures = await knex("procedure").select("*");

  const serializedItems = procedures.map((item) => {
    return {
      title: item.title,
      description: item.description,
      //executionTime: item.executionTime,
    };
  });

  return response.json(serializedItems);
});

routes.post("/addProcedureHistory", async (request, response) => {
  const { user_id, procedure_id } = request.body;
  const hour = new Date();

  await knex("history_procedure").insert({ user_id, procedure_id, hour });

  return response.json({ user_id, procedure_id, hour });
});

routes.get("/:id/listProcedures", async (request, response) => {
  const { id } = request.params;

  const posts = await knex("history_procedure")
    .leftJoin("users", "users.id", "history_procedure.user_id")
    .leftJoin("procedure", "procedure.id", "history_procedure.procedure_id")
    .select("history_procedure.id", "users.name", "procedure.title", "history_procedure.hour")
    .where({ user_id: id });

    const serializedItems = posts.map((item) => {
      return {
        name: item.name,
        title: item.title,
        hour: new Date(item.hour).toLocaleString('pt-BR')
      };
    });

  return response.json(serializedItems);
});

export default routes;