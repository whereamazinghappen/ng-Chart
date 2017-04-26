import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
        case 0:
            return '未开始';
            //break;
        case 1:
            return '进行中';
            //break;
        case 2:
            return '已结束';
            //break;    
        default:
            return '未开始已结束';
            //break;
    }
  }

}
