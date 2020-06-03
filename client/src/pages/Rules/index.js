import React from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import NewButton from "../../components/NewButton";
import RuleCard from "../../components/RuleCard";
import "./style.scss";

const rules = [
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
  {
    id: 1,
    from: "Audiência conciliação designada - 01/02/2019 08:30",
    to:
      "A audiência de conciliação,forma amigável de resolver um processo, foi marcada. Ela será realizada no dia 01/02/19 às 08:30, no local indicado.",
  },
];

export default function Procedures() {
  return (
    <div className="container">
      <Header />
      <main>
        <article className="intro">
          <h1>Regras</h1>
          <div className="intro__actions">
            <SearchInput placeholder="Procure uma regra" />
            <NewButton />
          </div>
        </article>
        <p className="explanation">
          Regras permitem que pedaços de texto nos seus andamentos sejam
          substituídos, facilitando o entendimento dos seus clientes
        </p>
        <section className="folders">
          {rules.map((rule, index) => (
            <RuleCard key={index} from={rule.from} to={rule.to} id={rule.id} />
          ))}
        </section>
      </main>
    </div>
  );
}