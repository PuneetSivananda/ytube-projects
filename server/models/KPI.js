import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const KPISchema = new Schema({
  totalProfile: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  totalRevenue: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  totalExpenses: {
    type: mongoose.Types.Currency,
    currency: "USD",
    get: (v) => v / 100,
  },
  expenseByCategory: {},
});

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
