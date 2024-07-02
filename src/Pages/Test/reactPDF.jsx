import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';
import { formatRupiah } from '../../Utils/FormatDatas';

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    header: {
        fontSize: 22,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        margin: 12,
        fontSize: 17,
        fontWeight: 'semibold',
        textAlign: 'justify',
    },
    detail: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
    },
    footer: {
        fontSize: 12,
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'center',
        color: 'grey',
        marginTop: 20
    },
});

const namaBank = localStorage.getItem('namaBank')
const namaMobil = localStorage.getItem('nameCar')
const priceMobil = localStorage.getItem('priceCar')
const awalSewa = localStorage.getItem('startDate')
const akhirSewa = localStorage.getItem('endDate')

console.log(namaMobil);

const PDFfile = () => {


    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>Pembayaran Berhasil</Text>
                <Text style={styles.text}>Pesananmu :</Text>
                <Text style={styles.detail}>Mobil : {namaMobil}</Text>
                <Text style={styles.detail}>Total : {formatRupiah(priceMobil)}</Text>
                <Text style={styles.detail}>Mulai Sewa : {awalSewa}</Text>
                <Text style={styles.detail}>Selesai Sewa : {akhirSewa}</Text>
                <Text style={styles.detail}>Nama Bank : {namaBank}</Text>
                <Text style={styles.footer}>Terima kasih Telah Menggunakan Layanan BCR Kami</Text>
            </Page>
        </Document>
    );
}

export default PDFfile