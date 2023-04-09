const paginate = (currentPage, totalItems, totalPages) => {
  const hasPrev = (currentPage > 1)
  const hasNext = (currentPage < totalPages)
  const prevPage = hasPrev ? Number(currentPage) - 1 : null
  const nextPage = hasNext ? Number(currentPage) + 1 : null

  return {
    totalItems,
    hasPrev,
    hasNext,
    currentPage,
    nextPage,
    prevPage,
    totalPages
  }
}

export default paginate