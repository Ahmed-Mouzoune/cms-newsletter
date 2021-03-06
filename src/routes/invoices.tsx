import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../controllers/invoicesControllers";

export default function Invoices() {
    let invoices = getInvoices();
    return (
        <div>
            {invoices.map(invoice => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                >
                    {invoice.name}
                </Link>
            ))}
            <Outlet />
        </div>
    );
}
