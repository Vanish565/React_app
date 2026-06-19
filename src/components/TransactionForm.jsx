import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

function TransactionForm({ onAddTransaction }) {
  const incomeCategories = [
    "Salary",
    "Freelance",
    "Investment",
    "Bonus",
    "Other",
  ];

  const expenseCategories = [
    "Groceries",
    "Transport",
    "Rent",
    "Utilities",
    "Entertainment",
    "Healthcare",
    "Other",
  ];

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "income",
      category: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
    },
  });

  const selectedType = useWatch({
    control,
    name: "type",
  });

  useEffect(() => {
    setValue("category", "");
  }, [selectedType, setValue]);

  const onSubmit = (data) => {
    onAddTransaction({
      category: data.category,
      amount: Number(data.amount),
      type: data.type,
      date: data.date,
    });

    reset({
      type: "income",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Type */}
      <div>
        <select
          {...register("type", {
            required: "Please select a type",
          })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Category */}
      <div>
        <select
          {...register("category", {
            required: "Please select a category",
          })}
        >
          <option value="">Select Category</option>

          {(selectedType === "income"
            ? incomeCategories
            : expenseCategories
          ).map((category) => (
            <option
              key={category}
              value={category.toLowerCase()}
            >
              {category}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="error">{errors.category.message}</p>
        )}
      </div>
      
      {/* Date */}
      <div>
        <input
          type="date"
          {...register("date", {
            required: "Date is required",
          })}
        />

        {errors.date && (
          <p className="error">
            {errors.date.message}
          </p>
        )}
      </div>

      {/* Amount */}
      <div>
        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          {...register("amount", {
            required: "Amount is required",
            min: {
              value: 1,
              message: "Amount must be greater than 0",
            },
          })}
        />

        {errors.amount && (
          <p className="error">{errors.amount.message}</p>
        )}
      </div>

      <button type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;