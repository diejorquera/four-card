import { Card } from "./Card";

import IconSupervisor from "../assets/images/icon-supervisor.svg";
import IconTeamBuilder from "../assets/images/icon-team-builder.svg";
import IconKarma from "../assets/images/icon-karma.svg";
import IconCalculator from "../assets/images/icon-calculator.svg";  

export const CardsContainer = () => {

    const services = [
        {
            id: 1,
            title: "Supervisor",
            description: "Monitors activity to identify project roadblocks",
            icon: IconSupervisor,
            color: "cyan"
        },
        {
            id: 2,
            title: "Team Builder",
            description: "Scans our talent network to create the optimal team for your project",
            icon: IconTeamBuilder,
            color: "red"
        },
        {
            id: 3,
            title: "Karma",
            description: "Regularly evaluates our talent to ensure quality",
            icon: IconKarma,
            color: "orange"
        },
        {
            id: 4,
            title: "Calculator",
            description: "Uses data from past projects to provide better delivery estimates",
            icon: IconCalculator,
            color: "blue"
        }
    ];

  return (
    <section className="flex flex--col items-center">
        {
            services.map((service) => (
                <Card 
                    key={service.id}
                    {...service}
                />
            ))
        }
    </section>
  )
}
