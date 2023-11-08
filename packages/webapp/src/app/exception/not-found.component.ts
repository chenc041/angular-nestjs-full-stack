import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, NzResultModule, NzButtonModule],
  template: `
    <nz-result nzStatus='404' nzTitle='404' nzSubTitle='对不起, 当前页面不存在!' class='bg-white min-h-full'>
      <div nz-result-extra>
        <button nz-button nzType='primary'>返回首页</button>
      </div>
    </nz-result>
  `,
})
export default class NotFoundComponent {

}
