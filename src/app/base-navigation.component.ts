import { Router, ActivatedRoute, UrlTree } from '@angular/router';

export abstract class BaseNavigationComponent {
  constructor(protected router: Router, protected activatedRoute: ActivatedRoute) {}

  openLink(path: string, outlet?: string) {
    let urlTree: UrlTree;
    if (outlet) {
      let outlets = {};
      outlets[outlet] = path == '' ? null : path;
      urlTree = this.router.createUrlTree([{outlets: outlets}], {relativeTo: this.activatedRoute});
    } else {
      urlTree = this.router.createUrlTree([path], {relativeTo: this.activatedRoute});
    }
    console.warn('navigate to ', this.router.serializeUrl(urlTree));
    this.router.navigateByUrl(urlTree);
  }
}