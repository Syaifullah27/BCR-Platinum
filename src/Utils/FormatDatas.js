export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number)
}

export const formatKategoryCars = (size) => {
    if (size === 'small') {
        return '2-4 Orang'
    }
    if (size === 'medium') {
        return '4-6 Orang'
    }
    if (size === 'large') {
        return '6-8 Orang'
    }else {
        return '-'
    }
}