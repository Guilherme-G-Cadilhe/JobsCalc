const express = require("express"); // Biblioteca

const routes = express.Router(); // Objeto guarda rotas

const Profile = {
  data: {
    name: "Guilherme",
    avatar: "https://github.com/Guilherme-G-Cadilhe.png",
    "monthly-budget": 3000,
    "hours-per-day": 5,
    "days-per-week": 5,
    "vacation-per-year": 4,
    "value-hour": 75,
  },
  controllers: {
    index(req, res) {
      return res.render(views + "profile", { profile: Profile.data });
    },
    update() {},
  },
};

const Job = {
  data: [
    {
      id: 1,
      name: "Pizzaria Guloso",
      "daily-hours": 2,
      "total-hours": 1,
      created_at: Date.now(),
    },
    {
      id: 2,
      name: "OneTwo Project",
      "daily-hours": 3,
      "total-hours": 47,
      created_at: Date.now(),
    },
  ],

  controllers: {
    index(req, res) {
      //Calculos dos Jobs
      const updatedJobs = Job.data.map((job) => {
        const remaining = Job.services.remainingDays(job);
        const status = remaining <= 0 ? "done" : "progress";

        return {
          ...job,
          remaining,
          status,
          budget: Profile.data["value-hour"] * job["total-hours"],
        };
      });

      return res.render(views + "index", { jobs: updatedJobs });
    },
    create(req, res) {
      // Render = Renderiza e compila um template(esj) em html
      return res.render(views + "job");
    },
    save(req, res) {
      const lastId = Job.data[Job.data.length - 1]?.id || 1;
      // Pega o envio do formulario e cria um objeto com os dados
      Job.data.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now(), // atribuindo data criação
      });
      return res.redirect("/");
    },
  },

  services: {
    remainingDays(job) {
      // Calculo de tempo restante
      const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

      const createdDate = new Date(job.created_at);
      // pega número do dia \/ + Calculo escolhido pelo perfil
      const dueDay = createdDate.getDate() + Number(remainingDays);
      // Cria o dia do mês relativo ao número passado \/ em ms
      const dueDateInMs = createdDate.setDate(dueDay);

      // dia passado em ms - o dia atual
      const timeDiffInMs = dueDateInMs - Date.now();
      // Transformar millisegundo(ms) em dias
      const dayInMs = 1000 * 60 * 60 * 24;
      const dayDiff = Math.floor(timeDiffInMs / dayInMs);

      // restam x dias
      return dayDiff;
    },
  },
};

// __dirname = variavel que é diretorio atual
const views = __dirname + "/views/";

// request, response ( Pedido, Resposta)
routes.get("/", Job.controllers.index);
routes.get("/job", Job.controllers.create);
routes.post("/job", Job.controllers.save);

routes.get("/job/edit", (req, res) => res.render(views + "job-edit"));
routes.get("/profile", Profile.controllers.index);

module.exports = routes;
