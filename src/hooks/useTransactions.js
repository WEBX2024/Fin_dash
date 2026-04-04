import { useState, useMemo } from 'react';

export function useTransactions(transactions) {
  const [searchQuery, setSearchQuery]     = useState('');
  const [typeFilter, setTypeFilter]       = useState('all');
  const [sortField, setSortField]         = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const toggleSort = (field) => {
    if (field === sortField) {
      setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filtered = useMemo(() => {
    let result = [...transactions];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q),
      );
    }

    if (typeFilter !== 'all') {
      result = result.filter((t) => t.type === typeFilter);
    }

    result.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (typeof valA === 'string') {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [transactions, searchQuery, typeFilter, sortField, sortDirection]);

  return {
    filtered,
    searchQuery,
    setSearchQuery,
    typeFilter,
    setTypeFilter,
    sortField,
    sortDirection,
    toggleSort,
  };
}
