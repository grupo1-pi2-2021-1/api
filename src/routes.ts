import express from "express";
import knex from "./database/connection";

const routes = express.Router();

//JSON.stringify(item.steps)

routes.post("/user", async (request, response) => {
  const { name, phone } = request.body;

  await knex("users").insert({ name, phone }).returning('id')
  .into('users')
  .then(function (id) {
    // use id here
    return response.json({ id });
  });
});

routes.get("/ambulances", async (request, response) => {
  const ambulances = await knex("ambulate").select("*");

  const serializedItems = ambulances.map((item) => {
    return {
      title: item.title,
      description: item.description,
      id: item.id,
      //type: item.type,
    };
  });

  return response.json(serializedItems);
});

routes.get("/procedures", async (request, response) => {
  const procedures = await knex("procedure").select("*");

  const serializedItems = procedures.map((item) => {
    return {
      type: item.type,
      name: item.name,
      description: item.description,
      time: item.time,
      id: item.id,
    };
  });

  return response.json(serializedItems);
});

routes.get("/proceduresSteps", async (request, response) => {
  const procedures = await knex("procedure").select("*");

  const serializedItems = procedures.map((item) => {
    return {
      title: item.title,
      description: item.description,
      type: item.type,
      time: item.time,
      steps: JSON.parse(item.steps),
      id: item.id,
    };
  });

  return response.json(serializedItems);
});

routes.post("/addProcedureHistory", async (request, response) => {
  const { user_id, procedure_id } = request.body;
  const hour = new Date();

  await knex("history_procedure").insert({ user_id, procedure_id, hour });

  return response.json({ sucess: "Deu certo" });
});

routes.get("/:id/listProcedures", async (request, response) => {
  const { id } = request.params;

  const posts = await knex("history_procedure")
    .leftJoin("users", "users.id", "history_procedure.user_id")
    .leftJoin("procedure", "procedure.id", "history_procedure.procedure_id")
    .select(
      "history_procedure.id",
      "users.name",
      "procedure.title",
      "history_procedure.hour"
    )
    .where({ user_id: id });

  const serializedItems = posts.map((item) => {
    return {
      name: item.name,
      title: item.title,
      hour: new Date(item.hour).toLocaleString("pt-BR"),
      id: item.id
    };
  });

  return response.json(serializedItems);
});

/*routes.get("/:id/steps", async (request, response) => {
  const { id } = request.params;

  const posts = await knex("steps")
    .leftJoin("procedure", "procedure.id", "steps.procedure_id")
    .select("procedure.title", "procedure.description", "procedure.type", "procedure.time","steps.id", "steps.id")
    .where({ procedure_id: id });

    const serializedItems = posts.map((item) => {
      return {
        title: item.title,
        description: item.description, 
        type: item.type,
        time: item.time, 
        steps: [1, 2, 3, 4, 5],
        id: item.id
      };
    });

  return response.json(serializedItems);
});*/

export default routes;
