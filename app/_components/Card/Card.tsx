import classes from "./card.module.css";
import { CardBody } from "@nextui-org/react";
import { Card as CardComp } from "@nextui-org/react";
const Card = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className={classes.root}>
    <CardComp>
      <CardBody>{children}</CardBody>
    </CardComp>
  </div>
);

export default Card;
