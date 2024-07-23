// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getButtonClass = (number) => {
        return number === currentPage
            ? 'mx-1 px-4 py-2 border border-blue-500 rounded text-blue-500'
            : 'mx-1 px-4 py-2 border border-gray-300 rounded text-gray-500';
    };

    let itemsPagination = [];
    for (let number = 1; number <= totalPages; number++) {
        itemsPagination.push(
            <button
                key={number}
                onClick={() => onPageChange(number)}
                className={getButtonClass(number)}
            >
                {number}
            </button>
        );
    }

    return (
        <div className="flex justify-center items-center space-x-2 py-10 mt-10 max-sm:space-x-1">
            <button
                onClick={() => onPageChange(1)}
                className="mx-1 px-4 py-2 border border-gray-300 rounded text-gray-500 max-sm:px-2"
                disabled={currentPage === 1}
            >
                «
            </button>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                className="mx-1 px-4 py-2 border border-gray-300 rounded text-gray-500 max-sm:px-2"
                disabled={currentPage === 1}
            >
                ‹
            </button>
            {itemsPagination}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                className="mx-1 px-4 py-2 border border-gray-300 rounded text-gray-500 max-sm:px-2"
                disabled={currentPage === totalPages}
            >
                ›
            </button>
            <button
                onClick={() => onPageChange(totalPages)}
                className="mx-1 px-4 py-2 border border-gray-300 rounded text-gray-500 max-sm:px-2"
                disabled={currentPage === totalPages}
            >
                »
            </button>
        </div>
    );
};

export default Pagination;