import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
 import  jsPDF  from 'jspdf';
import { PdfDataSharing } from 'src/app/services/pdf-data-sharing.service';


@Component({
  selector: 'app-ap-download',
  templateUrl: './ap-download.component.html',
  styleUrls: ['./ap-download.component.scss']
})
export class ApDownloadComponent implements OnInit {

  constructor(private pdfDataSharing:PdfDataSharing) { }
  
  ngOnInit(): void {

    
    
  }
  name = 'Angular Html To Pdf ';

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

   
  // public downloadAsPDF() {
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };

  //   const pdfTable = this.pdfTable.nativeElement;

  //   doc.html(document.body, {
  //     callback: function (doc) {
  //       doc.save();
  //     }
  //  });
  // }

  openPDF(): void {
    const doc = new jsPDF('letter')
    const ta = document.getElementById('pdfTable');
    doc.fromHTML(ta, 0, 0);
    doc.save('APInfor.pdf')
  }


}
