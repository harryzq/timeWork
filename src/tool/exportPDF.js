import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

let exportPDF = () => {
/* 导出PDF */
  let html = document.body
  const SIZE = [595.28,841.89];  //a4宽高
  html2canvas(html, {
    useCORS: true
  }).then(function(canvas) {
    let contentWidth = canvas.width;
    let contentHeight = canvas.height;
    //一页pdf显示html页面生成的canvas高度;
    let pageHeight = contentWidth / SIZE[0] * SIZE[1];
    //未生成pdf的html页面高度
    let leftHeight = contentHeight;
    //html页面生成的canvas在pdf中图片的宽高
    let imgWidth = SIZE[0];
    let imgHeight = imgWidth / contentWidth * contentHeight;
    let pageData = canvas.toDataURL('image/jpeg', 1.0);
    let pdf = new jsPDF('', 'pt', 'a4', true);
    //pdf页面竖向偏移
    let position = 0;
    if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight, 'FAST' );
    } else {
        while(leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -= SIZE[1];
            //避免添加空白页
            if(leftHeight > 0) {
                pdf.addPage();
            }
        }
    }
    pdf.save('合同.pdf');
  })

}

export default exportPDF
