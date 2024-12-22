import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EodReport() {
    const [formData, setFormData] = useState({
        store: { dealerStoreId: "" },
        employee: { employeeNtid: "" },
        actualCash: "",
        systemCash: "",
        actualCard: "",
        systemCard: "",
        cashExpense: "",
        expenseReason: "",
        boxesSold: "",
        hsiSold: "",
        tabletsSold: "",
        watchesSold: ""
    });

    const handleChange = (e) => {
        if (name === "dealerStoreId") {
            setFormData({
                ...formData,
                store: { ...formData.store, dealerStoreId: value },
            });
        } else if (name === "employeeNtid") {
            setFormData({
                ...formData,
                employee: { ...formData.employee, employeeNtid: value },
            });
        } else {
            // Handle other fields
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/saveSaleDetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("EOD Report submitted successfully!");
            } else {
                alert("Failed to submit the report.");
            }
        } catch (error) {
            console.error("Error submitting the report:", error);
            alert("An error occurred.");
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">EOD Report</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Store ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="storeId"
                            value={formData.store.dealerStoreId}
                            onChange={handleChange}
                            placeholder="Enter Store ID"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Employee NTID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="employeeNtid"
                            value={formData.employee.employeeNtid}
                            onChange={handleChange}
                            placeholder="Enter Employee NTID"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Actual Cash</label>
                        <input
                            type="text"
                            className="form-control"
                            name="actualCash"
                            value={formData.actualCash}
                            onChange={handleChange}
                            placeholder="Enter Actual Cash"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>System Cash</label>
                        <input
                            type="text"
                            className="form-control"
                            name="systemCash"
                            value={formData.systemCash}
                            onChange={handleChange}
                            placeholder="Enter System Cash"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Actual Card</label>
                        <input
                            type="text"
                            className="form-control"
                            name="actualCard"
                            value={formData.actualCard}
                            onChange={handleChange}
                            placeholder="Enter Actual Card"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>System Card</label>
                        <input
                            type="text"
                            className="form-control"
                            name="systemCard"
                            value={formData.systemCard}
                            onChange={handleChange}
                            placeholder="Enter System Card"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Cash Expenses</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cashExpense"
                            value={formData.cashExpense}
                            onChange={handleChange}
                            placeholder="Enter Cash Expenses"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Expense Reason</label>
                        <input
                            type="text"
                            className="form-control"
                            name="expenseReason"
                            value={formData.expenseReason}
                            onChange={handleChange}
                            placeholder="Enter Expense Reason"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Boxes Sold</label>
                        <input
                            type="text"
                            className="form-control"
                            name="boxesSold"
                            value={formData.boxesSold}
                            onChange={handleChange}
                            placeholder="Enter Boxes Sold"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>HSI Sold</label>
                        <input
                            type="text"
                            className="form-control"
                            name="hsiSold"
                            value={formData.hsiSold}
                            onChange={handleChange}
                            placeholder="Enter HSI Sold"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Tablets Sold</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tabletsSold"
                            value={formData.tabletsSold}
                            onChange={handleChange}
                            placeholder="Enter Tablets Sold"
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Watches Sold</label>
                        <input
                            type="text"
                            className="form-control"
                            name="watchesSold"
                            value={formData.watchesSold}
                            onChange={handleChange}
                            placeholder="Enter Watches Sold"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">
                    Submit EOD
                </button>
            </form>
        </div>
    );
}

export default EodReport;
