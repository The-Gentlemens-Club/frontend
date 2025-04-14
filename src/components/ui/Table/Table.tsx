import React from "react";
import styles from "./Table.module.scss";

interface TableProps<T> {
  data: T[];
  columns: {
    key: keyof T;
    header: string;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
  }[];
  className?: string;
}

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  className = "",
}: TableProps<T>) => {
  return (
    <div className="table-container">
      <table className={`table ${className}`}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key as string} className="table-header">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="table-row">
              {columns.map((column) => (
                <td key={column.key as string} className="table-cell">
                  {column.render
                    ? column.render(item[column.key], item)
                    : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
