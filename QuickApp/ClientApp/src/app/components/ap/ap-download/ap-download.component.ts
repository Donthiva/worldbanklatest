import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
 import  jsPDF  from 'jspdf';


@Component({
  selector: 'app-ap-download',
  templateUrl: './ap-download.component.html',
  styleUrls: ['./ap-download.component.scss']
})
export class ApDownloadComponent implements OnInit {

  constructor() { }

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
    const DATA = this.pdfTable.nativeElement;
    const doc: jsPDF = new jsPDF("p", "mm", "a4");
    doc.html(DATA, {
      callback: (doc) => {
        doc.output("dataurlnewwindow");
      }
    });
  }


}
