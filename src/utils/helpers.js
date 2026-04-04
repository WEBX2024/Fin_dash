import { format, parseISO } from 'date-fns';

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(dateStr) {
  return format(parseISO(dateStr), 'MMM d, yyyy');
}

export function nextId(transactions) {
  if (transactions.length === 0) return 1;
  return Math.max(...transactions.map((t) => t.id)) + 1;
}
