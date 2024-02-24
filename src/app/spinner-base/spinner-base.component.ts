import { NgxSpinnerService } from "ngx-spinner";


export class SpinnerBaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = "s1",
  Timer = "s2"
}
