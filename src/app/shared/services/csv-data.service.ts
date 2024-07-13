import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class CsvDataService {
  downloadFile(data: any, filename = 'data') {
    // console.log('data: ', data);
      let csvData = this.ConvertToCSV(data,
          ['name',
           'email',
           'phone',
           'message']);
      console.log(csvData)
      let blob = new Blob(['\ufeff' + csvData],
          { type: 'text/csv;charset=utf-8;' });
      let dwldLink = document.createElement("a");
      let url = URL.createObjectURL(blob);
      let isSafariBrowser = navigator.userAgent.indexOf('Safari') !=
          -1 && navigator.userAgent.indexOf('Chrome') == -1;
      if (isSafariBrowser) {

          // If Safari open in new window to
          // save file with random filename.
          dwldLink.setAttribute("target", "_blank");
      }
      dwldLink.setAttribute("href", url);
      dwldLink.setAttribute("download", filename + ".csv");
      dwldLink.style.visibility = "hidden";
      document.body.appendChild(dwldLink);
      dwldLink.click();
      document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray: any, headerList: any) {
      let array = typeof objArray !=
          'object' ? JSON.parse(objArray) : objArray;
      // console.log('array: ', array);
      // console.log('array.length: ', Object.keys(array).length);
      let str = '';
      let row = ',';

      for (let index in headerList) {
          row += headerList[index] + ',';
      }
      row = row.slice(0, -1);
      str += row + '\r\n';
      for (let index in headerList) {
          let head = headerList[index];
          // console.log('head: ', head);
          str += ',' + array[head];
      }
      console.log('ConvertToCSV: str - ', str);
      return str;

  }
}
