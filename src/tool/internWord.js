import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';
// Create document
function internWord() {
    // word签名
    const doc = new Document({
        creator: "admin",
        title: "Sample Document",
        description: "A brief example of using docx",
    });
    doc.addSection({
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun("Hello World"),
                    new TextRun({
                        text: "Foo Bar",
                        bold: true,
                    }),
                    new TextRun({
                        text: "Github is the best",
                        bold: true,
                    }).tab(),
                ],
            }),
        ],
    });
    const paragraph = new Paragraph({
        text: "Short hand notation for adding text.",
    });
    doc.addSection({
        children: [paragraph],
    });
// 导出文件
Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "合同.docx");
});
    
    // const numberedAbstract = doc.Numbering.createAbstractNumbering();
    // numberedAbstract.createLevel(0, "lowerLetter", "%1)", "left");
    // generateBreakInline(6)
    // doc.createParagraph("上海育碧电脑软件有限公司").heading1().thematicBreak();
    // generateBreakInline(4)
    // doc.createParagraph("实 习 合 同").heading2().thematicBreak();
    // generateBreakInline(23)
    // doc.createParagraph("2019年8月6日").heading5().thematicBreak();
    // doc.createParagraph("中国，上海").heading5().thematicBreak();
    // https://docx.js.org/#/usage/text?id=break
    // generateBreakInline(6)
    // let title1 = new TextRun("上海育碧电脑软件有限公司").bold().size(36);
    // let paragraph_title1 = new Paragraph().center();
    // paragraph_title1.addRun(title1);
    // doc.addParagraph(paragraph_title1);
    // generateBreakInline(4)
    // let title2 = new TextRun("实 习 合 同").bold().size(56);
    // let paragraph_title2 = new Paragraph().center();
    // paragraph_title2.addRun(title2);
    // doc.addParagraph(paragraph_title2);
    // generateBreakInline(23)
    // let title3 = new TextRun("2019年8月6日")
    // let title3_1 = new TextRun("中国，上海")
    // let paragraph_title3 = new Paragraph().center();
    // paragraph_title3.addRun(title3);
    // doc.addParagraph(paragraph_title3);
    // doc.createParagraph("Some simple content");
    // doc.createParagraph("Test heading2 with double red underline").heading2();
    
    // const letterNumbering = doc.Numbering.createConcreteNumbering(numberedAbstract);
    // const letterNumbering5 = doc.Numbering.createConcreteNumbering(numberedAbstract);
    // letterNumbering5.overrideLevel(0, 5);
    
    // doc.createParagraph("Option1").setNumbering(letterNumbering, 0);
    // doc.createParagraph("Option5 -- override 2 to 5").setNumbering(letterNumbering5, 0);
    // doc.createParagraph("Option3").setNumbering(letterNumbering, 0);
    
    // doc
    //     .createParagraph()
    //     .createTextRun("Some monospaced content")
    //     .font("Monospace");
    
    // doc.createParagraph("An aside, in light gray italics and indented").style("aside");
    // doc.createParagraph("This is normal, but well-spaced text").style("wellSpaced");
    // const para = doc.createParagraph();
    // para.createTextRun("This is a bold run,").bold();
    // para.createTextRun(" switching to normal ");
    // para.createTextRun("and then underlined ").underline();
    // para.createTextRun("and back to normal.");
    // doc.createParagraph("上海育碧电脑软件有限公司").Heading1();
    // const packer = new Packer();
    
    // packer.toBlob(doc).then(blob => {
    //         saveAs(blob, "合同.docx");
    //         console.log("Document created successfully");
    //     });
}
export default internWord