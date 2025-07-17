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
            color: "hsl(217, 28%, 15%)"
        },
        {
            id: 2,
            title: "Team Builder",
            description: "Scans our talent network to create the optimal team for your project",
            icon: IconTeamBuilder,
            color: "hsl(217, 28%, 15%)"
        },
        {
            id: 3,
            title: "Karma",
            description: "Regularly evaluates our talent to ensure quality",
            icon: IconKarma,
            color: "hsl(217, 28%, 15%)"
        },
        {
            id: 4,
            title: "Calculator",
            description: "Uses data from past projects to provide better delivery estimates",
            icon: IconCalculator,
            color: "hsl(217, 28%, 15%)"
        }
    ];

  return (
    <section>
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
