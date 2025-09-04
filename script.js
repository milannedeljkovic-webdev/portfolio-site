// SQL demo query
const sqlQuery = `SELECT c.region, DATE_FORMAT(o.order_date, '%Y-%m') AS month,
SUM(oi.quantity * oi.unit_price) AS total_sales,
COUNT(DISTINCT o.customer_id) AS unique_customers,
AVG(oi.unit_price) AS avg_price
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN customers c ON o.customer_id = c.id
GROUP BY c.region, month
HAVING total_sales > 1000
ORDER BY total_sales DESC;`;

document.getElementById("sql-code").textContent = sqlQuery;

// Mock data
const data = [
  { region:"Europe", month:"2025-01", total_sales:23400, unique_customers:120, avg_price:18.6 },
  { region:"Asia", month:"2025-01", total_sales:15200, unique_customers:80, avg_price:21.1 }
];

const table = document.getElementById("sql-table");
const headers = Object.keys(data[0]);
table.innerHTML = "<tr>"+headers.map(h=>`<th>${h}</th>`).join("")+"</tr>" +
  data.map(row=>"<tr>"+headers.map(h=>`<td>${row[h]}</td>`).join("")+"</tr>").join("");
