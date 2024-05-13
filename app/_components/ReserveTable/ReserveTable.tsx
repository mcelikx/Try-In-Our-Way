"use client";

import classes from "./reserveTable.module.css";
import { Calendar } from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";

const ReserveTable = () => {
  return (
    <div className={classes.root}>
      <h1>Reserve Table</h1>
      <I18nProvider locale="en-US">
        <Calendar
          aria-label="Date (International Calendar)"
          onSelect={(date) => console.log(date)}
          onChange={(date) => console.log(date)}
        />
      </I18nProvider>
    </div>
  );
};

export default ReserveTable;
